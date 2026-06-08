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

  // Explicit placeholders keep captured templates readable while making
  // device-specific substitutions unambiguous.
  if (device.chassisSerial) {
    xml = xml
      .replace(/__CHASSIS_SERIAL__/g, escapeXml(device.chassisSerial))
      .replace(/__CHASSIS_SERIAL_HEX__/g, escapeXml(hexBytes(device.chassisSerial)));
  }

  if (device.cbSerial) {
    xml = xml
      .replace(/__CB_SERIAL__/g, escapeXml(device.cbSerial))
      .replace(/__CB_SERIAL_HEX__/g, escapeXml(hexBytes(device.cbSerial)));
  }

  if (device.xcvrSerial) {
    xml = xml.replace(/__XCVR_SERIAL__/g, escapeXml(device.xcvrSerial));
  }

  if (device.pemSerial) {
    xml = xml
      .replace(/__PEM_SERIAL__/g, escapeXml(device.pemSerial))
      .replace(/__PEM_SERIAL_HEX__/g, escapeXml(hexBytes(device.pemSerial)));
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
