// RFC 6242 framing for NETCONF over SSH.
//
// We implement the base:1.0 end-of-message framing (the ]]>]]> delimiter),
// which is what's used until both peers advertise base:1.1 and the server
// switches to chunked framing. For an emulator answering a known client, 1.0
// framing is sufficient and simplest; 1.1 chunked can be added later if the
// client insists on it (it's advertised in <hello>, so we control that).

export const EOM = ']]>]]>';

const HELLO_RE = /^(?:<\?xml[\s\S]*?\?>\s*)?<hello\b[\s\S]*?<\/hello>/i;
const RPC_RE = /^(?:<\?xml[\s\S]*?\?>\s*)?<(?:nc:)?rpc\b[\s\S]*?<\/(?:nc:)?rpc>/i;

// Splits a growing buffer of incoming text into complete messages on the EOM
// delimiter. Returns { messages, rest } where rest is the incomplete tail to
// carry forward to the next data chunk.
export function splitMessages(buffer) {
  const messages = [];
  const modes = [];
  let rest = buffer;

  // Preferred path: RFC6242 base:1.0 delimiter framing.
  let idx = rest.indexOf(EOM);
  while (idx !== -1) {
    messages.push(rest.slice(0, idx));
    modes.push('framed');
    rest = rest.slice(idx + EOM.length);
    idx = rest.indexOf(EOM);
  }

  // Compatibility path: allow raw XML payloads with no EOM marker.
  // This is intentionally best-effort for <hello> and <rpc> messages.
  while (true) {
    if (rest.length === 0) break;

    const xmlStart = rest.match(/<(?:\?xml[\s\S]*?\?>\s*)?(?:(?:nc:)?rpc\b|hello\b)/i);
    if (!xmlStart) break;

    if (xmlStart.index > 0) {
      const prefix = rest.slice(0, xmlStart.index);
      if (prefix.trim().length > 0) {
        // Drop non-XML noise and keep scanning.
      }
      rest = rest.slice(xmlStart.index);
    }

    const segment = rest;
    const helloMatch = segment.match(HELLO_RE);
    const rpcMatch = segment.match(RPC_RE);
    const messageMatch = helloMatch || rpcMatch;

    if (!messageMatch) {
      break;
    }

    messages.push(messageMatch[0]);
    modes.push('raw');
    rest = segment.slice(messageMatch[0].length);
  }

  return { messages, modes, rest };
}

// Frames an outgoing message with the EOM delimiter.
export function frame(message) {
  return message + '\n' + EOM + '\n';
}
