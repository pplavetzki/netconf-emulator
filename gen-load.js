import ssh2 from 'ssh2';
import { performance } from 'node:perf_hooks';
import os from 'node:os';

// Load generator for an ALREADY-RUNNING emulator. Does NOT start a server.
// Point it at a host/port (local or remote) and it ramps concurrent clients,
// each running the full SSH + hello + N-GET (pipelined) + close sequence.
//
//   HOST=<ip> PORT=8830 CONCURRENCY=200 CONNS=2000 GETS=10 node gen-load.js
//
// NOTE: for a TRUE capacity number, run this on a SEPARATE machine from the
// emulator. On the same box, generator and server share CPU and the result
// understates the server's real ceiling (and on burstable instances like
// t3.micro, CPU credits deplete and throughput falls off a cliff mid-run).
// Same-box runs are fine as a functional smoke test, not for sizing.

const { Client } = ssh2;
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 8830);
const USER = process.env.USER_NAME || 'admin';
const PASS = process.env.PASS || 'x';
const CONCURRENCY = Number(process.env.CONCURRENCY || 200);
const TOTAL_CONNS = Number(process.env.CONNS || 2000);
const GETS_PER_CONN = Number(process.env.GETS || 10);
const RPC_OP = process.env.RPC || 'get-chassis-inventory';
// MODE controls how the GETS are sent per connection:
//   sequential (default): send one RPC, wait for its reply, then send the next.
//     This matches a client that waits for each response before continuing.
//   pipelined: fire all GETS at once, then collect replies (max in-flight).
const MODE = process.env.MODE === 'pipelined' ? 'pipelined' : 'sequential';

const EOM = ']]>]]>';
const HELLO = `<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">` +
  `<capabilities><capability>urn:ietf:params:netconf:base:1.0</capability></capabilities></hello>`;
const rpc = (id) => `<rpc message-id="${id}" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"><${RPC_OP}/></rpc>`;

// One connection: connect -> netconf -> hello -> fire all GETS pipelined ->
// collect all replies -> close. Returns timing.
function runConnection() {
  return new Promise((resolve, reject) => {
    const t0 = performance.now();
    let tReady = 0, sent = 0, received = 0, buffer = '';
    const conn = new Client();
    const fail = (e) => { try { conn.end(); } catch {} reject(e); };
    conn.on('ready', () => {
      tReady = performance.now();
      conn.subsys('netconf', (err, stream) => {
        if (err) return fail(err);
        const sendOne = () => { sent += 1; stream.write(rpc(sent) + '\n' + EOM + '\n'); };
        stream.write(HELLO + '\n' + EOM + '\n');
        stream.on('data', (c) => {
          buffer += c.toString('utf8');
          let i;
          while ((i = buffer.indexOf(EOM)) !== -1) {
            const msg = buffer.slice(0, i); buffer = buffer.slice(i + EOM.length);
            if (msg.includes('<hello')) {
              if (MODE === 'pipelined') {
                for (let k = 1; k <= GETS_PER_CONN; k += 1) { sent += 1; stream.write(rpc(sent) + '\n' + EOM + '\n'); }
              } else {
                sendOne(); // sequential: send just the first
              }
            } else if (msg.includes('<rpc-reply')) {
              received += 1;
              if (received >= GETS_PER_CONN) {
                const t = performance.now(); conn.end();
                resolve({ total: t - t0, handshake: tReady - t0 });
              } else if (MODE === 'sequential') {
                sendOne(); // send next only after this reply
              }
            }
          }
        });
        stream.on('error', fail);
      });
    });
    conn.on('error', fail);
    conn.connect({ host: HOST, port: PORT, username: USER, password: PASS, readyTimeout: 30000 });
  });
}

async function main() {
  console.log(`load gen -> ${HOST}:${PORT}  (this box: ${os.hostname()}, ${os.cpus().length} cores)`);
  console.log(`concurrency=${CONCURRENCY} conns=${TOTAL_CONNS} gets/conn=${GETS_PER_CONN} (${MODE}) rpc=${RPC_OP}\n`);

  const results = [], errors = [];
  let launched = 0, active = 0;
  const wallStart = performance.now();
  // periodic progress
  const tick = setInterval(() => {
    process.stderr.write(`\r  progress: ${results.length + errors.length}/${TOTAL_CONNS} (${errors.length} err)   `);
  }, 1000);

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
  clearInterval(tick);
  process.stderr.write('\r');

  const wall = (performance.now() - wallStart) / 1000;
  const pct = (arr, p) => { const s = [...arr].sort((a, b) => a - b); return s[Math.floor(s.length * p)] || 0; };
  const totals = results.map((r) => r.total), hs = results.map((r) => r.handshake);

  console.log('=== results ===');
  console.log(`completed:        ${results.length}/${TOTAL_CONNS}  errors: ${errors.length}`);
  if (errors.length) console.log(`err sample:       ${[...new Set(errors)].slice(0,3).join(' | ')}`);
  console.log(`wall:             ${wall.toFixed(2)}s`);
  console.log(`conn throughput:  ${(results.length / wall).toFixed(1)} conn/s`);
  console.log(`rpc throughput:   ${((results.length * GETS_PER_CONN) / wall).toFixed(0)} rpc/s`);
  console.log(`conn total  p50/p95/p99: ${pct(totals,.5).toFixed(0)}/${pct(totals,.95).toFixed(0)}/${pct(totals,.99).toFixed(0)} ms`);
  console.log(`handshake   p50/p95/p99: ${pct(hs,.5).toFixed(0)}/${pct(hs,.95).toFixed(0)}/${pct(hs,.99).toFixed(0)} ms`);
  process.exit(0);
}

main();
