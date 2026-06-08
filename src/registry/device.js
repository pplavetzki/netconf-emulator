import { createHash } from 'node:crypto';

// JunOS version reported by the emulated fleet. Baked into namespace URIs,
// so it must match what your app expects to validate against.
export const JUNOS_VERSION = '19.4R0';

// Deterministic PRNG seeded from the device id. Same id -> same state on every
// pod, with no coordination. This is what makes "every pod self-seeds all 10k"
// safe and makes tests reproducible.
function seedFrom(id) {
  const h = createHash('sha256').update(id).digest();
  let i = 0;
  return () => {
    // pull 4 bytes at a time, wrap around the digest
    const v = h.readUInt32BE((i * 4) % (h.length - 4));
    i += 1;
    return v;
  };
}

const ALNUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function alnum(rng, len) {
  let s = '';
  for (let n = 0; n < len; n += 1) s += ALNUM[rng() % ALNUM.length];
  return s;
}

// Build the immutable state for one device. Only the fields that legitimately
// vary between physical devices are randomized; everything structural is left
// to the template as constant content.
export function deriveDevice(id) {
  const rng = seedFrom(id);
  return {
    id,
    hostname: id, // e.g. device-00142
    model: 'MX204',
    version: JUNOS_VERSION,
    chassisSerial: `BK${rng() % 1000}`.padEnd(5, '0').slice(0, 5),
    cbSerial: alnum(rng, 8),
    xcvrSerial: alnum(rng, 7),
    pemSerial: `1F${rng() % 1_000_000_000}`.slice(0, 11),
  };
}
