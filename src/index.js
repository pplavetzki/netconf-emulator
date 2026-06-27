import { createServer } from './transport/ssh-server.js';
import { logError, logInfo } from './log.js';

const PORT = Number(process.env.PORT || 8830);
const HOST = process.env.HOST || '0.0.0.0';
const HOST_KEY = process.env.HOST_KEY || 'keys/host_rsa';

const server = createServer({ hostKeyPath: HOST_KEY });
server.listen(PORT, HOST, () => {
  logInfo('server', 'listening', { host: HOST, port: PORT });
});

function shutdown() {
  logInfo('server', 'shutting down');
  server.close((err) => {
    if (err) {
      logError('server', 'error during shutdown', { error: err.message });
      process.exit(1);
    }
    logInfo('server', 'closed');
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
