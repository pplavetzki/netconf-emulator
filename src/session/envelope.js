// Wraps a rendered payload in a <rpc-reply>, echoing the client's message-id.
// The junos: prefix is declared at the envelope level the way a real device
// emits it; payloads that also declare it (like chassis-inventory) are still
// valid — redundant declarations are legal.
export function rpcReply(messageId, payloadXml) {
  const id = messageId ?? '1';
  return [
    `<rpc-reply xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"`,
    ` xmlns:junos="http://xml.juniper.net/junos/19.4R0/junos"`,
    ` message-id="${escapeAttr(id)}">`,
    payloadXml,
    `</rpc-reply>`,
  ].join('');
}

export function rpcError(messageId, message) {
  const id = messageId ?? '1';
  return (
    `<rpc-reply xmlns="urn:ietf:params:xml:ns:netconf:base:1.0" message-id="${escapeAttr(id)}">` +
    `<rpc-error>` +
    `<error-type>application</error-type>` +
    `<error-tag>operation-not-supported</error-tag>` +
    `<error-severity>error</error-severity>` +
    `<error-message>${escapeText(message)}</error-message>` +
    `</rpc-error>` +
    `</rpc-reply>`
  );
}

function escapeText(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return escapeText(s).replace(/"/g, '&quot;');
}
