import { spawn } from 'node:child_process';
import net from 'node:net';
import os from 'node:os';
import ssh2 from 'ssh2';
import { performance } from 'node:perf_hooks';

const { Client } = ssh2;

// Sweep configuration
const WORKER_COUNTS = (process.env.WORKERS_SWEEP || '1,2,4,8').split(',').map(Number);
const THREADPOOL = Number(process.env.UV_THREADPOOL_SIZE || os.cpus().length);
const CONCURRENCY = Number(process.env.CONCURRENCY || 200);
const TOTAL_CONNS = Number(process.env.CONNS || 1000);
const GETS_PER_CONN = Number(process.env.GETS || 20);

const EOM = ']]>]]>';
const HELLO = `<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">` +
  `<capabilities><capability>urn:ietf:params:netconf:base:1.0</capability></capabilities></hello>`;
const rpc = (id) => `<rpc message-id="${id}" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"><get-chassis-inventory/></rpc>`;

function probe(port) {
  return new Promise((resolve) => {
    const s = net.connect(port, '127.0.0.1');
    s.on('connect', () => { s.destroy(); resolve(true); });
    s.on('error', () => resolve(false));
  });
}
async function waitUp(port, ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) { if (await probe(port)) return true; await new Promise((r) => setTimeout(r, 200)); }
  return false;
}

function runConnection(port) {
  return new Promise((resolve, reject) => {
    const t0 = performance.now();
    let tReady = 0, pending = 0, received = 0, buffer = '';
    const conn = new Client();
    const fail = (e) => { try { conn.end(); } catch {} reject(e); };
    conn.on('ready', () => {
      tReady = performance.now();
      conn.subsys('netconf', (err, stream) => {
        if (err) return fail(err);
        stream.write(HELLO + '\n' + EOM + '\n');
        const sendNext = () => { if (pending >= GETS_PER_CONN) return; pending += 1; stream.write(rpc(pending) + '\n' + EOM + '\n'); };
        stream.on('data', (c) => {
          buffer += c.toString('utf8');
          let i;
          while ((i = buffer.indexOf(EOM)) !== -1) {
            const msg = buffer.slice(0, i); buffer = buffer.slice(i + EOM.length);
            if (msg.includes('<hello')) sendNext();
            else if (msg.includes('<rpc-reply')) {
              if (++received >= GETS_PER_CONN) { const t = performance.now(); conn.end(); resolve({ total: t - t0, handshake: tReady - t0 }); }
              else sendNext();
            }
          }
        });
        stream.on('error', fail);
      });
    });
    conn.on('error', fail);
    conn.connect({ host: '127.0.0.1', port, username: 'd', password: 'x', readyTimeout: 30000 });
  });
}

async function loadTest(port) {
  const results = [], errors = [];
  let launched = 0, active = 0;
  const wallStart = performance.now();
  await new Promise((done) => {
    const pump = () => {
      while (active < CONCURRENCY && launched < TOTAL_CONNS) {
        launched += 1; active += 1;
        runConnection(port).then((r) => results.push(r)).catch((e) => errors.push(e.message))
          .finally(() => { active -= 1; (results.length + errors.length >= TOTAL_CONNS) ? done() : pump(); });
      }
    };
    pump();
  });
  const wall = (performance.now() - wallStart) / 1000;
  const pct = (arr, p) => { const s = [...arr].sort((a, b) => a - b); return s[Math.floor(s.length * p)] || 0; };
  return {
    ok: results.length, errors: errors.length, wall,
    connPerSec: results.length / wall,
    rpcPerSec: (results.length * GETS_PER_CONN) / wall,
    hsP50: pct(results.map((r) => r.handshake), .5),
    hsP99: pct(results.map((r) => r.handshake), .99),
    sample: [...new Set(errors)].slice(0, 1)[0],
  };
}

function startCluster(workers, port) {
  return spawn('node', ['src/cluster.js'], {
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', WORKERS: String(workers), UV_THREADPOOL_SIZE: String(THREADPOOL) },
    stdio: ['ignore', 'ignore', 'pipe'],
  });
}

async function main() {
  console.log(`\nScaling sweep on ${os.cpus().length}-core host`);
  console.log(`UV_THREADPOOL_SIZE=${THREADPOOL}  concurrency=${CONCURRENCY}  conns=${TOTAL_CONNS}  gets/conn=${GETS_PER_CONN}\n`);
  console.log('workers |  conn/s |   rpc/s | hs p50 | hs p99 |  wall | errors');
  console.log('--------+---------+---------+--------+--------+-------+-------');

  const rows = [];
  for (const w of WORKER_COUNTS) {
    const port = 9100 + w;
    const srv = startCluster(w, port);
    let stderr = '';
    srv.stderr.on('data', (d) => { stderr += d.toString(); });
    const up = await waitUp(port, 15000);
    if (!up) { console.log(`${String(w).padStart(7)} | server failed to start: ${stderr.slice(0,120)}`); srv.kill('SIGKILL'); continue; }
    // small settle so all workers are accepting
    await new Promise((r) => setTimeout(r, 500));
    const res = await loadTest(port);
    rows.push({ w, ...res });
    console.log(
      `${String(w).padStart(7)} | ${res.connPerSec.toFixed(0).padStart(7)} | ${res.rpcPerSec.toFixed(0).padStart(7)} | ` +
      `${res.hsP50.toFixed(0).padStart(6)} | ${res.hsP99.toFixed(0).padStart(6)} | ${res.wall.toFixed(1).padStart(5)} | ${res.errors}` +
      (res.sample ? `  (${res.sample})` : '')
    );
    srv.kill('SIGKILL');
    await new Promise((r) => setTimeout(r, 800)); // let port free
  }

  // scaling summary
  if (rows.length > 1) {
    const base = rows[0].rpcPerSec;
    console.log('\nscaling vs 1 worker:');
    for (const r of rows) console.log(`  ${r.w}w: ${(r.rpcPerSec / base).toFixed(2)}x`);
    console.log('\n(Linear-ish climb then flattening = core-bound, which is what you want to see.');
    console.log(' The flattening point is roughly your usable core count for this workload.)');
  }
  process.exit(0);
}

main();
