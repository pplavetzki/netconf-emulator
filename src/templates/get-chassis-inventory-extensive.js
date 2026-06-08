import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-chassis-inventory-extensive.xml
const PAYLOAD = String.raw`<chassis-inventory xmlns="http://xml.juniper.net/junos/19.4R0/junos-chassis">
  <chassis junos:style="inventory">
    <name>Chassis</name>
    <serial-number>BK378</serial-number>
    <description>JNP204 [MX204]</description>
    <clei-code>INM4J00ERA</clei-code>
    <model-number>JNP204-CHAS</model-number>
    <i2c-information>
      <jedec-code>0x7fb0</jedec-code>
      <eeprom-version>0x02</eeprom-version>
      <part-number></part-number>
      <serial-number>BK378</serial-number>
      <assembly-identifier>0x05a0</assembly-identifier>
      <assembly-version>02.27</assembly-version>
      <manufacture-date>04-14-2018</manufacture-date>
      <assembly-flags>0x00</assembly-flags>
      <i2c-version></i2c-version>
      <clei-code>INM4J00ERA</clei-code>
      <i2c-identifier>JNP204 [MX204]</i2c-identifier>
      <model-number>JNP204-CHAS</model-number>
      <board-information-record>
        Address 0x00: ad 01 08 00 ec 38 73 7b 90 48 ff ff ff ff ff ff
      </board-information-record>
      <i2c-data>
        Address 0x00: 7f b0 02 fe 05 a0 02 1b 00 45 56 20 32 37 00 00
        Address 0x10: 00 00 00 00 00 35 30 2d 30 36 39 35 37 39 00 00
        Address 0x20: 42 4b 33 37 38 00 00 00 00 00 00 00 00 0e 04 07
        Address 0x30: e2 ff ff ff ad 01 08 00 ec 38 73 7b 90 48 ff ff
        Address 0x40: ff ff ff ff 01 49 4e 4d 34 4a 30 30 45 52 41 4a
        Address 0x50: 4e 50 32 30 34 2d 43 48 41 53 00 00 00 00 00 00
        Address 0x60: 00 00 00 00 00 00 41 43 00 ff ff ff ff ff ff ff
        Address 0x70: ff ff ff df 42 4b 33 37 38 00 00 00 00 00 00 00
      </i2c-data>
    </i2c-information>
    <chassis-module>
      <name>Routing Engine 0</name>
      <part-number>BUILTIN</part-number>
      <serial-number>BUILTIN</serial-number>
      <description>RE-S-1600x8</description>
      <i2c-information>
        <jedec-code>0x7fb0</jedec-code>
        <eeprom-version>0x01</eeprom-version>
        <part-number>711-068683</part-number>
        <serial-number>CAKV2080</serial-number>
        <assembly-identifier>0x0c8c</assembly-identifier>
        <assembly-version>01.13</assembly-version>
        <manufacture-date>04-14-2018</manufacture-date>
        <assembly-flags>0x00</assembly-flags>
        <i2c-version>REV 13</i2c-version>
        <i2c-identifier>Control Board</i2c-identifier>
        <board-information-record>
          Address 0x00: ad 01 00 04 ec 38 73 7b 90 44 ff ff ff ff ff ff
        </board-information-record>
        <i2c-data>
          Address 0x00: 7f b0 01 fe 0c 8c 01 0d 52 45 56 20 31 33 00 00
          Address 0x10: 00 00 00 00 37 31 31 2d 30 36 38 36 38 33 00 00
          Address 0x20: 53 2f 4e 20 43 41 4b 56 32 30 38 30 00 0e 04 07
          Address 0x30: e2 ff ff ff ad 01 00 04 ec 38 73 7b 90 44 ff ff
          Address 0x40: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
          Address 0x50: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
          Address 0x60: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
          Address 0x70: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
        </i2c-data>
      </i2c-information>
      <chassis-re-disk-module>
        <name>vtbd0</name>
        <disk-size>17408</disk-size>
        <model/>
        <serial-number></serial-number>
        <description>Virtio Block Disk</description>
      </chassis-re-disk-module>
      <chassis-re-disk-module>
        <name>vtbd1</name>
        <disk-size>32768</disk-size>
        <model/>
        <serial-number></serial-number>
        <description>Virtio Block Disk</description>
      </chassis-re-disk-module>
      <chassis-re-disk-module>
        <name>ada0</name>
        <disk-size>512</disk-size>
        <model>QEMU</model>
        <serial-number>QM00002</serial-number>
        <description>Virtio Block Disk</description>
      </chassis-re-disk-module>
      <chassis-re-disk-module>
        <name>ada1</name>
        <disk-size>128</disk-size>
        <model>QEMU</model>
        <serial-number>QM00004</serial-number>
        <description>Virtio Block Disk</description>
      </chassis-re-disk-module>
      <chassis-re-usb-module>
        <name>usb0 (addr 0.1)</name>
        <product>XHCI root HUB</product>
        <product-number>0</product-number>
        <vendor>0x8086</vendor>
        <description>uhub0</description>
      </chassis-re-usb-module>
    </chassis-module>
    <chassis-module>
      <name>CB 0</name>
      <version>REV 27</version>
      <part-number>750-069579</part-number>
      <serial-number>CAKV2080</serial-number>
      <description>JNP204 [MX204]</description>
      <clei-code>INM4J00ERA</clei-code>
      <model-number>JNP204-CHAS</model-number>
      <i2c-information>
        <jedec-code>0x7fb0</jedec-code>
        <eeprom-version>0x02</eeprom-version>
        <part-number>750-069579</part-number>
        <serial-number>CAKV2080</serial-number>
        <assembly-identifier>0x05a0</assembly-identifier>
        <assembly-version>02.27</assembly-version>
        <manufacture-date>04-14-2018</manufacture-date>
        <assembly-flags>0x00</assembly-flags>
        <i2c-version>REV 27</i2c-version>
        <clei-code>INM4J00ERA</clei-code>
        <i2c-identifier>JNP204 [MX204]</i2c-identifier>
        <model-number>JNP204-CHAS</model-number>
        <board-information-record>
          Address 0x00: ad 01 08 00 ec 38 73 7b 90 48 ff ff ff ff ff ff
        </board-information-record>
        <i2c-data>
          Address 0x00: 7f b0 02 fe 05 a0 02 1b 52 45 56 20 32 37 00 00
          Address 0x10: 00 00 00 00 37 35 30 2d 30 36 39 35 37 39 00 00
          Address 0x20: 53 2f 4e 20 43 41 4b 56 32 30 38 30 00 0e 04 07
          Address 0x30: e2 ff ff ff ad 01 08 00 ec 38 73 7b 90 48 ff ff
          Address 0x40: ff ff ff ff 01 49 4e 4d 34 4a 30 30 45 52 41 4a
          Address 0x50: 4e 50 32 30 34 2d 43 48 41 53 00 00 00 00 00 00
          Address 0x60: 00 00 00 00 00 00 41 43 00 ff ff ff ff ff ff ff
          Address 0x70: ff ff ff df 42 4b 33 37 38 00 00 00 00 00 00 00
        </i2c-data>
      </i2c-information>
    </chassis-module>
    <chassis-module>
      <name>FPC 0</name>
      <part-number>BUILTIN</part-number>
      <serial-number>BUILTIN</serial-number>
      <description>MPC</description>
      <clei-code>PROTOXCLEI</clei-code>
      <model-number>PROTO-ASSEMBLY</model-number>
      <i2c-information>
        <jedec-code>0x7fb0</jedec-code>
        <eeprom-version>0x02</eeprom-version>
        <part-number>BUILTIN</part-number>
        <serial-number>BUILTIN</serial-number>
        <assembly-identifier>0x0c8d</assembly-identifier>
        <assembly-version>01.02</assembly-version>
        <manufacture-date>06-17-2016</manufacture-date>
        <assembly-flags>0x00</assembly-flags>
        <i2c-version></i2c-version>
        <clei-code>PROTOXCLEI</clei-code>
        <i2c-identifier>MPC</i2c-identifier>
        <model-number>PROTO-ASSEMBLY</model-number>
        <board-information-record>
          Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
        </board-information-record>
        <i2c-data>
          Address 0x00: 7f b0 02 ff 0c 8d 01 02 00 45 56 20 30 32 00 00
          Address 0x10: 00 00 00 00 42 55 49 4c 54 49 4e 00 37 39 00 00
          Address 0x20: 42 55 49 4c 54 49 4e 00 38 37 38 32 00 11 06 07
          Address 0x30: e0 ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
          Address 0x40: ff ff ff ff 01 50 52 4f 54 4f 58 43 4c 45 49 50
          Address 0x50: 52 4f 54 4f 2d 41 53 53 45 4d 42 4c 59 00 00 00
          Address 0x60: 00 00 00 00 00 00 41 30 30 ff ff ff ff ff ff ff
          Address 0x70: ff ff ff c2 ff ff ff ff ff ff ff ff ff ff ff ff
        </i2c-data>
      </i2c-information>
      <chassis-sub-module>
        <name>CPU</name>
      </chassis-sub-module>
      <chassis-sub-module>
        <name>PIC 0</name>
        <part-number>BUILTIN</part-number>
        <serial-number>BUILTIN</serial-number>
        <description>4XQSFP28 PIC</description>
        <i2c-information>
          <jedec-code>0x0000</jedec-code>
          <eeprom-version>0x00</eeprom-version>
          <part-number>BUILTIN</part-number>
          <serial-number>BUILTIN</serial-number>
          <assembly-identifier>0x0ad3</assembly-identifier>
          <assembly-version>00.00</assembly-version>
          <manufacture-date>00-00-0000</manufacture-date>
          <assembly-flags>0x00</assembly-flags>
          <i2c-version></i2c-version>
          <i2c-identifier>4x QSFP28 PIC</i2c-identifier>
          <board-information-record>
            Address 0x00: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
          </board-information-record>
          <i2c-data>
            Address 0x00: 00 00 00 00 0a d3 00 00 00 00 00 00 00 00 00 00
            Address 0x10: 00 00 00 00 42 55 49 4c 54 49 4e 00 25 73 3a 20
            Address 0x20: 42 55 49 4c 54 49 4e 00 25 73 3a 20 00 00 00 00
            Address 0x30: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x40: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x50: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x60: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x70: 00 00 00 00 83 80 d2 a6 00 00 00 00 0a d4 00 00
          </i2c-data>
        </i2c-information>
        <chassis-sub-sub-module>
          <name>Xcvr 0</name>
          <version>REV 01</version>
          <part-number>740-056705</part-number>
          <serial-number>UUJ01CF</serial-number>
          <description>QSFP+40GE-LX4</description>
        </chassis-sub-sub-module>
      </chassis-sub-module>
      <chassis-sub-module>
        <name>PIC 1</name>
        <part-number>BUILTIN</part-number>
        <serial-number>BUILTIN</serial-number>
        <description>8XSFPP PIC</description>
        <i2c-information>
          <jedec-code>0x0000</jedec-code>
          <eeprom-version>0x00</eeprom-version>
          <part-number>BUILTIN</part-number>
          <serial-number>BUILTIN</serial-number>
          <assembly-identifier>0x0ad4</assembly-identifier>
          <assembly-version>00.00</assembly-version>
          <manufacture-date>00-00-0000</manufacture-date>
          <assembly-flags>0x00</assembly-flags>
          <i2c-version></i2c-version>
          <i2c-identifier>8x SFPP PIC</i2c-identifier>
          <board-information-record>
            Address 0x00: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
          </board-information-record>
          <i2c-data>
            Address 0x00: 00 00 00 00 0a d4 00 00 00 00 00 00 00 00 00 00
            Address 0x10: 00 00 00 00 42 55 49 4c 54 49 4e 00 25 73 3a 20
            Address 0x20: 42 55 49 4c 54 49 4e 00 25 73 3a 20 00 00 00 00
            Address 0x30: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x40: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x50: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x60: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
            Address 0x70: 00 00 00 00 83 00 b3 a8 00 00 00 00 0a d3 00 00
          </i2c-data>
        </i2c-information>
      </chassis-sub-module>
    </chassis-module>
    <chassis-module>
      <name>PEM 1</name>
      <version>REV 03</version>
      <part-number>740-070749</part-number>
      <serial-number>1F188120484</serial-number>
      <description>JPSU-650W-AC-AO</description>
      <clei-code>CMUPAE6BAA</clei-code>
      <model-number>JPSU-650W-AC-AO</model-number>
      <i2c-information>
        <jedec-code>0x7fb0</jedec-code>
        <eeprom-version>0x02</eeprom-version>
        <part-number>740-070749</part-number>
        <serial-number>1F188120484</serial-number>
        <assembly-identifier>0x04ac</assembly-identifier>
        <assembly-version>01.03</assembly-version>
        <manufacture-date>03-23-2018</manufacture-date>
        <assembly-flags>0x00</assembly-flags>
        <i2c-version>REV 03</i2c-version>
        <clei-code>CMUPAE6BAA</clei-code>
        <i2c-identifier>JPSU-650W-AC-AO</i2c-identifier>
        <model-number>JPSU-650W-AC-AO</model-number>
        <board-information-record>
          Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
        </board-information-record>
        <i2c-data>
          Address 0x00: 7f b0 02 ff 04 ac 01 03 52 45 56 20 30 33 00 00
          Address 0x10: 00 00 00 00 37 34 30 2d 30 37 30 37 34 39 00 00
          Address 0x20: 31 46 31 38 38 31 32 30 34 38 34 00 00 17 03 07
          Address 0x30: e2 00 00 ff ff ff ff ff ff ff ff ff ff ff ff ff
          Address 0x40: ff ff ff ff 01 43 4d 55 50 41 45 36 42 41 41 4a
          Address 0x50: 50 53 55 2d 36 35 30 57 2d 41 43 2d 41 4f 00 00
          Address 0x60: 00 00 00 00 00 00 41 30 30 ff ff ff ff ff ff ff
          Address 0x70: ff ff ff 1c ff ff ff ff ff ff ff ff ff ff ff ff
        </i2c-data>
      </i2c-information>
    </chassis-module>
    <chassis-module>
      <name>Fan Tray 0</name>
      <description>Fan Tray, Front to Back Airflow - AFO</description>
      <model-number>JNP-FAN-1RU</model-number>
      <i2c-information>
        <model-number>JNP-FAN-1RU</model-number>
      </i2c-information>
    </chassis-module>
    <chassis-module>
      <name>Fan Tray 1</name>
      <description>Fan Tray, Front to Back Airflow - AFO</description>
      <model-number>JNP-FAN-1RU</model-number>
      <i2c-information>
        <model-number>JNP-FAN-1RU</model-number>
      </i2c-information>
    </chassis-module>
    <chassis-module>
      <name>Fan Tray 2</name>
      <description>Fan Tray, Front to Back Airflow - AFO</description>
      <model-number>JNP-FAN-1RU</model-number>
      <i2c-information>
        <model-number>JNP-FAN-1RU</model-number>
      </i2c-information>
    </chassis-module>
  </chassis>
</chassis-inventory>`;

export function getChassisInventoryExtensive(device) {
  return renderDevicePayload(PAYLOAD, device);
}
