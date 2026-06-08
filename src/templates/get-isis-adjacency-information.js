import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-isis-adjacency-information.xml
const PAYLOAD = '';

export function getIsisAdjacencyInformation(device) {
  return renderDevicePayload(PAYLOAD, device);
}
