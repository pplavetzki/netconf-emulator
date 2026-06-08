import * as templates from '../templates/index.js';

// One entry per supported RPC. The key is the operation element name as it
// appears inside <rpc>.
const HANDLERS = {
  'file-list': (device, requestXml) => {
    if (hasTagValue(requestXml, 'style', 'detail') && hasTagValue(requestXml, 'path', '/var/log/')) {
      return templates.fileListDetailVarLog(device);
    }
    return templates.fileListDetailVarLog(device);
  },
  'get-alarm-information': (device) => templates.getAlarmInformation(device),
  'get-bgp-summary-information': (device) => templates.getBgpSummaryInformation(device),
  'get-buffer-informations': (device) => templates.getBufferInformations(device),
  'get-chassis-inventory': (device, requestXml) => {
    if (hasEmptyTag(requestXml, 'extensive')) {
      return templates.getChassisInventoryExtensive(device);
    }
    return templates.chassisInventory(device);
  },
  'get-commit-information': (device) => templates.getCommitInformation(device),
  'get-fpc-information': (device) => templates.getFpcInformation(device),
  'get-interface-information': (device, requestXml) => {
    if (hasEmptyTag(requestXml, 'descriptions')) {
      return templates.getInterfaceInformationDescriptions(device);
    }
    if (hasTagValue(requestXml, 'interface-name', 'lo0.0')) {
      return templates.getInterfaceInformationTerseLo00(device);
    }
    return templates.getInterfaceInformationTerse(device);
  },
  'get-isis-adjacency-information': (device) => templates.getIsisAdjacencyInformation(device),
  'get-license-summary-information': (device) => templates.getLicenseSummaryInformation(device),
  'get-ospf-neighbor-information': (device) => templates.getOspfNeighborInformation(device),
  'get-route-engine-information': (device) => templates.getRouteEngineInformation(device),
  'get-rsvp-neighbor-information': (device) => templates.getRsvpNeighborInformation(device),
  'get-software-information': (device) => templates.getSoftwareInformation(device),
  'get-system-core-dumps': (device) => templates.getSystemCoreDumps(device),
  'get-system-information': (device) => templates.getSystemInformation(device),
  'get-system-uptime-information': (device) => templates.getSystemUptimeInformation(device),
  'get-vrrp-information': (device) => templates.getVrrpInformationDetail(device),
};

export function dispatch(operation, device, requestXml = '') {
  const handler = HANDLERS[operation];
  if (!handler) {
    const err = new Error(`unsupported operation: ${operation}`);
    err.code = 'UNKNOWN_RPC';
    throw err;
  }
  return handler(device, requestXml);
}

export function supportedOperations() {
  return Object.keys(HANDLERS);
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
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
