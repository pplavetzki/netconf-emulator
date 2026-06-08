import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-system-core-dumps.xml
const PAYLOAD = String.raw`<multi-routing-engine-results>

  <multi-routing-engine-item>

    <re-name>fpc0</re-name>

    <directory-list root-path="/var/crash/*core*" junos:seconds="1760382201" junos:style="verbose">
      <output>/var/crash/*core*: No such file or directory</output>
      <output>/var/tmp/*core*: No such file or directory</output>
      <output>/var/tmp/pics/*core*: No such file or directory</output>
      <output>/var/crash/kernel.*: No such file or directory</output>
      <output>/var/jails/rest-api/tmp/*core*: No such file or directory</output>
    </directory-list>
  </multi-routing-engine-item>

</multi-routing-engine-results>`;

export function getSystemCoreDumps(device) {
  return renderDevicePayload(PAYLOAD, device);
}
