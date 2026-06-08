import { create } from 'xmlbuilder2';

// Renders <get-chassis-inventory> reply payload for a device.
//
// Fidelity notes from the real capture:
//  - The payload namespace bakes in the JunOS version: .../junos/<ver>/junos-chassis
//  - The `junos:style="inventory"` attribute uses the junos: prefix, which MUST
//    be declared. We declare xmlns:junos on the wrapping element so the document
//    is namespace-valid on its own. (The session layer's <rpc-reply> envelope
//    can also carry it; declaring here keeps the template self-contained.)
//  - Only serial numbers vary per device. Everything else is frozen structure
//    copied verbatim from the real MX204 capture.
export function chassisInventory(device) {
  const ns = `http://xml.juniper.net/junos/${device.version}/junos-chassis`;

  const doc = create().ele('chassis-inventory', {
    xmlns: ns,
    'xmlns:junos': `http://xml.juniper.net/junos/${device.version}/junos`,
  });

  const chassis = doc.ele('chassis', { 'junos:style': 'inventory' });
  chassis.ele('name').txt('Chassis').up();
  chassis.ele('serial-number').txt(device.chassisSerial).up();
  chassis.ele('description').txt('JNP204 [MX204]').up();
  chassis.ele('clei-code').txt('INM4J00ERA').up();
  chassis.ele('model-number').txt('JNP204-CHAS').up();

  // Routing Engine 0
  re(chassis, 'Routing Engine 0', 'BUILTIN', 'BUILTIN', 'RE-S-1600x8');

  // CB 0 (carries a per-device serial)
  const cb = chassis.ele('chassis-module');
  cb.ele('name').txt('CB 0').up();
  cb.ele('version').txt('REV 27').up();
  cb.ele('part-number').txt('750-069579').up();
  cb.ele('serial-number').txt(device.cbSerial).up();
  cb.ele('description').txt('JNP204 [MX204]').up();
  cb.ele('clei-code').txt('INM4J00ERA').up();
  cb.ele('model-number').txt('JNP204-CHAS').up();

  // FPC 0 with nested PICs and a transceiver carrying a per-device serial
  const fpc = chassis.ele('chassis-module');
  fpc.ele('name').txt('FPC 0').up();
  fpc.ele('part-number').txt('BUILTIN').up();
  fpc.ele('serial-number').txt('BUILTIN').up();
  fpc.ele('description').txt('MPC').up();
  fpc.ele('clei-code').txt('PROTOXCLEI').up();
  fpc.ele('model-number').txt('PROTO-ASSEMBLY').up();

  fpc.ele('chassis-sub-module').ele('name').txt('CPU').up().up();

  const pic0 = fpc.ele('chassis-sub-module');
  pic0.ele('name').txt('PIC 0').up();
  pic0.ele('part-number').txt('BUILTIN').up();
  pic0.ele('serial-number').txt('BUILTIN').up();
  pic0.ele('description').txt('4XQSFP28 PIC').up();
  const xcvr = pic0.ele('chassis-sub-sub-module');
  xcvr.ele('name').txt('Xcvr 0').up();
  xcvr.ele('version').txt('REV 01').up();
  xcvr.ele('part-number').txt('740-056705').up();
  xcvr.ele('serial-number').txt(device.xcvrSerial).up();
  xcvr.ele('description').txt('QSFP+40GE-LX4').up();

  const pic1 = fpc.ele('chassis-sub-module');
  pic1.ele('name').txt('PIC 1').up();
  pic1.ele('part-number').txt('BUILTIN').up();
  pic1.ele('serial-number').txt('BUILTIN').up();
  pic1.ele('description').txt('8XSFPP PIC').up();

  // PEM 1 (per-device serial)
  const pem = chassis.ele('chassis-module');
  pem.ele('name').txt('PEM 1').up();
  pem.ele('version').txt('REV 03').up();
  pem.ele('part-number').txt('740-070749').up();
  pem.ele('serial-number').txt(device.pemSerial).up();
  pem.ele('description').txt('JPSU-650W-AC-AO').up();
  pem.ele('clei-code').txt('CMUPAE6BAA').up();
  pem.ele('model-number').txt('JPSU-650W-AC-AO').up();

  // Fan trays (structural, identical across devices)
  for (let n = 0; n < 3; n += 1) {
    const fan = chassis.ele('chassis-module');
    fan.ele('name').txt(`Fan Tray ${n}`).up();
    fan.ele('description').txt('Fan Tray, Front to Back Airflow - AFO').up();
    fan.ele('model-number').txt('JNP-FAN-1RU').up();
  }

  return doc.end({ prettyPrint: true, headless: true });
}

function re(parent, name, part, serial, desc) {
  const m = parent.ele('chassis-module');
  m.ele('name').txt(name).up();
  m.ele('part-number').txt(part).up();
  m.ele('serial-number').txt(serial).up();
  m.ele('description').txt(desc).up();
}
