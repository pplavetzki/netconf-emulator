import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-interface-information-descriptions.xml
const PAYLOAD = '';

export function getInterfaceInformationDescriptions(device) {
  return renderDevicePayload(PAYLOAD, device);
}
