import { spawn } from 'node:child_process';
import ssh2 from 'ssh2';
import { performance } from 'node:perf_hooks';
import os from 'node:os';
import { logError, logInfo } from './src/log.js';

const { Client } = ssh2;

const PORT = 9000 + Math.floor(Math.random() * 500);
const CONCURRENCY = Number(process.env.CONCURRENCY || 50);
const TOTAL_CONNS = Number(process.env.CONNS || 250);
const GETS_PER_CONN = Number(process.env.GETS || 20);
const EOM = ']]>]]>';

const HELLO = `<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">` +
  `<capabilities><capability>urn:ietf:params:netconf:base:1.0</capability></capabilities></hello>`;
const rpc = (id) => `<rpc message-id="${id}" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"><get-chassis-inventory/></rpc>`;

function runConnection() {
  return new Promise((resolve, reject) => {
    const t0 = performance.now();
    let tReady = 0, firstRpc = 0, pending = 0, received = 0, buffer = '';
    const conn = new Client();
    const fail = (e) => { try { conn.end(); } catch {} reject(e); };
    conn.on('ready', () => {
      tReady = performance.now();
      conn.subsys('netconf', (err, stream) => {
        if (err) return fail(err);
        stream.write(HELLO + '\n' + EOM + '\n');
        const sendNext = () => {
          if (pending >= GETS_PER_CONN) return;
          pending += 1;
          if (!firstRpc) firstRpc = performance.now();
          stream.write(rpc(pending) + '\n' + EOM + '\n');
        };
        stream.on('data', (c) => {
          buffer += c.toString('utf8');
          let i;
          while ((i = buffer.indexOf(EOM)) !== -1) {
            const msg = buffer.slice(0, i); buffer = buffer.slice(i + EOM.length);
            if (msg.includes('<hello')) sendNext();
            else if (msg.includes('<rpc-reply')) {
              received += 1;
              if (received >= GETS_PER_CONN) {
                const tEnd = performance.now(); conn.end();
                resolve({ total: tEnd - t0, handshake: tReady - t0 });
              } else sendNext();
            }
          }
        });
        stream.on('error', fail);
      });
    });
    conn.on('error', fail);
    conn.connect({ host: '127.0.0.1', port: PORT, username: 'd', password: 'x', readyTimeout: 20000 });
  });
}

async function loadTest() {
  const results = [], errors = [];
  let launched = 0, active = 0;
  const wallStart = performance.now();
  await new Promise((done) => {
    const pump = () => {
      while (active < CONCURRENCY && launched < TOTAL_CONNS) {
        launched += 1; active += 1;
        runConnection().then((r) => results.push(r)).catch((e) => errors.push(e.message))
          .finally(() => { active -= 1; (results.length + errors.length >= TOTAL_CONNS) ? done() : pump(); });
      }
    };
    pump();
  });
  const wall = (performance.now() - wallStart) / 1000;
  const pct = (arr, p) => { const s = [...arr].sort((a, b) => a - b); return s[Math.floor(s.length * p)] || 0; };
  const totals = results.map((r) => r.total), hs = results.map((r) => r.handshake);
  logInfo('loadtest', 'results', {
    cores: os.cpus().length,
    concurrency: CONCURRENCY,
    conns: TOTAL_CONNS,
    getsPerConn: GETS_PER_CONN,
    completed: results.length,
    errors: errors.length,
    errorSample: errors.length ? [...new Set(errors)].slice(0, 2).join(' | ') : undefined,
    wallSeconds: Number(wall.toFixed(2)),
    connPerSec: Number((results.length / wall).toFixed(1)),
    rpcPerSec: Number((((results.length * GETS_PER_CONN) / wall).toFixed(0))),
    connTotalMs: {
      p50: Number(pct(totals, 0.5).toFixed(0)),
      p95: Number(pct(totals, 0.95).toFixed(0)),
      p99: Number(pct(totals, 0.99).toFixed(0)),
    },
    handshakeMs: {
      p50: Number(pct(hs, 0.5).toFixed(0)),
      p95: Number(pct(hs, 0.95).toFixed(0)),
      p99: Number(pct(hs, 0.99).toFixed(0)),
    },
  });
}

import net from 'node:net';

const srv = spawn('node', ['src/index.js'], { env: { ...process.env, PORT: String(PORT), HOST: '127.0.0.1' }, stdio: ['ignore', 'pipe', 'pipe'] });
srv.stderr.on('data', (d) => logError('loadtest', 'server stderr', { stderr: d.toString().trim() }));

function probe() {
  return new Promise((resolve) => {
    const s = net.connect(PORT, '127.0.0.1');
    s.on('connect', () => { s.destroy(); resolve(true); });
    s.on('error', () => resolve(false));
  });
}

async function waitUp(deadlineMs) {
  const end = Date.now() + deadlineMs;
  while (Date.now() < end) {
    if (await probe()) return true;
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
}

(async () => {
  const ok = await waitUp(10000);
  if (!ok) { logError('loadtest', 'server did not start in time'); srv.kill('SIGKILL'); process.exit(1); }
  try { await loadTest(); } catch (e) { logError('loadtest', 'loadtest error', { error: e?.message || String(e) }); }
  srv.kill('SIGKILL');
  process.exit(0);
})();
