import { spawn } from 'node:child_process';
import ssh2 from 'ssh2';
import { performance } from 'node:perf_hooks';
import os from 'node:os';

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
  console.log(`\n=== results (cores=${os.cpus().length}) ===`);
  console.log(`concurrency=${CONCURRENCY} conns=${TOTAL_CONNS} gets/conn=${GETS_PER_CONN}`);
  console.log(`completed:        ${results.length}/${TOTAL_CONNS}  errors: ${errors.length}`);
  if (errors.length) console.log(`errs:             ${[...new Set(errors)].slice(0,2).join(' | ')}`);
  console.log(`wall:             ${wall.toFixed(2)}s`);
  console.log(`conn throughput:  ${(results.length / wall).toFixed(1)} conn/s`);
  console.log(`rpc throughput:   ${((results.length * GETS_PER_CONN) / wall).toFixed(0)} rpc/s`);
  console.log(`conn total  p50/p95/p99: ${pct(totals,.5).toFixed(0)}/${pct(totals,.95).toFixed(0)}/${pct(totals,.99).toFixed(0)} ms`);
  console.log(`handshake   p50/p95/p99: ${pct(hs,.5).toFixed(0)}/${pct(hs,.95).toFixed(0)}/${pct(hs,.99).toFixed(0)} ms`);
}

import net from 'node:net';

const srv = spawn('node', ['src/index.js'], { env: { ...process.env, PORT: String(PORT), HOST: '127.0.0.1' }, stdio: ['ignore', 'pipe', 'pipe'] });
srv.stderr.on('data', (d) => console.error('srv:', d.toString()));

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
  if (!ok) { console.error('server did not start in time'); srv.kill('SIGKILL'); process.exit(1); }
  try { await loadTest(); } catch (e) { console.error('loadtest error:', e); }
  srv.kill('SIGKILL');
  process.exit(0);
})();
