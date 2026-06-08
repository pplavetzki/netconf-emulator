import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-rsvp-neighbor-information.xml
const PAYLOAD = '';

export function getRsvpNeighborInformation(device) {
  return renderDevicePayload(PAYLOAD, device);
}
