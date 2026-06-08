import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-alarm-information.xml
const PAYLOAD = String.raw`<alarm-information xmlns="http://xml.juniper.net/junos/19.4R0/junos-alarm">
  <alarm-summary>
    <active-alarm-count>1</active-alarm-count>
  </alarm-summary>
  <alarm-detail>
    <alarm-time junos:seconds="1746465078">
      2025-05-05 10:11:18 PDT
    </alarm-time>
    <alarm-class>Major</alarm-class>
    <alarm-description>PEM 1 Not Powered</alarm-description>
    <alarm-short-description>PEM 1 No Power</alarm-short-description>
    <alarm-type>Chassis</alarm-type>
  </alarm-detail>
</alarm-information>`;

export function getAlarmInformation(device) {
  return renderDevicePayload(PAYLOAD, device);
}
