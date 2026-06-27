import ssh2 from 'ssh2';
import { logError, logInfo } from './src/log.js';

// Usage:
//   node cli.js [--host H] [--port P] [--user U] [--pass X]
//               [--mode pipelined|sequential]
//               [--rpc get-chassis-inventory ... ]   (one or more RPC op names)
//   Default: sends the full mapped RPC set once, pipelined.
//
// Tests the "N commands per connection" pattern your app uses. Pipelined fires
// all RPCs without waiting (max concurrency on one session); sequential waits
// for each reply before sending the next (one outstanding at a time).

const { Client } = ssh2;
const EOM = ']]>]]>';
const HELLO = `<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"><capabilities>` +
  `<capability>urn:ietf:params:netconf:base:1.0</capability></capabilities></hello>`;

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
function args(name) {
  const out = [];
  let i = process.argv.indexOf(`--${name}`);
  while (i !== -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')) {
    out.push(process.argv[i + 1]);
    process.argv.splice(i + 1, 1);
  }
  return out;
}

const HOST = arg('host', '127.0.0.1');
const PORT = Number(arg('port', '8830'));
const USER = arg('user', 'admin');
const PASS = arg('pass', 'x');
const MODE = arg('mode', 'pipelined');
let RPCS = args('rpc');
const DEFAULT_RPCS = [
  'get-chassis-inventory',
  'get-route-engine-information',
  'get-interface-information><terse/><interface-name>lo0.0</interface-name></get-interface-information',
  'get-software-information',
  'get-system-information',
  'get-alarm-information',
  'get-interface-information><descriptions/></get-interface-information',
  'get-commit-information',
  'get-chassis-inventory><extensive/></get-chassis-inventory',
  'get-interface-information><terse/></get-interface-information',
  'get-system-core-dumps',
  'get-system-uptime-information',
  'get-ospf-neighbor-information',
  'get-isis-adjacency-information',
  'get-fpc-information',
  'get-rsvp-neighbor-information',
  'get-vrrp-information><detail/></get-vrrp-information',
  'get-buffer-informations',
  'get-bgp-summary-information',
  'get-license-summary-information',
  'file-list><style>detail</style><path>/var/log/</path></file-list',
];
if (RPCS.length === 0) RPCS = DEFAULT_RPCS;

const rpcXml = (op, id) =>
  `<rpc message-id="${id}" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"><${op}/></rpc>`;

const conn = new Client();
conn.on('ready', () => {
  conn.subsys('netconf', (err, stream) => {
    if (err) {
      logError('cli', 'subsystem error', { error: err.message });
      process.exit(1);
    }
    let buf = '';
    let sent = 0;
    let received = 0;
    let firstReply = null;
    const t0 = Date.now();
    const replyIds = [];

    const sendOne = () => {
      if (sent >= RPCS.length) return;
      const id = sent + 1;
      stream.write(rpcXml(RPCS[sent], id) + '\n' + EOM + '\n');
      sent += 1;
    };

    stream.on('data', (c) => {
      buf += c.toString('utf8');
      let i;
      while ((i = buf.indexOf(EOM)) !== -1) {
        const msg = buf.slice(0, i).trim();
        buf = buf.slice(i + EOM.length);
        if (!msg) continue;

        if (msg.includes('<hello')) {
          if (MODE === 'pipelined') {
            while (sent < RPCS.length) sendOne();
          } else {
            sendOne();
          }
        } else if (msg.includes('<rpc-reply')) {
          received += 1;
          if (!firstReply) firstReply = msg;
          const idMatch = msg.match(/message-id="([^"]*)"/);
          const isError = msg.includes('<rpc-error');
          replyIds.push((idMatch ? idMatch[1] : '?') + (isError ? '!' : ''));
          if (MODE === 'sequential') sendOne();
          if (received >= RPCS.length) {
            const ms = Date.now() - t0;
            logInfo('cli', 'rpc run complete', {
              mode: MODE,
              sent,
              received,
              durationMs: ms,
            });
            logInfo('cli', 'reply ids in arrival order', {
              replyIds,
              rpcErrorSuffix: '!',
            });
            logInfo('cli', 'first reply payload', { payload: firstReply });
            conn.end();
          }
        }
      }
    });

    stream.write(HELLO + '\n' + EOM + '\n');
  });
});
conn.on('error', (e) => {
  logError('cli', 'connection error', { error: e.message });
  process.exit(1);
});
conn.connect({ host: HOST, port: PORT, username: USER, password: PASS, readyTimeout: 15000 });
