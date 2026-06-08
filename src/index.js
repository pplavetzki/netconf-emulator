import { createServer } from './transport/ssh-server.js';

const PORT = Number(process.env.PORT || 8830);
const HOST = process.env.HOST || '0.0.0.0';
const HOST_KEY = process.env.HOST_KEY || 'keys/host_rsa';

const server = createServer({ hostKeyPath: HOST_KEY });
server.listen(PORT, HOST, () => {
  console.log(`netconf emulator listening on ${HOST}:${PORT}`);
});

function shutdown() {
  console.log('\n[server] shutting down...');
  server.close((err) => {
    if (err) {
      console.error('[server] error during shutdown:', err.message);
      process.exit(1);
    }
    console.log('[server] closed');
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
