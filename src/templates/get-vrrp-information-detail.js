import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-vrrp-information-detail.xml
const PAYLOAD = '';

export function getVrrpInformationDetail(device) {
  return renderDevicePayload(PAYLOAD, device);
}
