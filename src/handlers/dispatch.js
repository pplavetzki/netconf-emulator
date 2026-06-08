import { chassisInventory } from '../templates/chassis-inventory.js';
import { fileListDetailVarLog } from '../templates/file-list-detail-var-log.js';
import { getAlarmInformation } from '../templates/get-alarm-information.js';
import { getBgpSummaryInformation } from '../templates/get-bgp-summary-information.js';
import { getBufferInformations } from '../templates/get-buffer-informations.js';
import { getChassisInventoryExtensive } from '../templates/get-chassis-inventory-extensive.js';
import { getCommitInformation } from '../templates/get-commit-information.js';
import { getFpcInformation } from '../templates/get-fpc-information.js';
import { getInterfaceInformationDescriptions } from '../templates/get-interface-information-descriptions.js';
import { getInterfaceInformationTerseLo00 } from '../templates/get-interface-information-terse-lo0.0.js';
import { getInterfaceInformationTerse } from '../templates/get-interface-information-terse.js';
import { getIsisAdjacencyInformation } from '../templates/get-isis-adjacency-information.js';
import { getLicenseSummaryInformation } from '../templates/get-license-summary-information.js';
import { getOspfNeighborInformation } from '../templates/get-ospf-neighbor-information.js';
import { getRouteEngineInformation } from '../templates/get-route-engine-information.js';
import { getRsvpNeighborInformation } from '../templates/get-rsvp-neighbor-information.js';
import { getSoftwareInformation } from '../templates/get-software-information.js';
import { getSystemCoreDumps } from '../templates/get-system-core-dumps.js';
import { getSystemInformation } from '../templates/get-system-information.js';
import { getSystemUptimeInformation } from '../templates/get-system-uptime-information.js';
import { getVrrpInformationDetail } from '../templates/get-vrrp-information-detail.js';

// One entry per supported RPC. The key is the operation element name as it
// appears inside <rpc>.
const HANDLERS = {
  'file-list': (device) => fileListDetailVarLog(device),
  'get-alarm-information': (device) => getAlarmInformation(device),
  'get-bgp-summary-information': (device) => getBgpSummaryInformation(device),
  'get-buffer-informations': (device) => getBufferInformations(device),
  'get-chassis-inventory': (device, requestXml) => {
    if (requestXml.includes('<extensive/>') || requestXml.includes('<extensive />')) {
      return getChassisInventoryExtensive(device);
    }
    return chassisInventory(device);
  },
  'get-commit-information': (device) => getCommitInformation(device),
  'get-fpc-information': (device) => getFpcInformation(device),
  'get-interface-information': (device, requestXml) => {
    if (requestXml.includes('<descriptions/>') || requestXml.includes('<descriptions />')) {
      return getInterfaceInformationDescriptions(device);
    }
    if (requestXml.includes('<interface-name>lo0.0</interface-name>')) {
      return getInterfaceInformationTerseLo00(device);
    }
    return getInterfaceInformationTerse(device);
  },
  'get-isis-adjacency-information': (device) => getIsisAdjacencyInformation(device),
  'get-license-summary-information': (device) => getLicenseSummaryInformation(device),
  'get-ospf-neighbor-information': (device) => getOspfNeighborInformation(device),
  'get-route-engine-information': (device) => getRouteEngineInformation(device),
  'get-rsvp-neighbor-information': (device) => getRsvpNeighborInformation(device),
  'get-software-information': (device) => getSoftwareInformation(device),
  'get-system-core-dumps': (device) => getSystemCoreDumps(device),
  'get-system-information': (device) => getSystemInformation(device),
  'get-system-uptime-information': (device) => getSystemUptimeInformation(device),
  'get-vrrp-information': (device) => getVrrpInformationDetail(device),
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
