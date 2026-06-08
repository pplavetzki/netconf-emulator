import { readFileSync, existsSync } from 'node:fs';
import ssh2 from 'ssh2';
import { deriveDevice } from '../registry/device.js';
import { startSession } from '../session/netconf-session.js';

const { Server } = ssh2;

// Identity comes from the DESTINATION ip (which device address the client
// dialed), not the username — credentials are shared across devices in the
// target environment, so the dialed IP is the only per-device signal.
//
// On a connection, ssh2 gives us info.localAddress = the destination the
// client connected to. In production that's a distinct per-device alias on the
// host; in local tests it'll be 127.0.0.1, so we allow an override for testing
// via the PROXY/loopback case (see resolveDeviceId).
function resolveDeviceId(info) {
  // info.localAddress is the destination IP the client dialed.
  // Map it straight to a device id. In a real deployment each alias IP is a
  // distinct device; here we key on the address string.
  return `device@${info.localAddress}`;
}

export function createServer({ hostKeyPath }) {
  if (!existsSync(hostKeyPath)) {
    console.error(`Error: host key not found at ${hostKeyPath}`);
    console.error(`Generate it with:\n\n  ssh-keygen -t rsa -b 2048 -m PEM -f ${hostKeyPath} -N ""\n`);
    process.exit(1);
  }
  const hostKey = readFileSync(hostKeyPath);
  let sessionCounter = 0;

  const server = new Server({ hostKeys: [hostKey] }, (client, info) => {
    // info has { ip, family, port, header } for the remote peer; the local
    // (destination) address is read from the underlying socket below.
    let deviceId = null;

    console.log(`[ssh] connection from ${info.ip}:${info.port}`);

    client.on('authentication', (ctx) => {
      // Shared credentials: accept any password/none. Identity is the dest IP,
      // not the user. (For a stricter emulator, validate ctx.username here.)
      ctx.accept();
    });

    client.on('ready', () => {
      // Resolve destination IP now that the connection is established.
      // ssh2 exposes the socket via client._sock; localAddress is the dest.
      const sock = client._sock;
      const localAddress = sock ? sock.localAddress : '0.0.0.0';
      deviceId = resolveDeviceId({ localAddress });

      console.log(`[ssh] ready  src=${info.ip}:${info.port} dst=${localAddress} device=${deviceId}`);

      client.on('session', (accept) => {
        const session = accept();
        session.on('subsystem', (accept2, reject2, subInfo) => {
          if (subInfo.name !== 'netconf') {
            reject2();
            return;
          }
          const stream = accept2();
          const device = deriveDevice(deviceId);
          sessionCounter += 1;
          startSession(stream, device, sessionCounter);
        });
      });
    });

    client.on('close', () => {
      console.log(`[ssh] disconnected src=${info.ip}:${info.port} device=${deviceId ?? 'unknown'}`);
    });

    client.on('error', () => { /* peer reset; no per-connection state to clean */ });
  });

  return server;
}
