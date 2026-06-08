import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-buffer-informations.xml
const PAYLOAD = String.raw`<memory-statistics>
  <current-mbufs>1161</current-mbufs>
  <cached-mbufs>4914</cached-mbufs>
  <total-mbufs>6075</total-mbufs>
  <current-mbuf-clusters>772</current-mbuf-clusters>
  <cached-mbuf-clusters>2698</cached-mbuf-clusters>
  <total-mbuf-clusters>3470</total-mbuf-clusters>
  <max-mbuf-clusters>1017674</max-mbuf-clusters>
  <packet-count>769</packet-count>
  <packet-free>2267</packet-free>
  <current-jumbo-clusters-4k>258</current-jumbo-clusters-4k>
  <cached-jumbo-clusters-4k>1068</cached-jumbo-clusters-4k>
  <total-jumbo-clusters-4k>1326</total-jumbo-clusters-4k>
  <max-jumbo-clusters-4k>508837</max-jumbo-clusters-4k>
  <current-jumbo-clusters-9k>0</current-jumbo-clusters-9k>
  <cached-jumbo-clusters-9k>0</cached-jumbo-clusters-9k>
  <total-jumbo-clusters-9k>0</total-jumbo-clusters-9k>
  <max-jumbo-clusters-9k>150766</max-jumbo-clusters-9k>
  <current-jumbo-clusters-16k>0</current-jumbo-clusters-16k>
  <cached-jumbo-clusters-16k>0</cached-jumbo-clusters-16k>
  <total-jumbo-clusters-16k>0</total-jumbo-clusters-16k>
  <max-jumbo-clusters-16k>84806</max-jumbo-clusters-16k>
  <current-bytes-in-use>2866</current-bytes-in-use>
  <cached-bytes>10896</cached-bytes>
  <total-bytes>13762</total-bytes>
  <mbuf-failures>0</mbuf-failures>
  <cluster-failures>0</cluster-failures>
  <packet-failures>0</packet-failures>
  <jumbo-cluster-failures-4k>0</jumbo-cluster-failures-4k>
  <jumbo-cluster-failures-9k>0</jumbo-cluster-failures-9k>
  <jumbo-cluster-failures-16k>0</jumbo-cluster-failures-16k>
  <sfbuf-requests-denied>0</sfbuf-requests-denied>
  <sfbuf-requests-delayed>0</sfbuf-requests-delayed>
  <io-initiated>0</io-initiated>
</memory-statistics>`;

export function getBufferInformations(device) {
  return renderDevicePayload(PAYLOAD, device);
}
