// RFC 6242 framing for NETCONF over SSH.
//
// We implement the base:1.0 end-of-message framing (the ]]>]]> delimiter),
// which is what's used until both peers advertise base:1.1 and the server
// switches to chunked framing. For an emulator answering a known client, 1.0
// framing is sufficient and simplest; 1.1 chunked can be added later if the
// client insists on it (it's advertised in <hello>, so we control that).

export const EOM = ']]>]]>';

// Splits a growing buffer of incoming text into complete messages on the EOM
// delimiter. Returns { messages, rest } where rest is the incomplete tail to
// carry forward to the next data chunk.
export function splitMessages(buffer) {
  const messages = [];
  let rest = buffer;
  let idx = rest.indexOf(EOM);
  while (idx !== -1) {
    messages.push(rest.slice(0, idx));
    rest = rest.slice(idx + EOM.length);
    idx = rest.indexOf(EOM);
  }
  return { messages, rest };
}

// Frames an outgoing message with the EOM delimiter.
export function frame(message) {
  return message + '\n' + EOM + '\n';
}
