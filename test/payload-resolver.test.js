import test from 'node:test';
import assert from 'node:assert';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const RESOLVER_MODULE_URL = new URL('../src/handlers/payload-resolver.js', import.meta.url);

function loadResolver(testDataDir) {
  process.env.TEST_DATA_DIR = testDataDir;
  const nonce = `${Date.now()}-${Math.random()}`;
  return import(`${RESOLVER_MODULE_URL.href}?test=${nonce}`);
}

test('payload resolver: external override uses first file in rpc directory', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));

  try {
    const rpcDir = join(root, '10.20.5.5', 'get-alarm-information');
    mkdirSync(rpcDir, { recursive: true });

    writeFileSync(join(rpcDir, 'z-last.xml'), '<alarm-information>z</alarm-information>');
    writeFileSync(join(rpcDir, 'a-first.xml'), '<alarm-information>a</alarm-information>');

    const { resolvePayloadFromXml } = await loadResolver(root);
    const payload = resolvePayloadFromXml('get-alarm-information', { id: 'device@10.20.5.5' }, '');

    assert.equal(payload, '<alarm-information>a</alarm-information>');
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('payload resolver: external override works for mapped interface variant keys', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));

  try {
    const rpcDir = join(root, '10.20.5.5', 'get-interface-information-descriptions');
    mkdirSync(rpcDir, { recursive: true });
    writeFileSync(join(rpcDir, 'response.xml'), '<interface-information>external-descriptions</interface-information>');

    const { resolvePayloadFromXml } = await loadResolver(root);
    const requestXml = '<rpc><get-interface-information><descriptions/></get-interface-information></rpc>';
    const payload = resolvePayloadFromXml('get-interface-information', { id: 'device@10.20.5.5' }, requestXml);

    assert.equal(payload, '<interface-information>external-descriptions</interface-information>');
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('payload resolver: falls back to mock_responses/default when external override is missing', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));

  try {
    const { resolvePayloadFromXml } = await loadResolver(root);
    const payload = resolvePayloadFromXml('get-alarm-information', { id: 'device@203.0.113.1' }, '');
    const expectedDefault = readFileSync(
      join(process.cwd(), 'mock_responses', 'default', 'get-alarm-information.xml'),
      'utf8'
    );

    assert.equal(payload, expectedDefault);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
