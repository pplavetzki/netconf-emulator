# NETCONF Emulator (v1)

Read-only Junos NETCONF emulator. Each device's identity is the **destination IP**
the client dialed (`socket.localAddress`), since credentials are shared across
devices in the target environment. Per-device state (serials, etc.) is derived
deterministically from that identity, so every process/instance produces
identical state for the same device with no coordination.

## Layers
- `src/transport/ssh-server.js` — ssh2 Server; auth (accept-any), resolves device
  from destination IP, accepts the `netconf` subsystem.
- `src/session/netconf-session.js` — `<hello>` exchange + per-message dispatch.
- `src/session/framing.js` — RFC 6242 base:1.0 framing (`]]>]]>`).
- `src/session/envelope.js` — `<rpc-reply>` / `<rpc-error>` wrappers.
- `src/handlers/dispatch.js` — maps RPC operation → template (1 line per RPC).
- `src/templates/*.js` — one per RPC, sourced from real captured device output.
- `src/registry/device.js` — deterministic per-device derivation.

## Setup
```
npm install
```
A host key is required at `keys/host_rsa` (not included in the repo). Generate it with:
```
ssh-keygen -t rsa -b 2048 -m PEM -f keys/host_rsa -N ""
```

## Run the emulator
Single process:
```
npm start                       # or: PORT=8830 HOST=0.0.0.0 node src/index.js
```
Cluster mode (one worker per core — use this on multi-core hosts):
```
WORKERS=8 UV_THREADPOOL_SIZE=8 npm run start:cluster
# or: PORT=8830 WORKERS=8 UV_THREADPOOL_SIZE=8 node src/cluster.js
```

## Load test
Self-contained: spawns the server on a random port, ramps concurrent clients,
each runs the full SSH+hello+20×GET+close sequence, reports latency/throughput.
```
CONCURRENCY=200 CONNS=1000 GETS=20 npm run loadtest
```

## Scaling sweep
Runs the cluster server at 1/2/4/8 workers, load-tests each, prints a throughput
curve so you can see scaling with cores. Run on your real target instance.
```
npm run sweep
# or override: WORKERS_SWEEP=1,2,4,8 CONCURRENCY=200 CONNS=2000 UV_THREADPOOL_SIZE=8 node sweep.js
```

### IMPORTANT: run the load test on your real target instance
Throughput here is **handshake/CPU-bound**, so it scales with vCPU count. Results
from a 1-core box are a pessimistic floor. Run `run-loadtest.js` on the actual
EC2 instance type you'll deploy to before drawing capacity conclusions — core
count is the dominant variable.

## Notes / v1 scope
- base:1.0 framing only (server advertises it in `<hello>`); chunked 1.1 not yet.
- RPC parsing is regex-based on the hot path (fast, sufficient for well-formed
  client RPCs). Swap in a streaming parser in `netconf-session.js` if needed.
- `LOG_LEVEL` controls NETCONF session logging:
  - `info`: suppress malformed/unknown RPC warning lines.
  - `warn` (default): log malformed/unknown RPC warnings.
  - `debug`: include warning lines plus per-RPC inbound/outbound trace logs.
  Example: `LOG_LEVEL=debug npm start`

## Supported mock RPC calls
- `file-list`
- `get-alarm-information`
- `get-bgp-summary-information`
- `get-buffer-informations`
- `get-chassis-inventory`
- `get-commit-information`
- `get-fpc-information`
- `get-interface-information`
- `get-isis-adjacency-information`
- `get-license-summary-information`
- `get-ospf-neighbor-information`
- `get-route-engine-information`
- `get-rsvp-neighbor-information`
- `get-software-information`
- `get-system-core-dumps`
- `get-system-information`
- `get-system-uptime-information`
- `get-vrrp-information`

`get-chassis-inventory` variants:
- default -> `chassis-inventory`
- with `<extensive/>` -> `get-chassis-inventory-extensive`

`get-interface-information` variants:
- with `<descriptions/>` -> `get-interface-information-descriptions`
- with `<interface-name>lo0.0</interface-name>` -> `get-interface-information-terse-lo0.0`
- default -> `get-interface-information-terse`

`file-list` currently returns the `file-list-detail-var-log` mock payload.

REPLY_MODE=reorder WORKERS=8 UV_THREADPOOL_SIZE=8 npm run start:cluster
REPLY_MODE=reorder REPLY_DELAY_MIN_MS=2 REPLY_DELAY_MAX_MS=60 npm start
REPLY_MODE=reorder npm start

node cli.js --mode pipelined

# on the generator box, with Node installed and gen-load.js present:
HOST=<emulator-ip> PORT=8830 MODE=sequential CONCURRENCY=200 CONNS=2000 GETS=10 node gen-load.js
