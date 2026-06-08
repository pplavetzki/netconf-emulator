import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-ospf-neighbor-information.xml
const PAYLOAD = '';

export function getOspfNeighborInformation(device) {
  return renderDevicePayload(PAYLOAD, device);
}
