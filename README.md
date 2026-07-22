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

## Per-device XML overrides & reply resolution

External per-device XML overrides:
```
TEST_DATA_DIR=/var/lib/netconf-emulator/data npm start
```

### ⚠️ Reply resolution order (IMPORTANT — read this first)

**This is the single most important thing to understand about the emulator.**
For every RPC reply, the server resolves the payload by walking the sources
below **in order** and using the **first match it finds**. A higher source
always wins over a lower one:

1. **External override** (highest priority) — first file found in
   `<TEST_DATA_DIR>/<device-ip>/<rpc>/`
2. **In-repo per-IP override** — `mock_responses/<device-ip>/<mapped-file>.xml`
3. **Default fallback** (lowest priority) — `mock_responses/default/<mapped-file>.xml`

> **Why this matters:** if a reply looks wrong or "stale," check the sources
> **top-down** — a leftover external override or a per-IP file will silently
> shadow the default. The default is only used when nothing above it matches.

`<device-ip>` is the **destination address the client dialed**
(`socket.localAddress`) — the same value used to derive the `device@<ip>`
identity. It is *not* the client's source address.

### Naming convention for `<mapped-file>`

The `<mapped-file>` name is derived from the RPC, following a consistent pattern:

```
<rpc-name>[-<variant-suffix>]
```

- **Base RPC:** the RPC operation name maps directly to a file of the same name
  (e.g. `get-alarm-information` → `get-alarm-information`).
- **Variant suffix:** when an RPC has multiple forms, a suffix describing the
  request argument (or a fixed default variant) is appended.

| RPC request | Matched condition | Resolves to `<mapped-file>` |
|---|---|---|
| `get-interface-information` | `<descriptions/>` present | `get-interface-information-descriptions` |
| `get-interface-information` | `<interface-name>lo0.0</interface-name>` | `get-interface-information-terse-lo0.0` |
| `get-interface-information` | (default) | `get-interface-information-terse` |
| `get-chassis-inventory` | `<extensive/>` present | `get-chassis-inventory-extensive` |
| `get-chassis-inventory` | (default) | `chassis-inventory` |
| `get-vrrp-information` | (always) | `get-vrrp-information-detail` |
| `file-list` | (always) | `file-list-detail-var-log` |

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

