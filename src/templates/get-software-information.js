import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/get-software-information.xml
const PAYLOAD = String.raw`<software-information>
    <host-name>cdo-MX10003-r002</host-name>
    <product-model>mx10003</product-model>
    <product-name>JNP10003 [MX10003]</product-name>
    <junos-version>20.4R3-S4.8</junos-version>
    <package-information>
        <name>os-kernel</name>
        <package-name>os-kernel-prd-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS Kernel 64-bit [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>os-libs</name>
        <package-name>os-libs-11-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS libs [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>os-runtime</name>
        <package-name>os-runtime-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS runtime [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>zoneinfo</name>
        <package-name>os-zoneinfo-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS time zone information [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>netstack</name>
        <package-name>junos-net-prd-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS network stack and utilities [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-libs</name>
        <package-name>junos-libs-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS libs [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>os-libs-compat32</name>
        <package-name>os-libs-compat32-11-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS libs compat32 [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>os-compat32</name>
        <package-name>os-compat32-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS 32-bit compatibility [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>junos-libs-compat32</name>
        <package-name>junos-libs-compat32-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS libs compat32 [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-runtime</name>
        <package-name>junos-runtime-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS runtime [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>vmguest</name>
        <package-name>junos-vmguest-mtx-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>Junos vmguest package [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>sflow-platform</name>
        <package-name>sflow-mx-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS sflow mx [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>py-extensions2</name>
        <package-name>py-extensions2-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS py extensions2 [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>py-extensions</name>
        <package-name>py-extensions-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS py extensions [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>py-base2</name>
        <package-name>py-base2-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS py base2 [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>py-base</name>
        <package-name>py-base-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS py base [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>os-vmguest</name>
        <package-name>os-vmguest-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS vmguest [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>os-crypto</name>
        <package-name>os-crypto-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS crypto [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>os-boot-junos</name>
        <package-name>os-boot-junos-ve-x86-64-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS OS boot-ve files [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
    <package-information>
        <name>na-telemetry</name>
        <package-name>na-telemetry-x86-32-20.4R3-S4.8</package-name>
        <comment>JUNOS na telemetry [20.4R3-S4.8]</comment>
    </package-information>
    <package-information>
        <name>junos-secintel</name>
        <package-name>junos-secintel-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Security Intelligence [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-libs-compat32-platform</name>
        <package-name>junos-libs-compat32-mx-x86-64-20220816.180901_builder_junos_204_r3_s4
        </package-name>
        <comment>JUNOS mx libs compat32 [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-runtime-platform</name>
        <package-name>junos-runtime-mx-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS mx runtime [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-rpd-telemetry-application</name>
        <package-name>junos-rpd-telemetry-application-x86-64-20.4R3-S4.8</package-name>
        <comment>JUNOS RPD Telemetry Application [20.4R3-S4.8]</comment>
    </package-information>
    <package-information>
        <name>junos-redis</name>
        <package-name>junos-redis-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>Redis [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-probe</name>
        <package-name>junos-probe-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS probe utility [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-platform</name>
        <package-name>junos-platform-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS common platform support [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-openconfig</name>
        <package-name>junos-openconfig-x86-32-20.4R3-S4.8</package-name>
        <comment>JUNOS Openconfig [20.4R3-S4.8]</comment>
    </package-information>
    <package-information>
        <name>junos-net-platform</name>
        <package-name>junos-net-mtx-prd-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS mtx network modules [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-modules</name>
        <package-name>junos-modules-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS modules [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-modules-platform</name>
        <package-name>junos-modules-mx-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS mx modules [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-libs-platform</name>
        <package-name>junos-libs-mx-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS mx libs [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-jsqlsync</name>
        <package-name>junos-jsqlsync-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS SQL Sync Daemon [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-dp-crypto-support-platform</name>
        <package-name>junos-dp-crypto-support-mtx-x86-32-20220816.180901_builder_junos_204_r3_s4
        </package-name>
        <comment>JUNOS mtx Data Plane Crypto Support [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-daemons</name>
        <package-name>junos-daemons-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS daemons [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-daemons-platform</name>
        <package-name>junos-daemons-mx-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS mx daemons [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>junos-bbe-up</name>
        <package-name>junos-bbe-up-x86-64-20.4R3-S4.8</package-name>
        <comment>JUNOS Broadband Egde User Plane Apps [20.4R3-S4.8]</comment>
    </package-information>
    <package-information>
        <name>junos-appidd</name>
        <package-name>junos-appidd-mx-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS appidd-mx application-identification daemon
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-urlf</name>
        <package-name>jservices-urlf-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services URL Filter package [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-traffic-dird</name>
        <package-name>jservices-traffic-dird-x86-32-20220816.180901_builder_junos_204_r3_s4
        </package-name>
        <comment>JUNOS Services TLB Service PIC package [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-telemetry</name>
        <package-name>jservices-telemetry-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Telemetry [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-tcp-log</name>
        <package-name>jservices-tcp-log-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services TCP-LOG [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-ssl</name>
        <package-name>jservices-ssl-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services SSL [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-softwire</name>
        <package-name>jservices-softwire-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services SOFTWIRE [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-sfw</name>
        <package-name>jservices-sfw-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Stateful Firewall [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-rtcom</name>
        <package-name>jservices-rtcom-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services RTCOM [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-rpm</name>
        <package-name>jservices-rpm-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services RPM [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-pcef</name>
        <package-name>jservices-pcef-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services PCEF package [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-nat</name>
        <package-name>jservices-nat-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services NAT [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-mss</name>
        <package-name>jservices-mss-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Mobile Subscriber Service Container package
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-mobile</name>
        <package-name>jservices-mobile-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services MobileNext Software package [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-lrf</name>
        <package-name>jservices-lrf-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Logging Report Framework package
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-llpdf</name>
        <package-name>jservices-llpdf-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services LL-PDF Container package [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-jflow</name>
        <package-name>jservices-jflow-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Jflow Container package [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-jdpi</name>
        <package-name>jservices-jdpi-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Deep Packet Inspection package
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-ipsec</name>
        <package-name>jservices-ipsec-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services IPSec [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-ids</name>
        <package-name>jservices-ids-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services IDS [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-idp</name>
        <package-name>jservices-idp-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS IDP Services [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-hcm</name>
        <package-name>jservices-hcm-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services HTTP Content Management package
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-crypto-base</name>
        <package-name>jservices-crypto-base-x86-32-20220816.180901_builder_junos_204_r3_s4
        </package-name>
        <comment>JUNOS Services Crypto [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-cpcd</name>
        <package-name>jservices-cpcd-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Captive Portal and Content Delivery Container package
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-cos</name>
        <package-name>jservices-cos-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services COS [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-appid</name>
        <package-name>jservices-appid-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS AppId Services [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jservices-alg</name>
        <package-name>jservices-alg-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services Application Level Gateways [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jservices-aacl</name>
        <package-name>jservices-aacl-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Services AACL Container package [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jsdn</name>
        <package-name>jsdn-x86-32-20.4R3-S4.8</package-name>
        <comment>JUNOS SDN Software Suite [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jsd-jet-1</name>
        <package-name>jsd-x86-32-20.4R3-S4.8-jet-1</package-name>
        <comment>JUNOS Extension Toolkit [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jpfe-wrlinux9</name>
        <package-name>jpfe-wrlinux9-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Packet Forwarding Engine Support (wrlinux9)
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jpfe-platform</name>
        <package-name>jpfe-X960-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Packet Forwarding Engine Support (MX/EX92XX Common)
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jpfe-common</name>
        <package-name>jpfe-common-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Packet Forwarding Engine Support (M/T Common)
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jpfe-aft</name>
        <package-name>jpfe-aft-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Packet Forwarding Engine Support (aft)
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jpfe-X</name>
        <package-name>jpfe-X-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Packet Forwarding Engine Support (MX Common)
            [20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jmrt-base</name>
        <package-name>jmrt-base-x86-64-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Juniper Malware Removal Tool (JMRT)
            [1.0.0+20220816.180901_builder_junos_204_r3_s4]
        </comment>
    </package-information>
    <package-information>
        <name>jinsight</name>
        <package-name>jinsight-x86-32-20.4R3-S4.8</package-name>
        <comment>JUNOS J-Insight [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jfirmware</name>
        <package-name>jfirmware-x86-32-20.4R3-S4.8</package-name>
        <comment>JUNOS jfirmware [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jdocs</name>
        <package-name>jdocs-x86-32-20220816.180901_builder_junos_204_r3_s4</package-name>
        <comment>JUNOS Online Documentation [20220816.180901_builder_junos_204_r3_s4]</comment>
    </package-information>
    <package-information>
        <name>jail-runtime</name>
        <package-name>jail-runtime-x86-32-20220621.0f17a06_builder_stable_11-204ab</package-name>
        <comment>JUNOS jail runtime [20220621.0f17a06_builder_stable_11-204ab]</comment>
    </package-information>
</software-information>`;

export function getSoftwareInformation(device) {
  return renderDevicePayload(PAYLOAD, device);
}
