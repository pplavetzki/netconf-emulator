import test from 'node:test';
import assert from 'node:assert';
import { splitMessages, EOM, frame } from '../src/session/framing.js';

test('framing: EOM-delimited message (RFC 6242)', (t) => {
  const eomMsg = `<rpc message-id="1" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
  <get-system-information/>
</rpc>${EOM}`;

  const { messages, modes, rest } = splitMessages(eomMsg);

  assert.equal(messages.length, 1, 'should extract 1 message');
  assert.equal(modes[0], 'framed', 'should mark as framed');
  assert.equal(rest, '', 'should have no rest');
  assert.match(messages[0], /<rpc/, 'message should contain rpc element');
});

test('framing: raw XML without EOM delimiter', (t) => {
  const rawMsg = `<rpc message-id="2" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
  <get-alarm-information/>
</rpc>`;

  const { messages, modes, rest } = splitMessages(rawMsg);

  assert.equal(messages.length, 1, 'should extract 1 message');
  assert.equal(modes[0], 'raw', 'should mark as raw');
  assert.equal(rest, '', 'should have no rest');
  assert.match(messages[0], /get-alarm-information/, 'message should contain operation');
});

test('framing: multiple EOM-delimited messages', (t) => {
  const multiMsg = `<rpc message-id="1"><op1/></rpc>${EOM}<rpc message-id="2"><op2/></rpc>${EOM}`;

  const { messages, modes, rest } = splitMessages(multiMsg);

  assert.equal(messages.length, 2, 'should extract 2 messages');
  assert.equal(modes[0], 'framed', 'first should be framed');
  assert.equal(modes[1], 'framed', 'second should be framed');
  assert.equal(rest, '', 'should have no rest');
});

test('framing: mixed EOM and raw XML', (t) => {
  const mixed = `<rpc message-id="1"><op1/></rpc>${EOM}<rpc message-id="2"><op2/></rpc>`;

  const { messages, modes, rest } = splitMessages(mixed);

  assert.equal(messages.length, 2, 'should extract 2 messages');
  assert.equal(modes[0], 'framed', 'first should be framed');
  assert.equal(modes[1], 'raw', 'second should be raw');
  assert.equal(rest, '', 'should have no rest');
});

test('framing: incomplete message (no closing tag)', (t) => {
  const incomplete = `<rpc message-id="1"><op1/>`;

  const { messages, modes, rest } = splitMessages(incomplete);

  assert.equal(messages.length, 0, 'should extract 0 complete messages');
  assert.equal(rest, incomplete, 'incomplete should be in rest');
});

test('framing: hello message with EOM', (t) => {
  const helloMsg = `<?xml version="1.0"?>
<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
  <capabilities>
    <capability>urn:ietf:params:netconf:base:1.0</capability>
  </capabilities>
  <session-id>12345</session-id>
</hello>${EOM}`;

  const { messages, modes, rest } = splitMessages(helloMsg);

  assert.equal(messages.length, 1, 'should extract 1 message');
  assert.equal(modes[0], 'framed', 'should mark as framed');
  assert.match(messages[0], /<hello/, 'message should contain hello element');
});

test('framing: hello message without EOM', (t) => {
  const helloMsg = `<?xml version="1.0"?>
<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
  <capabilities>
    <capability>urn:ietf:params:netconf:base:1.0</capability>
  </capabilities>
  <session-id>12345</session-id>
</hello>`;

  const { messages, modes, rest } = splitMessages(helloMsg);

  assert.equal(messages.length, 1, 'should extract 1 message');
  assert.equal(modes[0], 'raw', 'should mark as raw');
  assert.match(messages[0], /session-id/, 'message should contain session-id');
});

test('framing: partial then complete message', (t) => {
  // First chunk: incomplete
  let chunk1 = `<rpc message-id="1"><get-system`;
  let result1 = splitMessages(chunk1);
  assert.equal(result1.messages.length, 0, 'first chunk should have no complete message');
  assert.equal(result1.rest, chunk1, 'first chunk should be in rest');

  // Second chunk: completes it with EOM
  let combined = result1.rest + `-information/></rpc>${EOM}`;
  let result2 = splitMessages(combined);
  assert.equal(result2.messages.length, 1, 'combined should extract 1 complete message');
  assert.equal(result2.modes[0], 'framed', 'should be marked framed');
});

test('framing: frame() adds EOM delimiter', (t) => {
  const payload = '<rpc><op/></rpc>';
  const framed = frame(payload);

  assert.match(framed, /\n\]\]>\]\]>\n/, 'should wrap with newlines and EOM');
  assert.match(framed, /^<rpc/, 'should start with payload');
});

test('framing: get-interface-information with filter', (t) => {
  const rpcWithFilter = `<rpc message-id="101" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
  <get-interface-information>
    <descriptions/>
  </get-interface-information>
</rpc>`;

  const { messages, modes } = splitMessages(rpcWithFilter);

  assert.equal(messages.length, 1, 'should extract 1 message');
  assert.equal(modes[0], 'raw', 'should be raw (no EOM)');
  assert.match(messages[0], /get-interface-information/, 'should contain operation');
  assert.match(messages[0], /<descriptions\/>/, 'should contain filter element');
});

test('framing: get-chassis-inventory with extensive flag', (t) => {
  const rpcExtensive = `<rpc message-id="102" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
  <get-chassis-inventory>
    <extensive/>
  </get-chassis-inventory>
</rpc>${EOM}`;

  const { messages, modes } = splitMessages(rpcExtensive);

  assert.equal(messages.length, 1, 'should extract 1 message');
  assert.equal(modes[0], 'framed', 'should be framed (has EOM)');
  assert.match(messages[0], /<extensive\/>/, 'should contain extensive flag');
});
