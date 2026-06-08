function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Applies device-specific substitutions onto raw captured payload XML.
// This keeps templates close to source captures while still producing
// deterministic per-device identity values.
export function renderDevicePayload(payload, device) {
  if (!payload || !device) return payload;

  let xml = payload;

  // Keep JunOS namespace versions in sync with the emulated device version.
  if (device.version) {
    xml = xml
      .replace(
        /http:\/\/xml\.juniper\.net\/junos\/[^/]+\/junos-chassis/g,
        `http://xml.juniper.net/junos/${device.version}/junos-chassis`
      )
      .replace(
        /http:\/\/xml\.juniper\.net\/junos\/[^/]+\/junos-interface/g,
        `http://xml.juniper.net/junos/${device.version}/junos-interface`
      )
      .replace(
        /http:\/\/xml\.juniper\.net\/junos\/[^/]+\/junos-license/g,
        `http://xml.juniper.net/junos/${device.version}/junos-license`
      )
      .replace(
        /http:\/\/xml\.juniper\.net\/junos\/[^/]+\/junos/g,
        `http://xml.juniper.net/junos/${device.version}/junos`
      )
      .replace(/<junos-version>[\s\S]*?<\/junos-version>/g, `<junos-version>${escapeXml(device.version)}</junos-version>`);
  }

  if (device.hostname) {
    xml = xml.replace(/<host-name>[\s\S]*?<\/host-name>/g, `<host-name>${escapeXml(device.hostname)}</host-name>`);
  }

  if (device.model) {
    xml = xml.replace(/<product-model>[\s\S]*?<\/product-model>/g, `<product-model>${escapeXml(device.model.toLowerCase())}</product-model>`);
  }

  // Canonical serial substitutions used by chassis templates.
  if (device.chassisSerial) {
    xml = xml.replace(/<serial-number>BK378<\/serial-number>/g, `<serial-number>${escapeXml(device.chassisSerial)}</serial-number>`);
    xml = xml.replace(/S\/N\s+BK378/g, `S/N ${escapeXml(device.chassisSerial)}`);
    xml = xml.replace(/>42 4b 33 37 38 /g, `>${escapeXml(hexBytes(device.chassisSerial))} `);
  }

  if (device.cbSerial) {
    xml = xml.replace(/<serial-number>CAKV2080<\/serial-number>/g, `<serial-number>${escapeXml(device.cbSerial)}</serial-number>`);
    xml = xml.replace(/S\/N\s+CAKV2080/g, `S/N ${escapeXml(device.cbSerial)}`);
  }

  if (device.xcvrSerial) {
    xml = xml.replace(/<serial-number>UUJ01CF<\/serial-number>/g, `<serial-number>${escapeXml(device.xcvrSerial)}</serial-number>`);
  }

  if (device.pemSerial) {
    xml = xml.replace(/<serial-number>1F188120484<\/serial-number>/g, `<serial-number>${escapeXml(device.pemSerial)}</serial-number>`);
  }

  return xml;
}

function hexBytes(text) {
  return String(text)
    .split('')
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join(' ')
    .toUpperCase();
}
