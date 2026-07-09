import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderDevicePayload } from '../templates/render-device-payload.js';

const MOCK_RESPONSES_DIR = fileURLToPath(new URL('../../mock_responses', import.meta.url));
const DEFAULT_DIR = join(MOCK_RESPONSES_DIR, 'default');
const EXTERNAL_DIR = process.env.TEST_DATA_DIR || '';

export function resolvePayloadFromXml(operation, device, requestXml = '') {
  const target = resolveTarget(operation, requestXml);
  if (!target) return null;

  const address = deviceAddress(device);
  if (EXTERNAL_DIR && address && isSafeSegment(address)) {
    for (const key of target.externalKeys) {
      if (!isSafeSegment(key)) continue;
      const externalDir = join(EXTERNAL_DIR, address, key);
      const xml = readFirstFileInDir(externalDir);
      if (xml == null) continue;
      return renderDevicePayload(xml, device);
    }
  }

  if (address && isSafeSegment(address)) {
    const inRepoIpPath = join(MOCK_RESPONSES_DIR, address, target.defaultFile);
    if (existsSync(inRepoIpPath)) {
      const xml = readFileSync(inRepoIpPath, 'utf8');
      return renderDevicePayload(xml, device);
    }
  }

  const defaultPath = join(DEFAULT_DIR, target.defaultFile);
  if (!existsSync(defaultPath)) return null;
  const xml = readFileSync(defaultPath, 'utf8');
  return renderDevicePayload(xml, device);
}

function resolveTarget(operation, requestXml) {
  if (operation === 'file-list') {
    return {
      defaultFile: 'file-list-detail-var-log.xml',
      externalKeys: ['file-list-detail-var-log', 'file-list'],
    };
  }

  if (operation === 'get-chassis-inventory') {
    if (hasEmptyTag(requestXml, 'extensive')) {
      return {
        defaultFile: 'get-chassis-inventory-extensive.xml',
        externalKeys: ['get-chassis-inventory-extensive', 'get-chassis-inventory'],
      };
    }
    return {
      defaultFile: 'get-chassis-inventory.xml',
      externalKeys: ['get-chassis-inventory'],
    };
  }

  if (operation === 'get-interface-information') {
    if (hasEmptyTag(requestXml, 'descriptions')) {
      return {
        defaultFile: 'get-interface-information-descriptions.xml',
        externalKeys: ['get-interface-information-descriptions', 'get-interface-information'],
      };
    }
    if (hasTagValue(requestXml, 'interface-name', 'lo0.0')) {
      return {
        defaultFile: 'get-interface-information-terse-lo0.0.xml',
        externalKeys: ['get-interface-information-terse-lo0.0', 'get-interface-information'],
      };
    }
    return {
      defaultFile: 'get-interface-information-terse.xml',
      externalKeys: ['get-interface-information-terse', 'get-interface-information'],
    };
  }

  if (operation === 'get-vrrp-information') {
    return {
      defaultFile: 'get-vrrp-information-detail.xml',
      externalKeys: ['get-vrrp-information-detail', 'get-vrrp-information'],
    };
  }

  if (!isSafeSegment(operation)) return null;
  return {
    defaultFile: `${operation}.xml`,
    externalKeys: [operation],
  };
}

function deviceAddress(device) {
  if (!device?.id) return null;
  const id = String(device.id);
  const marker = id.indexOf('@');
  return marker >= 0 ? id.slice(marker + 1) : id;
}

function isSafeSegment(text) {
  return /^[A-Za-z0-9._:-]+$/.test(String(text));
}

function hasEmptyTag(xml, tag) {
  const escapedTag = escapeRegExp(tag);
  const re = new RegExp(`<${escapedTag}\\s*\\/\\s*>`, 'i');
  return re.test(xml);
}

function hasTagValue(xml, tag, value) {
  const escapedTag = escapeRegExp(tag);
  const escapedValue = escapeRegExp(value);
  const re = new RegExp(`<${escapedTag}>\\s*${escapedValue}\\s*<\\/${escapedTag}>`, 'i');
  return re.test(xml);
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
}

function readFirstFileInDir(dirPath) {
  if (!existsSync(dirPath)) return null;

  const entries = readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && !entry.name.startsWith('.'))
    .map((entry) => entry.name)
    .sort();

  if (entries.length === 0) return null;
  const filePath = join(dirPath, entries[0]);
  return readFileSync(filePath, 'utf8');
}
