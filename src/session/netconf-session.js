import { splitMessages, frame } from './framing.js';
import { rpcReply, rpcError } from './envelope.js';
import { dispatch } from '../handlers/dispatch.js';

// Reply-ordering behavior.
//   deterministic (default): render and write each reply immediately in receipt
//     order. Reproducible; used for throughput tests and normal operation.
//   reorder: schedule each reply after a small random delay so that a pipelined
//     batch of RPCs comes back in a SHUFFLED order, faithfully reproducing a
//     real device that may complete in-flight requests out of order. Use this to
//     test that the client correlates replies by message-id, not by position.
//
// Controlled per-process via env (REPLY_MODE=reorder) or per-session via opts.
// Delay range is configurable; defaults give visible but small reordering.
const ENV_MODE = process.env.REPLY_MODE === 'reorder' ? 'reorder' : 'deterministic';
const ENV_MIN = Number(process.env.REPLY_DELAY_MIN_MS || 2);
const ENV_MAX = Number(process.env.REPLY_DELAY_MAX_MS || 40);

// Server <hello>. Advertises base:1.0 only, so the client uses EOM framing and
// we don't have to implement chunked framing in v1. session-id is per-connection.
function serverHello(sessionId) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">` +
    `<capabilities>` +
    `<capability>urn:ietf:params:netconf:base:1.0</capability>` +
    `</capabilities>` +
    `<session-id>${sessionId}</session-id>` +
    `</hello>`
  );
}

// Pulls the operation name out of an <rpc> message and its message-id.
// Deliberately lightweight: a regex is enough for the well-formed RPCs our
// client sends, and avoids a full XML parse on the hot path. If a real client
// sends namespaced or oddly-formatted RPCs, swap in a streaming parser here —
// this is the one place that would need it.
function parseRpc(xml) {
  const idMatch = xml.match(/<rpc[^>]*\bmessage-id="([^"]*)"/);
  const messageId = idMatch ? idMatch[1] : null;
  // first child element of <rpc> that isn't a namespace/util element
  const opMatch = xml.match(/<rpc\b[^>]*>\s*<([a-zA-Z][\w-]*)/);
  const operation = opMatch ? opMatch[1] : null;
  return { messageId, operation };
}

// Wires a NETCONF session onto a duplex stream (the ssh2 channel). `device` is
// the resolved device for this connection (from destination IP).
//
// opts:
//   replyMode: 'deterministic' | 'reorder'  (default from REPLY_MODE env)
//   delayMinMs, delayMaxMs: reorder delay bounds (default from env)
export function startSession(stream, device, sessionId, opts = {}) {
  const replyMode = opts.replyMode || ENV_MODE;
  const delayMin = opts.delayMinMs ?? ENV_MIN;
  const delayMax = opts.delayMaxMs ?? ENV_MAX;

  let buffer = '';
  let pendingReplies = 0;   // delayed replies not yet flushed
  let closeRequested = false;

  // Send our hello immediately on session open.
  stream.write(frame(serverHello(sessionId)));

  // Render a reply payload for one RPC (or an rpc-error). Pure; no I/O.
  const render = (messageId, operation, requestXml) => {
    try {
      return rpcReply(messageId, dispatch(operation, device, requestXml));
    } catch (err) {
      return rpcError(messageId, err.message);
    }
  };

  // Write a reply now, or after a random delay in reorder mode. Independent
  // delays per reply are what produce out-of-order arrival for a pipelined
  // batch. close-session is deferred until all delayed replies have flushed.
  const emit = (text) => {
    if (replyMode === 'reorder') {
      pendingReplies += 1;
      const delay = delayMin + Math.random() * (delayMax - delayMin);
      setTimeout(() => {
        stream.write(frame(text));
        pendingReplies -= 1;
        if (closeRequested && pendingReplies === 0) stream.end();
      }, delay);
    } else {
      stream.write(frame(text));
    }
  };

  stream.on('data', (chunk) => {
    buffer += chunk.toString('utf8');
    const { messages, rest } = splitMessages(buffer);
    buffer = rest;

    for (const msg of messages) {
      const trimmed = msg.trim();
      if (trimmed.length === 0) continue;

      // Ignore the client's <hello>; we've already advertised ours.
      if (trimmed.includes('<hello')) continue;

      // <close-session> -> ok, then end once any delayed replies have flushed.
      if (trimmed.includes('<close-session')) {
        const { messageId } = parseRpc(trimmed);
        emit(rpcReply(messageId, '<ok/>'));
        closeRequested = true;
        // In deterministic mode there are no pending replies, so end now.
        if (replyMode !== 'reorder' || pendingReplies === 0) stream.end();
        continue;
      }

      const { messageId, operation } = parseRpc(trimmed);
      emit(render(messageId, operation, trimmed));
    }
  });

  stream.on('error', () => { /* client reset; nothing to clean up (no state) */ });
}
