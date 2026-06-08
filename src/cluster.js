import cluster from 'node:cluster';
import os from 'node:os';
import { createServer } from './transport/ssh-server.js';

const PORT = Number(process.env.PORT || 8830);
const HOST = process.env.HOST || '0.0.0.0';
const HOST_KEY = process.env.HOST_KEY || 'keys/host_rsa';
const WORKERS = Number(process.env.WORKERS || os.cpus().length);

if (cluster.isPrimary) {
  console.log(`primary ${process.pid}: forking ${WORKERS} workers on ${HOST}:${PORT} (${os.cpus().length} cores)`);
  // Round-robin connection distribution (default on non-Windows). Each worker
  // gets its own event loop; the OS hands accepted connections to workers.
  cluster.schedulingPolicy = cluster.SCHED_RR;

  for (let i = 0; i < WORKERS; i += 1) cluster.fork();

  let ready = 0;
  cluster.on('message', (_w, msg) => {
    if (msg === 'listening' && ++ready === WORKERS) {
      console.log(`all ${WORKERS} workers listening`);
    }
  });
  let shuttingDown = false;

  cluster.on('exit', (worker, code, signal) => {
    if (shuttingDown) {
      console.log(`[primary] worker ${worker.process.pid} exited (${signal || code})`);
      if (Object.keys(cluster.workers).length === 0) {
        console.log('[primary] all workers stopped');
        process.exit(0);
      }
      return;
    }
    if (code === 1) {
      console.error(`[primary] worker exited with fatal error; shutting down`);
      process.exit(1);
    }
    console.log(`worker ${worker.process.pid} exited (${signal || code}); refork`);
    cluster.fork();
  });

  function shutdown() {
    if (shuttingDown) return;
    shuttingDown = true;
    console.log('\n[primary] shutting down...');
    for (const worker of Object.values(cluster.workers)) {
      worker.send('shutdown');
    }
  }

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
} else {
  const server = createServer({ hostKeyPath: HOST_KEY });
  server.listen(PORT, HOST, () => {
    process.send?.('listening');
  });

  process.on('message', (msg) => {
    if (msg !== 'shutdown') return;
    console.log(`[worker ${process.pid}] shutting down...`);
    server.close(() => {
      console.log(`[worker ${process.pid}] closed`);
      process.exit(0);
    });
  });
}
