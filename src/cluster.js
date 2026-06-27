import cluster from 'node:cluster';
import os from 'node:os';
import { createServer } from './transport/ssh-server.js';
import { logError, logInfo } from './log.js';

const PORT = Number(process.env.PORT || 8830);
const HOST = process.env.HOST || '0.0.0.0';
const HOST_KEY = process.env.HOST_KEY || 'keys/host_rsa';
const WORKERS = Number(process.env.WORKERS || os.cpus().length);

if (cluster.isPrimary) {
  logInfo('cluster', 'forking workers', {
    pid: process.pid,
    workers: WORKERS,
    host: HOST,
    port: PORT,
    cores: os.cpus().length,
  });
  // Round-robin connection distribution (default on non-Windows). Each worker
  // gets its own event loop; the OS hands accepted connections to workers.
  cluster.schedulingPolicy = cluster.SCHED_RR;

  for (let i = 0; i < WORKERS; i += 1) cluster.fork();

  let ready = 0;
  cluster.on('message', (_w, msg) => {
    if (msg === 'listening' && ++ready === WORKERS) {
      logInfo('cluster', 'all workers listening', { workers: WORKERS });
    }
  });
  let shuttingDown = false;

  cluster.on('exit', (worker, code, signal) => {
    if (shuttingDown) {
      logInfo('cluster', 'worker exited during shutdown', {
        workerPid: worker.process.pid,
        exit: signal || code,
      });
      if (Object.keys(cluster.workers).length === 0) {
        logInfo('cluster', 'all workers stopped');
        process.exit(0);
      }
      return;
    }
    if (code === 1) {
      logError('cluster', 'worker exited with fatal error; shutting down', {
        workerPid: worker.process.pid,
        exit: signal || code,
      });
      process.exit(1);
    }
    logInfo('cluster', 'worker exited; reforking', {
      workerPid: worker.process.pid,
      exit: signal || code,
    });
    cluster.fork();
  });

  function shutdown() {
    if (shuttingDown) return;
    shuttingDown = true;
    logInfo('cluster', 'primary shutting down');
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
    logInfo('cluster', 'worker shutting down', { workerPid: process.pid });
    server.close(() => {
      logInfo('cluster', 'worker closed', { workerPid: process.pid });
      process.exit(0);
    });
  });
}
