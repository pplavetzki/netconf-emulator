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

test('payload resolver: wildcard interface-name prefers get-interface-information-terse-XX external directory', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));

  try {
    const wildcardDir = join(root, '10.20.5.5', 'get-interface-information-terse-em');
    mkdirSync(wildcardDir, { recursive: true });

    writeFileSync(join(wildcardDir, 'response.xml'), '<interface-information>wildcard-prefix</interface-information>');

    const { resolvePayloadFromXml } = await loadResolver(root);
    const requestXml = '<rpc><get-interface-information><terse/><interface-name>em*</interface-name></get-interface-information></rpc>';
    const payload = resolvePayloadFromXml('get-interface-information', { id: 'device@10.20.5.5' }, requestXml);

    assert.equal(payload, '<interface-information>wildcard-prefix</interface-information>');
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('payload resolver: wildcard interface-name ignores external terse directory and uses local per-ip wildcard', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));

  try {
    const terseDir = join(root, '10.20.5.5', 'get-interface-information-terse');
    const ipDir = join(process.cwd(), 'mock_responses', '10.20.5.5');
    mkdirSync(terseDir, { recursive: true });
    mkdirSync(ipDir, { recursive: true });
    writeFileSync(join(terseDir, 'response.xml'), '<interface-information>external-terse-ignored</interface-information>');
    writeFileSync(join(ipDir, 'get-interface-information-terse-em.xml'), '<interface-information>local-wildcard</interface-information>');

    const { resolvePayloadFromXml } = await loadResolver(root);
    const requestXml = '<rpc><get-interface-information><terse/><interface-name>em*</interface-name></get-interface-information></rpc>';
    const payload = resolvePayloadFromXml('get-interface-information', { id: 'device@10.20.5.5' }, requestXml);

    assert.equal(payload, '<interface-information>local-wildcard</interface-information>');
  } finally {
    rmSync(join(process.cwd(), 'mock_responses', '10.20.5.5'), { recursive: true, force: true });
    rmSync(root, { recursive: true, force: true });
  }
});

test('payload resolver: wildcard interface-name uses local mock_responses/<ip>/get-interface-information-terse-XX.xml before default wildcard', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));
  const defaultWildcardPath = join(process.cwd(), 'mock_responses', 'default', 'get-interface-information-terse-em.xml');

  try {
    const ipDir = join(process.cwd(), 'mock_responses', '10.20.5.6');
    mkdirSync(ipDir, { recursive: true });
    writeFileSync(defaultWildcardPath, '<interface-information>default-wildcard</interface-information>');
    writeFileSync(join(ipDir, 'get-interface-information-terse-em.xml'), '<interface-information>local-wildcard</interface-information>');

    const { resolvePayloadFromXml } = await loadResolver(root);
    const requestXml = '<rpc><get-interface-information><terse/><interface-name>em*</interface-name></get-interface-information></rpc>';
    const payload = resolvePayloadFromXml('get-interface-information', { id: 'device@10.20.5.6' }, requestXml);

    assert.equal(payload, '<interface-information>local-wildcard</interface-information>');
  } finally {
    rmSync(join(process.cwd(), 'mock_responses', '10.20.5.6'), { recursive: true, force: true });
    rmSync(defaultWildcardPath, { force: true });
    rmSync(root, { recursive: true, force: true });
  }
});

test('payload resolver: wildcard interface-name uses default wildcard file before default terse fallback', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));
  const defaultWildcardPath = join(process.cwd(), 'mock_responses', 'default', 'get-interface-information-terse-em.xml');

  try {
    writeFileSync(defaultWildcardPath, '<interface-information>default-wildcard</interface-information>');

    const { resolvePayloadFromXml } = await loadResolver(root);
    const requestXml = '<rpc><get-interface-information><terse/><interface-name>em*</interface-name></get-interface-information></rpc>';
    const payload = resolvePayloadFromXml('get-interface-information', { id: 'device@198.51.100.2' }, requestXml);

    assert.equal(payload, '<interface-information>default-wildcard</interface-information>');
  } finally {
    rmSync(defaultWildcardPath, { force: true });
    rmSync(root, { recursive: true, force: true });
  }
});

test('payload resolver: wildcard interface-name falls back to standard default terse output when wildcard files are missing', async () => {
  const root = mkdtempSync(join(tmpdir(), 'netconf-ext-'));

  try {
    const { resolvePayloadFromXml } = await loadResolver(root);
    const requestXml = '<rpc><get-interface-information><terse/><interface-name>em*</interface-name></get-interface-information></rpc>';
    const payload = resolvePayloadFromXml('get-interface-information', { id: 'device@198.51.100.3' }, requestXml);
    const expectedDefault = readFileSync(
      join(process.cwd(), 'mock_responses', 'default', 'get-interface-information-terse.xml'),
      'utf8'
    );

    assert.equal(payload, expectedDefault);
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
