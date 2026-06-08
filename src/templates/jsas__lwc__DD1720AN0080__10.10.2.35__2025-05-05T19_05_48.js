import { renderDevicePayload } from './render-device-payload.js';

// Generated from mock_responses/jsas__lwc__DD1720AN0080__10.10.2.35__2025-05-05T19_05_48.xml
const PAYLOAD = String.raw`<?xml version="1.0"?>
<lwc>
    <metadataver>1.0.2</metadataver>
    <datasetver>1.0.1</datasetver>
    <metadata>
        <jsasuniqueid>003b639f-1b73-53df-f3f9-1dd136a1e208-993</jsasuniqueid>
        <sequenceId>003b639f-1b73-53df-f3f9-1dd136a1e208-31</sequenceId>
        <customer_id>00000002038</customer_id>
        <site_id>00000002038</site_id>
        <sfdcuniqueid>NA</sfdcuniqueid>
        <target-address>10.10.2.35</target-address>
        <jobid>x111111</jobid>
        <group>JSAS Bastion Targets All Good-00000002038</group>
        <nfx-serial-number>DD1720AN0080</nfx-serial-number>
        <data-collection-time-utc>2025-05-05T19:05:48.661Z</data-collection-time-utc>
        <commands-info>
            <count>20</count>
            <list>
                <name>show version</name>
                <name>show interfaces lo0.0 terse</name>
                <name>show chassis hardware</name>
                <name>show chassis routing-engine</name>
                <name>show chassis alarms</name>
                <name>show interfaces descriptions</name>
                <name>show system commit</name>
                <name>show chassis hardware extensive</name>
                <name>show interfaces terse</name>
                <name>show system core-dumps</name>
                <name>show system uptime</name>
                <name>show ospf neighbor</name>
                <name>show isis adjacency</name>
                <name>show chassis fpc</name>
                <name>show rsvp neighbor</name>
                <name>show vrrp detail</name>
                <name>show system buffers</name>
                <name>show bgp summary</name>
                <name>show system license</name>
                <name>file list detail var log</name>
            </list>
        </commands-info>
        <redis-data-handoff-keys>
            <lambda>
                <lname>junos_worker</lname>
                <rkey>
                    DD1720AN0080__003b639f-1b73-53df-f3f9-1dd136a1e208JSAS_Bastion_Targets_All_Good-00000002038__80e58d81-b6a6-455f-91b1-32b871f3af6e__10.10.2.35__junos_worker
                </rkey>
            </lambda>
            <lambda>
                <lname>mask</lname>
                <rkey>
                    DD1720AN0080__003b639f-1b73-53df-f3f9-1dd136a1e208JSAS_Bastion_Targets_All_Good-00000002038__80e58d81-b6a6-455f-91b1-32b871f3af6e__10.10.2.35__mask
                </rkey>
            </lambda>
            <lambda>
                <lname>dedup</lname>
                <rkey>
                    DD1720AN0080__003b639f-1b73-53df-f3f9-1dd136a1e208JSAS_Bastion_Targets_All_Good-00000002038__80e58d81-b6a6-455f-91b1-32b871f3af6e__10.10.2.35__dedup
                </rkey>
            </lambda>
        </redis-data-handoff-keys>
        <loopback>192.168.10.24</loopback>
        <routing_engine_name>RE0</routing_engine_name>
        <chassis_serial_number>JN12680DCJCB</chassis_serial_number>
        <software_version_string>20.4R3-S4.8</software_version_string>
        <software_version_number>20.4R3-S4.8</software_version_number>
        <host_name>cdo-MX10003-r002</host_name>
        <hardware_model>mx10003</hardware_model>
    </metadata>
    <dataset>
        <data>
            <command-header>
                <command>show version</command>
            </command-header>
            <lwc-output>
                <software-information>
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
                </software-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show interfaces lo0.0 terse</command>
            </command-header>
            <lwc-output>
                <interface-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-interface" junos:style="terse">
                    <logical-interface>
                        <name>lo0.0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <filter-information/>
                        <address-family>
                            <address-family-name>inet</address-family-name>
                            <interface-address>
                                <ifa-local>192.168.10.24</ifa-local>
                                <ifa-destination junos:emit="emit">0/0</ifa-destination>
                            </interface-address>
                        </address-family>
                        <address-family>
                            <address-family-name>iso</address-family-name>
                            <interface-address>
                                <ifa-local junos:emit="emit">49.0001.0192.1680.1024</ifa-local>
                            </interface-address>
                        </address-family>
                        <address-family>
                            <address-family-name>inet6</address-family-name>
                            <interface-address>
                                <ifa-local>fd9f:e4af:708f:9466::1:24</ifa-local>
                                <ifa-destination junos:emit="emit"/>
                            </interface-address>
                            <interface-address>
                                <ifa-local>fe80::f24b:3a0f:fcee:fde6</ifa-local>
                                <ifa-destination junos:emit="emit"/>
                            </interface-address>
                        </address-family>
                    </logical-interface>
                </interface-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show chassis hardware</command>
            </command-header>
            <lwc-output>
                <chassis-inventory xmlns="http://xml.juniper.net/junos/20.4R0/junos-chassis">
                    <chassis junos:style="inventory">
                        <name>Chassis</name>
                        <serial-number>JN12680DCJCB</serial-number>
                        <description>JNP10003 [MX10003]</description>
                        <clei-code>INM4F00ERA</clei-code>
                        <model-number>JNP10003-CHAS</model-number>
                        <chassis-module>
                            <name>Midplane</name>
                            <version>REV 12</version>
                            <part-number>750-074276</part-number>
                            <serial-number>CAKR7205</serial-number>
                            <description>Midplane 2</description>
                            <clei-code>INM4F00ERA</clei-code>
                            <model-number>JNP10003-CHAS</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>Routing Engine 0</name>
                            <part-number>BUILTIN</part-number>
                            <serial-number>BUILTIN</serial-number>
                            <description>RE-S-1600x8</description>
                        </chassis-module>
                        <chassis-module>
                            <name>Routing Engine 1</name>
                            <part-number>BUILTIN</part-number>
                            <serial-number>BUILTIN</serial-number>
                            <description>RE-S-1600x8</description>
                        </chassis-module>
                        <chassis-module>
                            <name>CB 0</name>
                            <version>REV 31</version>
                            <part-number>750-067071</part-number>
                            <serial-number>CAKN1403</serial-number>
                            <description>Control Board</description>
                            <clei-code>INCPABGAAA</clei-code>
                            <model-number>JNP10003-RE1</model-number>
                            <chassis-sub-module>
                                <name>Mezz</name>
                                <version>REV 16</version>
                                <part-number>711-066896</part-number>
                                <serial-number>CAKN4322</serial-number>
                                <description>Control Mezz Board</description>
                            </chassis-sub-module>
                        </chassis-module>
                        <chassis-module>
                            <name>CB 1</name>
                            <version>REV 31</version>
                            <part-number>750-067071</part-number>
                            <serial-number>CAKN1398</serial-number>
                            <description>Control Board</description>
                            <clei-code>INCPABGAAA</clei-code>
                            <model-number>JNP10003-RE1</model-number>
                            <chassis-sub-module>
                                <name>Mezz</name>
                                <version>REV 16</version>
                                <part-number>711-066896</part-number>
                                <serial-number>CAKN4293</serial-number>
                                <description>Control Mezz Board</description>
                            </chassis-sub-module>
                        </chassis-module>
                        <chassis-module>
                            <name>FPC 0</name>
                            <version>REV 22</version>
                            <part-number>750-066879</part-number>
                            <serial-number>CAKF1119</serial-number>
                            <description>LC2103</description>
                            <clei-code>INUIACFAAA</clei-code>
                            <model-number>JNP10003-LC2103</model-number>
                            <chassis-sub-module>
                                <name>CPU</name>
                                <part-number>BUILTIN</part-number>
                                <serial-number>BUILTIN</serial-number>
                                <description>SMPC PMB</description>
                            </chassis-sub-module>
                            <chassis-sub-module>
                                <name>PIC 0</name>
                                <part-number>BUILTIN</part-number>
                                <serial-number>BUILTIN</serial-number>
                                <description>6xQSFPP</description>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 0</name>
                                    <version>REV 01</version>
                                    <part-number>740-032986</part-number>
                                    <serial-number>QC310795</serial-number>
                                    <description>QSFP+-40G-SR4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 1</name>
                                    <version>REV 01</version>
                                    <part-number>740-054053</part-number>
                                    <serial-number>XYN0E66</serial-number>
                                    <description>QSFP+-4X10G-SR</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 2</name>
                                    <version>REV 01</version>
                                    <part-number>740-054053</part-number>
                                    <serial-number>XYN036S</serial-number>
                                    <description>QSFP+-4X10G-SR</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 3</name>
                                    <version>REV 01</version>
                                    <part-number>740-054053</part-number>
                                    <serial-number>XYN0369</serial-number>
                                    <description>QSFP+-4X10G-SR</description>
                                </chassis-sub-sub-module>
                            </chassis-sub-module>
                            <chassis-sub-module>
                                <name>PIC 1</name>
                                <version>REV 23</version>
                                <part-number>750-068806</part-number>
                                <serial-number>CAKC7076</serial-number>
                                <description>MIC1</description>
                                <clei-code>INUIACLAAA</clei-code>
                                <model-number>JNP-MIC1</model-number>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 0</name>
                                    <version>REV 01</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>UUE1CY3</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 4</name>
                                    <version>REV 02</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>1AMP23260EA</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 5</name>
                                    <version>REV 02</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>1AMP25360NG</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 6</name>
                                    <version>REV 02</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>1FCP22520PC</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 8</name>
                                    <version>REV 01</version>
                                    <part-number>740-061405</part-number>
                                    <serial-number>1F1CQ1A6161Y4</serial-number>
                                    <description>QSFP-100G-SR4-T2</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 9</name>
                                    <version>REV 01</version>
                                    <part-number>740-061405</part-number>
                                    <serial-number>1ECQ1603083</serial-number>
                                    <description>QSFP-100G-SR4-T2</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 10</name>
                                    <version>REV 01</version>
                                    <part-number>740-096178</part-number>
                                    <serial-number>1W2CQGA53701X</serial-number>
                                    <description>QSFP-100G-LR</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 11</name>
                                    <version>REV 01</version>
                                    <part-number>740-096178</part-number>
                                    <serial-number>1W2CQGA53701F</serial-number>
                                    <description>QSFP-100G-LR</description>
                                </chassis-sub-sub-module>
                            </chassis-sub-module>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 0</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520004</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 1</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520436</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 2</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520007</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 3</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520502</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 4</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520016</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 5</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520085</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 0</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKN1849</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 1</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKN1850</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 2</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKG4387</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 3</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKN1824</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                        </chassis-module>
                    </chassis>
                </chassis-inventory>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show chassis routing-engine</command>
            </command-header>
            <lwc-output>
                <route-engine-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-chassis">
                    <route-engine>
                        <slot>0</slot>
                        <mastership-state>master</mastership-state>
                        <mastership-priority>master</mastership-priority>
                        <status>OK</status>
                        <temperature junos:celsius="30">30 degrees C / 86 degrees F</temperature>
                        <cpu-temperature junos:celsius="38">38 degrees C / 100 degrees F</cpu-temperature>
                        <memory-dram-size>49103 MB</memory-dram-size>
                        <memory-installed-size>(49152 MB installed)</memory-installed-size>
                        <memory-buffer-utilization>4</memory-buffer-utilization>
                        <cpu-user>0</cpu-user>
                        <cpu-background>0</cpu-background>
                        <cpu-system>0</cpu-system>
                        <cpu-interrupt>0</cpu-interrupt>
                        <cpu-idle>100</cpu-idle>
                        <cpu-user1>0</cpu-user1>
                        <cpu-background1>0</cpu-background1>
                        <cpu-system1>0</cpu-system1>
                        <cpu-interrupt1>0</cpu-interrupt1>
                        <cpu-idle1>100</cpu-idle1>
                        <cpu-user2>0</cpu-user2>
                        <cpu-background2>0</cpu-background2>
                        <cpu-system2>0</cpu-system2>
                        <cpu-interrupt2>0</cpu-interrupt2>
                        <cpu-idle2>99</cpu-idle2>
                        <cpu-user3>0</cpu-user3>
                        <cpu-background3>0</cpu-background3>
                        <cpu-system3>0</cpu-system3>
                        <cpu-interrupt3>0</cpu-interrupt3>
                        <cpu-idle3>99</cpu-idle3>
                        <model>RE-S-1600x8</model>
                        <start-time junos:seconds="1742404202">2025-03-19 10:10:02 PDT</start-time>
                        <up-time junos:seconds="4067729">47 days, 1 hour, 55 minutes, 29 seconds</up-time>
                        <last-reboot-reason>0x1000:reboot due to panic</last-reboot-reason>
                        <load-average-one>0.31</load-average-one>
                        <load-average-five>0.21</load-average-five>
                        <load-average-fifteen>0.18</load-average-fifteen>
                    </route-engine>
                    <route-engine>
                        <slot>1</slot>
                        <mastership-state>backup</mastership-state>
                        <mastership-priority>backup (default)</mastership-priority>
                        <status>OK</status>
                        <temperature junos:celsius="43">43 degrees C / 109 degrees F</temperature>
                        <cpu-temperature junos:celsius="43">43 degrees C / 109 degrees F</cpu-temperature>
                        <memory-dram-size>49103 MB</memory-dram-size>
                        <memory-installed-size>(49152 MB installed)</memory-installed-size>
                        <memory-buffer-utilization>4</memory-buffer-utilization>
                        <cpu-user>0</cpu-user>
                        <cpu-background>0</cpu-background>
                        <cpu-system>0</cpu-system>
                        <cpu-interrupt>0</cpu-interrupt>
                        <cpu-idle>100</cpu-idle>
                        <model>RE-S-1600x8</model>
                        <start-time junos:seconds="1718227909">2024-06-12 14:31:49 PDT</start-time>
                        <up-time junos:seconds="28244012">326 days, 21 hours, 33 minutes, 32 seconds</up-time>
                        <last-reboot-reason>0x1:power cycle/failure</last-reboot-reason>
                        <load-average-one>0.16</load-average-one>
                        <load-average-five>0.16</load-average-five>
                        <load-average-fifteen>0.14</load-average-fifteen>
                    </route-engine>
                </route-engine-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show chassis alarms</command>
            </command-header>
            <lwc-output>
                <alarm-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-alarm">
                    <alarm-summary>
                        <active-alarm-count>3</active-alarm-count>
                    </alarm-summary>
                    <alarm-detail>
                        <alarm-time junos:seconds="1742404347">2025-03-19 10:12:27 PDT</alarm-time>
                        <alarm-class>Major</alarm-class>
                        <alarm-description>PEM 4 Not Powered</alarm-description>
                        <alarm-short-description>PEM 4 No Power</alarm-short-description>
                        <alarm-type>Chassis</alarm-type>
                    </alarm-detail>
                    <alarm-detail>
                        <alarm-time junos:seconds="1742404347">2025-03-19 10:12:27 PDT</alarm-time>
                        <alarm-class>Major</alarm-class>
                        <alarm-description>PEM 2 Not Powered</alarm-description>
                        <alarm-short-description>PEM 2 No Power</alarm-short-description>
                        <alarm-type>Chassis</alarm-type>
                    </alarm-detail>
                    <alarm-detail>
                        <alarm-time junos:seconds="1742404347">2025-03-19 10:12:27 PDT</alarm-time>
                        <alarm-class>Major</alarm-class>
                        <alarm-description>PEM 0 Not Powered</alarm-description>
                        <alarm-short-description>PEM 0 No Power</alarm-short-description>
                        <alarm-type>Chassis</alarm-type>
                    </alarm-detail>
                </alarm-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show interfaces descriptions</command>
            </command-header>
            <lwc-output>
                <lwc-unavailable/>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show system commit</command>
            </command-header>
            <lwc-output>
                <commit-information>
                    <commit-history>
                        <sequence-number>0</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1746466714">2025-05-05 10:38:34 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>1</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1689020065">2023-07-10 13:14:25 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>2</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1675084814">2023-01-30 05:20:14 PST</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>3</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1675084738">2023-01-30 05:18:58 PST</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>4</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1666209126">2022-10-19 12:52:06 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>5</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1666208874">2022-10-19 12:47:54 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>6</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1666192423">2022-10-19 08:13:43 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>7</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1666116069">2022-10-18 11:01:09 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>8</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665431782">2022-10-10 12:56:22 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>9</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665178080">2022-10-07 14:28:00 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>10</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665165691">2022-10-07 11:01:31 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>11</sequence-number>
                        <user>root</user>
                        <client>other</client>
                        <date-time junos:seconds="1665164631">2022-10-07 10:43:51 PDT</date-time>
                    </commit-history>
                    <commit-history>
                        <sequence-number>12</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665152008">2022-10-07 07:13:28 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>13</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665142161">2022-10-07 04:29:21 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>14</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665141310">2022-10-07 04:15:10 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>15</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665140831">2022-10-07 04:07:11 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>16</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665138528">2022-10-07 03:28:48 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>17</sequence-number>
                        <user>root</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665119043">2022-10-06 22:04:03 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>18</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1665096132">2022-10-06 15:42:12 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>19</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1637598771">2021-11-22 08:32:51 PST</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>20</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1634067373">2021-10-12 12:36:13 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>21</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1598365392">2020-08-25 07:23:12 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>22</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1598307466">2020-08-24 15:17:46 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>23</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1596059182">2020-07-29 14:46:22 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>24</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1595971409">2020-07-28 14:23:29 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>25</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1595961539">2020-07-28 11:38:59 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>26</sequence-number>
                        <user>jalapeno</user>
                        <client>junoscript</client>
                        <date-time junos:seconds="1594649608">2020-07-13 07:13:28 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Deleting AI-Scripts installation</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>27</sequence-number>
                        <user>jalapeno</user>
                        <client>junoscript</client>
                        <date-time junos:seconds="1594649603">2020-07-13 07:13:23 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Deleting AI-Scripts installation</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>28</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592248700">2020-06-15 12:18:20 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>29</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592248659">2020-06-15 12:17:39 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>30</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592248490">2020-06-15 12:14:50 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>31</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592248439">2020-06-15 12:13:59 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>32</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592245436">2020-06-15 11:23:56 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>33</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592245096">2020-06-15 11:18:16 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>34</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592244635">2020-06-15 11:10:35 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>35</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592243393">2020-06-15 10:49:53 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>36</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592243168">2020-06-15 10:46:08 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>37</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592243046">2020-06-15 10:44:06 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>38</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1592242980">2020-06-15 10:43:00 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>39</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1587743669">2020-04-24 08:54:29 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>40</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1572366682">2019-10-29 09:31:22 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>41</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1572366678">2019-10-29 09:31:18 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Commit Issued by Service Now.</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>42</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1572366605">2019-10-29 09:30:05 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Commit Issued by Service Now.</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>43</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1571855485">2019-10-23 11:31:25 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>44</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1571415767">2019-10-18 09:22:47 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>install op script jin.slax onto device</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>45</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1571415517">2019-10-18 09:18:37 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Install AI-Scripts group configuration onto device</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>46</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1558041057">2019-05-16 14:10:57 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Install init configuration onto device</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>47</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1557970072">2019-05-15 18:27:52 PDT</date-time>
                        <comment>commit synchronize</comment>
                        <log>Install init configuration onto device</log>
                    </commit-history>
                    <commit-history>
                        <sequence-number>48</sequence-number>
                        <user>jalapeno</user>
                        <client>cli</client>
                        <date-time junos:seconds="1557865779">2019-05-14 13:29:39 PDT</date-time>
                        <comment>commit synchronize</comment>
                    </commit-history>
                    <commit-history>
                        <sequence-number>49</sequence-number>
                        <user>jalapeno</user>
                        <client>netconf</client>
                        <date-time junos:seconds="1552090100">2019-03-08 16:08:20 PST</date-time>
                        <comment>commit synchronize</comment>
                        <log>Install init configuration onto device</log>
                    </commit-history>
                </commit-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show chassis hardware extensive</command>
            </command-header>
            <lwc-output>
                <chassis-inventory xmlns="http://xml.juniper.net/junos/20.4R0/junos-chassis">
                    <chassis junos:style="inventory">
                        <name>Chassis</name>
                        <serial-number>JN12680DCJCB</serial-number>
                        <description>JNP10003 [MX10003]</description>
                        <clei-code>INM4F00ERA</clei-code>
                        <model-number>JNP10003-CHAS</model-number>
                        <i2c-information>
                            <jedec-code>0x7fb0</jedec-code>
                            <eeprom-version>0x02</eeprom-version>
                            <part-number/>
                            <serial-number>JN12680DCJCB</serial-number>
                            <assembly-identifier>0x059b</assembly-identifier>
                            <assembly-version>01.12</assembly-version>
                            <manufacture-date>04-04-2018</manufacture-date>
                            <assembly-flags>0x00</assembly-flags>
                            <i2c-version/>
                            <clei-code>INM4F00ERA</clei-code>
                            <i2c-identifier>JNP10003 [MX10003]</i2c-identifier>
                            <model-number>JNP10003-CHAS</model-number>
                            <board-information-record>Address 0x00: ad 01 10 00 ec 38 73 05 30 00 ff ff ff ff ff ff
                            </board-information-record>
                            <i2c-data>Address 0x00: 7f b0 02 fe 05 9b 01 0c 00 45 56 20 31 32 00 00Address 0x10: 00 00
                                00 00 00 35 30 2d 30 37 34 32 37 36 00 00Address 0x20: 4a 4e 31 32 36 38 30 44 43 4a 43
                                42 00 04 04 07Address 0x30: e2 ff ff ff ad 01 10 00 ec 38 73 05 30 00 ff ffAddress 0x40:
                                ff ff ff ff 01 49 4e 4d 34 46 30 30 45 52 41 4aAddress 0x50: 4e 50 31 30 30 30 33 2d 43
                                48 41 53 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 42 00 ff ff ff ff ff ff ffAddress
                                0x70: ff ff ff 38 4a 4e 31 32 36 38 30 44 43 4a 43 42
                            </i2c-data>
                        </i2c-information>
                        <chassis-module>
                            <name>Midplane</name>
                            <version>REV 12</version>
                            <part-number>750-074276</part-number>
                            <serial-number>CAKR7205</serial-number>
                            <description>Midplane 2</description>
                            <clei-code>INM4F00ERA</clei-code>
                            <model-number>JNP10003-CHAS</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>750-074276</part-number>
                                <serial-number>CAKR7205</serial-number>
                                <assembly-identifier>0x0ca6</assembly-identifier>
                                <assembly-version>01.12</assembly-version>
                                <manufacture-date>04-04-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 12</i2c-version>
                                <clei-code>INM4F00ERA</clei-code>
                                <i2c-identifier>Midplane 2</i2c-identifier>
                                <model-number>JNP10003-CHAS</model-number>
                                <board-information-record>Address 0x00: ad 01 10 00 ec 38 73 05 30 00 ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c a6 01 0c 52 45 56 20 31 32 00 00Address 0x10: 00
                                    00 00 00 37 35 30 2d 30 37 34 32 37 36 00 00Address 0x20: 53 2f 4e 20 43 41 4b 52 37
                                    32 30 35 00 04 04 07Address 0x30: e2 ff ff ff ad 01 10 00 ec 38 73 05 30 00 ff
                                    ffAddress 0x40: ff ff ff ff 01 49 4e 4d 34 46 30 30 45 52 41 4aAddress 0x50: 4e 50
                                    31 30 30 30 33 2d 43 48 41 53 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 42 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 38 4a 4e 31 32 36 38 30 44 43 4a 43 42
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>Routing Engine 0</name>
                            <part-number>BUILTIN</part-number>
                            <serial-number>BUILTIN</serial-number>
                            <description>RE-S-1600x8</description>
                            <chassis-re-disk-module>
                                <name>vtbd0</name>
                                <disk-size>17408</disk-size>
                                <model/>
                                <serial-number/>
                                <description>Virtio Block Disk</description>
                            </chassis-re-disk-module>
                            <chassis-re-disk-module>
                                <name>vtbd1</name>
                                <disk-size>15360</disk-size>
                                <model/>
                                <serial-number/>
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
                            <name>Routing Engine 1</name>
                            <part-number>BUILTIN</part-number>
                            <serial-number>BUILTIN</serial-number>
                            <description>RE-S-1600x8</description>
                            <chassis-re-disk-module>
                                <name>vtbd0</name>
                                <disk-size>17408</disk-size>
                                <model/>
                                <serial-number/>
                                <description>Virtio Block Disk</description>
                            </chassis-re-disk-module>
                            <chassis-re-disk-module>
                                <name>vtbd1</name>
                                <disk-size>15360</disk-size>
                                <model/>
                                <serial-number/>
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
                            <version>REV 31</version>
                            <part-number>750-067071</part-number>
                            <serial-number>CAKN1403</serial-number>
                            <description>Control Board</description>
                            <clei-code>INCPABGAAA</clei-code>
                            <model-number>JNP10003-RE1</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>750-067071</part-number>
                                <serial-number>CAKN1403</serial-number>
                                <assembly-identifier>0x0ca7</assembly-identifier>
                                <assembly-version>02.31</assembly-version>
                                <manufacture-date>03-27-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 31</i2c-version>
                                <clei-code>INCPABGAAA</clei-code>
                                <i2c-identifier>Control Board</i2c-identifier>
                                <model-number>JNP10003-RE1</model-number>
                                <board-information-record>Address 0x00: ad 01 00 04 f0 4b 3a ee fd e4 ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c a7 02 1f 52 45 56 20 33 31 00 00Address 0x10: 00
                                    00 00 00 37 35 30 2d 30 36 37 30 37 31 00 00Address 0x20: 53 2f 4e 20 43 41 4b 4e 31
                                    34 30 33 00 1b 03 07Address 0x30: e2 ff ff ff ad 01 00 04 f0 4b 3a ee fd e4 ff
                                    ffAddress 0x40: ff ff ff ff 01 49 4e 43 50 41 42 47 41 41 41 4aAddress 0x50: 4e 50
                                    31 30 30 30 33 2d 52 45 31 00 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 43 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 03 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                            <chassis-sub-module>
                                <name>Mezz</name>
                                <version>REV 16</version>
                                <part-number>711-066896</part-number>
                                <serial-number>CAKN4322</serial-number>
                                <description>Control Mezz Board</description>
                                <i2c-information>
                                    <jedec-code>0x7fb0</jedec-code>
                                    <eeprom-version>0x01</eeprom-version>
                                    <part-number>711-066896</part-number>
                                    <serial-number>CAKN4322</serial-number>
                                    <assembly-identifier>0x0ca8</assembly-identifier>
                                    <assembly-version>02.16</assembly-version>
                                    <manufacture-date>03-24-2018</manufacture-date>
                                    <assembly-flags>0x00</assembly-flags>
                                    <i2c-version>REV 16</i2c-version>
                                    <i2c-identifier>Control Mezz Board</i2c-identifier>
                                    <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                        ff
                                    </board-information-record>
                                    <i2c-data>Address 0x00: 7f b0 01 fe 0c a8 02 10 52 45 56 20 31 36 00 00Address 0x10:
                                        00 00 00 00 37 31 31 2d 30 36 36 38 39 36 00 00Address 0x20: 53 2f 4e 20 43 41
                                        4b 4e 34 33 32 32 00 18 03 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff
                                        ff ff ff ffAddress 0x40: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ffAddress
                                        0x50: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ffAddress 0x60: ff ff ff ff
                                        ff ff ff ff ff ff ff ff ff ff ff ffAddress 0x70: ff ff ff ff ff ff ff ff ff ff
                                        ff ff ff ff ff ff
                                    </i2c-data>
                                </i2c-information>
                            </chassis-sub-module>
                        </chassis-module>
                        <chassis-module>
                            <name>CB 1</name>
                            <version>REV 31</version>
                            <part-number>750-067071</part-number>
                            <serial-number>CAKN1398</serial-number>
                            <description>Control Board</description>
                            <clei-code>INCPABGAAA</clei-code>
                            <model-number>JNP10003-RE1</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>750-067071</part-number>
                                <serial-number>CAKN1398</serial-number>
                                <assembly-identifier>0x0ca7</assembly-identifier>
                                <assembly-version>02.31</assembly-version>
                                <manufacture-date>03-27-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 31</i2c-version>
                                <clei-code>INCPABGAAA</clei-code>
                                <i2c-identifier>Control Board</i2c-identifier>
                                <model-number>JNP10003-RE1</model-number>
                                <board-information-record>Address 0x00: ad 01 00 04 f0 4b 3a ee f9 1c ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c a7 02 1f 52 45 56 20 33 31 00 00Address 0x10: 00
                                    00 00 00 37 35 30 2d 30 36 37 30 37 31 00 00Address 0x20: 53 2f 4e 20 43 41 4b 4e 31
                                    33 39 38 00 1b 03 07Address 0x30: e2 ff ff ff ad 01 00 04 f0 4b 3a ee f9 1c ff
                                    ffAddress 0x40: ff ff ff ff 01 49 4e 43 50 41 42 47 41 41 41 4aAddress 0x50: 4e 50
                                    31 30 30 30 33 2d 52 45 31 00 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 43 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 03 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                            <chassis-sub-module>
                                <name>Mezz</name>
                                <version>REV 16</version>
                                <part-number>711-066896</part-number>
                                <serial-number>CAKN4293</serial-number>
                                <description>Control Mezz Board</description>
                                <i2c-information>
                                    <jedec-code>0x7fb0</jedec-code>
                                    <eeprom-version>0x01</eeprom-version>
                                    <part-number>711-066896</part-number>
                                    <serial-number>CAKN4293</serial-number>
                                    <assembly-identifier>0x0ca8</assembly-identifier>
                                    <assembly-version>02.16</assembly-version>
                                    <manufacture-date>03-25-2018</manufacture-date>
                                    <assembly-flags>0x00</assembly-flags>
                                    <i2c-version>REV 16</i2c-version>
                                    <i2c-identifier>Control Mezz Board</i2c-identifier>
                                    <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                        ff
                                    </board-information-record>
                                    <i2c-data>Address 0x00: 7f b0 01 fe 0c a8 02 10 52 45 56 20 31 36 00 00Address 0x10:
                                        00 00 00 00 37 31 31 2d 30 36 36 38 39 36 00 00Address 0x20: 53 2f 4e 20 43 41
                                        4b 4e 34 32 39 33 00 19 03 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff
                                        ff ff ff ffAddress 0x40: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ffAddress
                                        0x50: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ffAddress 0x60: ff ff ff ff
                                        ff ff ff ff ff ff ff ff ff ff ff ffAddress 0x70: ff ff ff ff ff ff ff ff ff ff
                                        ff ff ff ff ff ff
                                    </i2c-data>
                                </i2c-information>
                            </chassis-sub-module>
                        </chassis-module>
                        <chassis-module>
                            <name>FPC 0</name>
                            <version>REV 22</version>
                            <part-number>750-066879</part-number>
                            <serial-number>CAKF1119</serial-number>
                            <description>LC2103</description>
                            <clei-code>INUIACFAAA</clei-code>
                            <model-number>JNP10003-LC2103</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>750-066879</part-number>
                                <serial-number>CAKF1119</serial-number>
                                <assembly-identifier>0x0ca9</assembly-identifier>
                                <assembly-version>01.22</assembly-version>
                                <manufacture-date>03-19-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 22</i2c-version>
                                <clei-code>INUIACFAAA</clei-code>
                                <i2c-identifier>LC2103</i2c-identifier>
                                <model-number>JNP10003-LC2103</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 0c a9 01 16 52 45 56 20 32 32 00 00Address 0x10: 00
                                    00 00 00 37 35 30 2d 30 36 36 38 37 39 00 00Address 0x20: 53 2f 4e 20 43 41 4b 46 31
                                    31 31 39 00 13 03 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 49 4e 55 49 41 43 46 41 41 41 4aAddress 0x50: 4e 50
                                    31 30 30 30 33 2d 4c 43 32 31 30 33 00 00Address 0x60: 00 00 00 00 00 00 41 41 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 99 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                            <chassis-sub-module>
                                <name>CPU</name>
                                <part-number>BUILTIN</part-number>
                                <serial-number>BUILTIN</serial-number>
                                <description>SMPC PMB</description>
                                <i2c-information>
                                    <jedec-code>0x0000</jedec-code>
                                    <eeprom-version>0x00</eeprom-version>
                                    <part-number>BUILTIN</part-number>
                                    <serial-number>BUILTIN</serial-number>
                                    <assembly-identifier>0x0c22</assembly-identifier>
                                    <assembly-version>00.00</assembly-version>
                                    <manufacture-date>00-00-0000</manufacture-date>
                                    <assembly-flags>0x00</assembly-flags>
                                    <i2c-version/>
                                    <i2c-identifier>SMPC PMB</i2c-identifier>
                                    <board-information-record>Address 0x00: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
                                        00
                                    </board-information-record>
                                    <i2c-data>Address 0x00: 00 00 00 00 0c 22 00 00 00 00 00 00 00 00 00 00Address 0x10:
                                        00 00 00 00 42 55 49 4c 54 49 4e 00 25 73 3a 20Address 0x20: 42 55 49 4c 54 49
                                        4e 00 25 73 3a 20 00 00 00 00Address 0x30: 00 00 00 00 00 00 00 00 00 00 00 00
                                        00 00 00 00Address 0x40: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00Address
                                        0x50: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00Address 0x60: 00 00 00 00
                                        00 00 00 00 00 00 00 00 00 00 00 00Address 0x70: 00 00 00 00 00 00 00 00 00 00
                                        00 00 00 00 00 00
                                    </i2c-data>
                                </i2c-information>
                            </chassis-sub-module>
                            <chassis-sub-module>
                                <name>PIC 0</name>
                                <part-number>BUILTIN</part-number>
                                <serial-number>BUILTIN</serial-number>
                                <description>6xQSFPP</description>
                                <i2c-information>
                                    <jedec-code>0x0000</jedec-code>
                                    <eeprom-version>0x00</eeprom-version>
                                    <part-number>BUILTIN</part-number>
                                    <serial-number>BUILTIN</serial-number>
                                    <assembly-identifier>0x0acc</assembly-identifier>
                                    <assembly-version>00.00</assembly-version>
                                    <manufacture-date>00-00-0000</manufacture-date>
                                    <assembly-flags>0x00</assembly-flags>
                                    <i2c-version/>
                                    <i2c-identifier>6x QSFPP 40GE PIC</i2c-identifier>
                                    <board-information-record>Address 0x00: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
                                        00
                                    </board-information-record>
                                    <i2c-data>Address 0x00: 00 00 00 00 0a cc 00 00 00 00 00 00 00 00 00 00Address 0x10:
                                        00 00 00 00 42 55 49 4c 54 49 4e 00 25 73 3a 20Address 0x20: 42 55 49 4c 54 49
                                        4e 00 25 73 3a 20 00 00 00 00Address 0x30: 00 00 00 00 00 00 00 00 00 00 00 00
                                        00 00 00 00Address 0x40: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00Address
                                        0x50: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00Address 0x60: 00 00 00 00
                                        00 00 00 00 00 00 00 00 00 00 00 00Address 0x70: 00 00 00 00 00 00 00 00 b7 79
                                        4b 0a 43 40 f0 96
                                    </i2c-data>
                                </i2c-information>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 0</name>
                                    <version>REV 01</version>
                                    <part-number>740-032986</part-number>
                                    <serial-number>QC310795</serial-number>
                                    <description>QSFP+-40G-SR4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 1</name>
                                    <version>REV 01</version>
                                    <part-number>740-054053</part-number>
                                    <serial-number>XYN0E66</serial-number>
                                    <description>QSFP+-4X10G-SR</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 2</name>
                                    <version>REV 01</version>
                                    <part-number>740-054053</part-number>
                                    <serial-number>XYN036S</serial-number>
                                    <description>QSFP+-4X10G-SR</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 3</name>
                                    <version>REV 01</version>
                                    <part-number>740-054053</part-number>
                                    <serial-number>XYN0369</serial-number>
                                    <description>QSFP+-4X10G-SR</description>
                                </chassis-sub-sub-module>
                            </chassis-sub-module>
                            <chassis-sub-module>
                                <name>PIC 1</name>
                                <version>REV 23</version>
                                <part-number>750-068806</part-number>
                                <serial-number>CAKC7076</serial-number>
                                <description>MIC1</description>
                                <clei-code>INUIACLAAA</clei-code>
                                <model-number>JNP-MIC1</model-number>
                                <i2c-information>
                                    <jedec-code>0x7fb0</jedec-code>
                                    <eeprom-version>0x02</eeprom-version>
                                    <part-number>750-068806</part-number>
                                    <serial-number>CAKC7076</serial-number>
                                    <assembly-identifier>0x0ace</assembly-identifier>
                                    <assembly-version>01.23</assembly-version>
                                    <manufacture-date>12-25-2017</manufacture-date>
                                    <assembly-flags>0x00</assembly-flags>
                                    <i2c-version>REV 23</i2c-version>
                                    <clei-code>INUIACLAAA</clei-code>
                                    <i2c-identifier>12x QSFP28 100GE TIC</i2c-identifier>
                                    <model-number>JNP-MIC1</model-number>
                                    <board-information-record>Address 0x00: 34 01 08 08 09 ff ff ff ff ff ff ff ff ff ff
                                        ff
                                    </board-information-record>
                                    <i2c-data>Address 0x00: 7f b0 02 fe 0a ce 01 17 52 45 56 20 32 33 00 00Address 0x10:
                                        00 00 00 00 37 35 30 2d 30 36 38 38 30 36 00 00Address 0x20: 53 2f 4e 20 43 41
                                        4b 43 37 30 37 36 00 19 0c 07Address 0x30: e1 ff ff ff 34 01 08 08 09 ff ff ff
                                        ff ff ff ffAddress 0x40: ff ff ff ff 01 49 4e 55 49 41 43 4c 41 41 41 4aAddress
                                        0x50: 4e 50 2d 4d 49 43 31 00 00 00 00 00 00 00 00 00Address 0x60: 00 00 00 00
                                        00 00 41 41 00 ff ff ff ff ff ff ffAddress 0x70: ff ff ff 60 00 00 00 00 b7 79
                                        4b 0a 43 40 f0 9c
                                    </i2c-data>
                                </i2c-information>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 0</name>
                                    <version>REV 01</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>UUE1CY3</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 4</name>
                                    <version>REV 02</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>1AMP23260EA</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 5</name>
                                    <version>REV 02</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>1AMP25360NG</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 6</name>
                                    <version>REV 02</version>
                                    <part-number>740-056705</part-number>
                                    <serial-number>1FCP22520PC</serial-number>
                                    <description>QSFP+40GE-LX4</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 8</name>
                                    <version>REV 01</version>
                                    <part-number>740-061405</part-number>
                                    <serial-number>1F1CQ1A6161Y4</serial-number>
                                    <description>QSFP-100G-SR4-T2</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 9</name>
                                    <version>REV 01</version>
                                    <part-number>740-061405</part-number>
                                    <serial-number>1ECQ1603083</serial-number>
                                    <description>QSFP-100G-SR4-T2</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 10</name>
                                    <version>REV 01</version>
                                    <part-number>740-096178</part-number>
                                    <serial-number>1W2CQGA53701X</serial-number>
                                    <description>QSFP-100G-LR</description>
                                </chassis-sub-sub-module>
                                <chassis-sub-sub-module>
                                    <name>Xcvr 11</name>
                                    <version>REV 01</version>
                                    <part-number>740-096178</part-number>
                                    <serial-number>1W2CQGA53701F</serial-number>
                                    <description>QSFP-100G-LR</description>
                                </chassis-sub-sub-module>
                            </chassis-sub-module>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 0</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520004</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>740-066937</part-number>
                                <serial-number>1HS17520004</serial-number>
                                <assembly-identifier>0x04a3</assembly-identifier>
                                <assembly-version>01.01</assembly-version>
                                <manufacture-date>12-28-2017</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 01</i2c-version>
                                <clei-code>COUPAHDEAA</clei-code>
                                <i2c-identifier>JNP-PWR1600-AC</i2c-identifier>
                                <model-number>JNP-PWR1600-AC</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 04 a3 01 01 52 45 56 20 30 31 00 00Address 0x10: 00
                                    00 00 00 37 34 30 2d 30 36 36 39 33 37 00 00Address 0x20: 31 48 53 31 37 35 32 30 30
                                    30 34 00 00 1c 0c 07Address 0x30: e1 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 43 4f 55 50 41 48 44 45 41 41 4aAddress 0x50: 4e 50
                                    2d 50 57 52 31 36 30 30 2d 41 43 00 00 00Address 0x60: 00 00 00 00 00 00 41 30 30 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff e9 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 1</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520436</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>740-066937</part-number>
                                <serial-number>1HS17520436</serial-number>
                                <assembly-identifier>0x04a3</assembly-identifier>
                                <assembly-version>01.01</assembly-version>
                                <manufacture-date>01-05-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 01</i2c-version>
                                <clei-code>COUPAHDEAA</clei-code>
                                <i2c-identifier>JNP-PWR1600-AC</i2c-identifier>
                                <model-number>JNP-PWR1600-AC</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 04 a3 01 01 52 45 56 20 30 31 00 00Address 0x10: 00
                                    00 00 00 37 34 30 2d 30 36 36 39 33 37 00 00Address 0x20: 31 48 53 31 37 35 32 30 34
                                    33 36 00 00 05 01 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 43 4f 55 50 41 48 44 45 41 41 4aAddress 0x50: 4e 50
                                    2d 50 57 52 31 36 30 30 2d 41 43 00 00 00Address 0x60: 00 00 00 00 00 00 41 30 30 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff e9 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 2</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520007</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>740-066937</part-number>
                                <serial-number>1HS17520007</serial-number>
                                <assembly-identifier>0x04a3</assembly-identifier>
                                <assembly-version>01.01</assembly-version>
                                <manufacture-date>12-28-2017</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 01</i2c-version>
                                <clei-code>COUPAHDEAA</clei-code>
                                <i2c-identifier>JNP-PWR1600-AC</i2c-identifier>
                                <model-number>JNP-PWR1600-AC</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 04 a3 01 01 52 45 56 20 30 31 00 00Address 0x10: 00
                                    00 00 00 37 34 30 2d 30 36 36 39 33 37 00 00Address 0x20: 31 48 53 31 37 35 32 30 30
                                    30 37 00 00 1c 0c 07Address 0x30: e1 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 43 4f 55 50 41 48 44 45 41 41 4aAddress 0x50: 4e 50
                                    2d 50 57 52 31 36 30 30 2d 41 43 00 00 00Address 0x60: 00 00 00 00 00 00 41 30 30 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff e9 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 3</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520502</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>740-066937</part-number>
                                <serial-number>1HS17520502</serial-number>
                                <assembly-identifier>0x04a3</assembly-identifier>
                                <assembly-version>01.01</assembly-version>
                                <manufacture-date>01-03-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 01</i2c-version>
                                <clei-code>COUPAHDEAA</clei-code>
                                <i2c-identifier>JNP-PWR1600-AC</i2c-identifier>
                                <model-number>JNP-PWR1600-AC</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 04 a3 01 01 52 45 56 20 30 31 00 00Address 0x10: 00
                                    00 00 00 37 34 30 2d 30 36 36 39 33 37 00 00Address 0x20: 31 48 53 31 37 35 32 30 35
                                    30 32 00 00 03 01 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 43 4f 55 50 41 48 44 45 41 41 4aAddress 0x50: 4e 50
                                    2d 50 57 52 31 36 30 30 2d 41 43 00 00 00Address 0x60: 00 00 00 00 00 00 41 30 30 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff e9 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 4</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520016</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>740-066937</part-number>
                                <serial-number>1HS17520016</serial-number>
                                <assembly-identifier>0x04a3</assembly-identifier>
                                <assembly-version>01.01</assembly-version>
                                <manufacture-date>12-28-2017</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 01</i2c-version>
                                <clei-code>COUPAHDEAA</clei-code>
                                <i2c-identifier>JNP-PWR1600-AC</i2c-identifier>
                                <model-number>JNP-PWR1600-AC</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 04 a3 01 01 52 45 56 20 30 31 00 00Address 0x10: 00
                                    00 00 00 37 34 30 2d 30 36 36 39 33 37 00 00Address 0x20: 31 48 53 31 37 35 32 30 30
                                    31 36 00 00 1c 0c 07Address 0x30: e1 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 43 4f 55 50 41 48 44 45 41 41 4aAddress 0x50: 4e 50
                                    2d 50 57 52 31 36 30 30 2d 41 43 00 00 00Address 0x60: 00 00 00 00 00 00 41 30 30 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff e9 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>PEM 5</name>
                            <version>REV 01</version>
                            <part-number>740-066937</part-number>
                            <serial-number>1HS17520085</serial-number>
                            <description>JNP-PWR1600-AC</description>
                            <clei-code>COUPAHDEAA</clei-code>
                            <model-number>JNP-PWR1600-AC</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>740-066937</part-number>
                                <serial-number>1HS17520085</serial-number>
                                <assembly-identifier>0x04a3</assembly-identifier>
                                <assembly-version>01.01</assembly-version>
                                <manufacture-date>12-29-2017</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 01</i2c-version>
                                <clei-code>COUPAHDEAA</clei-code>
                                <i2c-identifier>JNP-PWR1600-AC</i2c-identifier>
                                <model-number>JNP-PWR1600-AC</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 ff 04 a3 01 01 52 45 56 20 30 31 00 00Address 0x10: 00
                                    00 00 00 37 34 30 2d 30 36 36 39 33 37 00 00Address 0x20: 31 48 53 31 37 35 32 30 30
                                    38 35 00 00 1d 0c 07Address 0x30: e1 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 43 4f 55 50 41 48 44 45 41 41 4aAddress 0x50: 4e 50
                                    2d 50 57 52 31 36 30 30 2d 41 43 00 00 00Address 0x60: 00 00 00 00 00 00 41 30 30 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff e9 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 0</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKN1849</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>760-069329</part-number>
                                <serial-number>CAKN1849</serial-number>
                                <assembly-identifier>0x0caa</assembly-identifier>
                                <assembly-version>01.12</assembly-version>
                                <manufacture-date>03-29-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 12</i2c-version>
                                <clei-code>FWUCAA5AAA</clei-code>
                                <i2c-identifier>JNP FAN 3RU</i2c-identifier>
                                <model-number>JNP-FAN-3RU</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c aa 01 0c 52 45 56 20 31 32 00 00Address 0x10: 00
                                    00 00 00 37 36 30 2d 30 36 39 33 32 39 00 00Address 0x20: 53 2f 4e 20 43 41 4b 4e 31
                                    38 34 39 00 1d 03 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 46 57 55 43 41 41 35 41 41 41 4aAddress 0x50: 4e 50
                                    2d 46 41 4e 2d 33 52 55 00 00 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 41 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 19 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 1</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKN1850</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>760-069329</part-number>
                                <serial-number>CAKN1850</serial-number>
                                <assembly-identifier>0x0caa</assembly-identifier>
                                <assembly-version>01.12</assembly-version>
                                <manufacture-date>03-29-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 12</i2c-version>
                                <clei-code>FWUCAA5AAA</clei-code>
                                <i2c-identifier>JNP FAN 3RU</i2c-identifier>
                                <model-number>JNP-FAN-3RU</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c aa 01 0c 52 45 56 20 31 32 00 00Address 0x10: 00
                                    00 00 00 37 36 30 2d 30 36 39 33 32 39 00 00Address 0x20: 53 2f 4e 20 43 41 4b 4e 31
                                    38 35 30 00 1d 03 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 46 57 55 43 41 41 35 41 41 41 4aAddress 0x50: 4e 50
                                    2d 46 41 4e 2d 33 52 55 00 00 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 41 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 19 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 2</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKG4387</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>760-069329</part-number>
                                <serial-number>CAKG4387</serial-number>
                                <assembly-identifier>0x0caa</assembly-identifier>
                                <assembly-version>01.12</assembly-version>
                                <manufacture-date>02-05-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 12</i2c-version>
                                <clei-code>FWUCAA5AAA</clei-code>
                                <i2c-identifier>JNP FAN 3RU</i2c-identifier>
                                <model-number>JNP-FAN-3RU</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c aa 01 0c 52 45 56 20 31 32 00 00Address 0x10: 00
                                    00 00 00 37 36 30 2d 30 36 39 33 32 39 00 00Address 0x20: 53 2f 4e 20 43 41 4b 47 34
                                    33 38 37 00 05 02 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 46 57 55 43 41 41 35 41 41 41 4aAddress 0x50: 4e 50
                                    2d 46 41 4e 2d 33 52 55 00 00 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 41 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 19 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                        <chassis-module>
                            <name>Fan Tray 3</name>
                            <version>REV 12</version>
                            <part-number>760-069329</part-number>
                            <serial-number>CAKN1824</serial-number>
                            <description>JNP FAN 3RU</description>
                            <clei-code>FWUCAA5AAA</clei-code>
                            <model-number>JNP-FAN-3RU</model-number>
                            <i2c-information>
                                <jedec-code>0x7fb0</jedec-code>
                                <eeprom-version>0x02</eeprom-version>
                                <part-number>760-069329</part-number>
                                <serial-number>CAKN1824</serial-number>
                                <assembly-identifier>0x0caa</assembly-identifier>
                                <assembly-version>01.12</assembly-version>
                                <manufacture-date>03-29-2018</manufacture-date>
                                <assembly-flags>0x00</assembly-flags>
                                <i2c-version>REV 12</i2c-version>
                                <clei-code>FWUCAA5AAA</clei-code>
                                <i2c-identifier>JNP FAN 3RU</i2c-identifier>
                                <model-number>JNP-FAN-3RU</model-number>
                                <board-information-record>Address 0x00: ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ff
                                </board-information-record>
                                <i2c-data>Address 0x00: 7f b0 02 fe 0c aa 01 0c 52 45 56 20 31 32 00 00Address 0x10: 00
                                    00 00 00 37 36 30 2d 30 36 39 33 32 39 00 00Address 0x20: 53 2f 4e 20 43 41 4b 4e 31
                                    38 32 34 00 1d 03 07Address 0x30: e2 ff ff ff ff ff ff ff ff ff ff ff ff ff ff
                                    ffAddress 0x40: ff ff ff ff 01 46 57 55 43 41 41 35 41 41 41 4aAddress 0x50: 4e 50
                                    2d 46 41 4e 2d 33 52 55 00 00 00 00 00 00Address 0x60: 00 00 00 00 00 00 41 41 00 ff
                                    ff ff ff ff ff ffAddress 0x70: ff ff ff 19 ff ff ff ff ff ff ff ff ff ff ff ff
                                </i2c-data>
                            </i2c-information>
                        </chassis-module>
                    </chassis>
                </chassis-inventory>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show interfaces terse</command>
            </command-header>
            <lwc-output>
                <interface-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-interface" junos:style="terse">
                    <physical-interface>
                        <name>et-0/0/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/0/0.311</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.100.0.25/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::25/127</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::ee38:7301:3705:300f/64</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name junos:emit="emit">mpls</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>et-0/0/0.322</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.100.0.49/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::49/127</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::ee38:7301:4205:300f/64</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name junos:emit="emit">mpls</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>et-0/0/0.323</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.100.0.50/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::50/127</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::ee38:7301:4305:300f/64</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name junos:emit="emit">mpls</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>et-0/0/0.324</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.100.0.52/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::52/127</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::ee38:7301:4405:300f/64</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name junos:emit="emit">mpls</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>et-0/0/0.334</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.100.0.46/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::46/127</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::ee38:7301:4e05:300f/64</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name junos:emit="emit">mpls</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>et-0/0/0.32767</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>lc-0/0/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>lc-0/0/0.32769</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>vpls</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>pfe-0/0/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>pfe-0/0/0.16383</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>pfh-0/0/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>pfh-0/0/0.16383</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>pfh-0/0/0.16384</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/1:0</name>
                        <admin-status>up</admin-status>
                        <oper-status>down</oper-status>
                        <logical-interface>
                            <name>xe-0/0/1:0.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>down</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.40/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/1:1</name>
                        <admin-status>up</admin-status>
                        <oper-status>down</oper-status>
                        <logical-interface>
                            <name>xe-0/0/1:1.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>down</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.42/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/1:2</name>
                        <admin-status>up</admin-status>
                        <oper-status>down</oper-status>
                        <logical-interface>
                            <name>xe-0/0/1:2.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>down</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.44/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/1:3</name>
                        <admin-status>up</admin-status>
                        <oper-status>down</oper-status>
                        <logical-interface>
                            <name>xe-0/0/1:3.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>down</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.46/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/2:0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/2:0.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/2:1</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/2:1.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/2:2</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/2:2.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/2:3</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/2:3.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/3:0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/3:0.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.105/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/3:1</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/3:1.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.107/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/3:2</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/3:2.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.109/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>xe-0/0/3:3</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>xe-0/0/3:3.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.3.111/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>xe-0/0/3:3.325</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.100.0.54/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::54/127</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::ee38:7301:4505:301e/64</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name junos:emit="emit">mpls</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>xe-0/0/3:3.32767</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/0.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>lc-0/1/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>lc-0/1/0.32769</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>vpls</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>pfe-0/1/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>pfe-0/1/0.16383</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/1</name>
                        <admin-status>up</admin-status>
                        <oper-status>down</oper-status>
                        <logical-interface>
                            <name>et-0/1/1.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>down</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.2.46/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/2</name>
                        <admin-status>up</admin-status>
                        <oper-status>down</oper-status>
                        <logical-interface>
                            <name>et-0/1/2.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>down</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.2.48/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/4</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/4.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.2.52/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/5</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/5.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.2.75/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/6</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/6.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.2.77/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/8</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/8.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.1.63/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/9</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/9.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.1.65/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/10</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/10.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.1.66/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>et-0/1/11</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>et-0/1/11.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.90.1.68/31</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>multiservice</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>lc-0/2/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>lc-0/2/0.32769</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>vpls</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>pfe-0/2/0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>pfe-0/2/0.16383</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>cbp0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>demux0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>dsc</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>em2</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>em2.32768</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">192.168.1.1/24</ifa-local>
                                </interface-address>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>em3</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>em3.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.0.0.1/8</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">128.0.0.1/2</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">128.0.0.4/2</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>tnp</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">0x4</ifa-local>
                                </interface-address>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>em4</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>em4.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.0.0.1/8</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">128.0.0.1/2</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">128.0.0.4/2</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>tnp</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">0x4</ifa-local>
                                </interface-address>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>esi</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti1</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti2</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti3</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti4</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti5</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti6</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fti7</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>fxp0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>fxp0.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">10.10.2.35/24</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fd9f:e4af:708f:9466::1010:35/112</ifa-local>
                                </interface-address>
                                <interface-address>
                                    <ifa-local junos:emit="emit">fe80::f24b:3aff:feee:fde6/64</ifa-local>
                                </interface-address>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>gre</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>ipip</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>irb</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>jsrv</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>jsrv.1</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">128.0.0.127/2</ifa-local>
                                </interface-address>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>lo0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                        <logical-interface>
                            <name>lo0.0</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                                <interface-address>
                                    <ifa-local>192.168.10.24</ifa-local>
                                    <ifa-destination junos:emit="emit">0/0</ifa-destination>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>iso</address-family-name>
                                <interface-address>
                                    <ifa-local junos:emit="emit">49.0001.0192.1680.1024</ifa-local>
                                </interface-address>
                            </address-family>
                            <address-family>
                                <address-family-name>inet6</address-family-name>
                                <interface-address>
                                    <ifa-local>fd9f:e4af:708f:9466::1:24</ifa-local>
                                    <ifa-destination junos:emit="emit"/>
                                </interface-address>
                                <interface-address>
                                    <ifa-local>fe80::f24b:3a0f:fcee:fde6</ifa-local>
                                    <ifa-destination junos:emit="emit"/>
                                </interface-address>
                            </address-family>
                        </logical-interface>
                        <logical-interface>
                            <name>lo0.16385</name>
                            <admin-status>up</admin-status>
                            <oper-status>up</oper-status>
                            <filter-information/>
                            <address-family>
                                <address-family-name>inet</address-family-name>
                            </address-family>
                        </logical-interface>
                    </physical-interface>
                    <physical-interface>
                        <name>lsi</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>mif</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>mtun</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>pimd</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>pime</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>pip0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>pp0</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>rbeb</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>tap</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                    <physical-interface>
                        <name>vtep</name>
                        <admin-status>up</admin-status>
                        <oper-status>up</oper-status>
                    </physical-interface>
                </interface-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show system core-dumps</command>
            </command-header>
            <lwc-output>
                <directory-list root-path="/var/crash/*core*" junos:seconds="1746471933" junos:style="verbose">
                    <directory name="">
                        <file-information>
                            <file-name>/var/crash/vmcore.0</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1849217024</file-size>
                            <file-date junos:format="Oct 15  2022">1665897365</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/crash/vmcore.1</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2025201664</file-size>
                            <file-date junos:format="Nov 29  2022">1669743067</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/crash/vmcore.2</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2037248000</file-size>
                            <file-date junos:format="Jan 25  2023">1674675530</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/crash/vmcore.3</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2002685952</file-size>
                            <file-date junos:format="Aug 29  2024">1724963950</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/crash/vmcore.4</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2033664000</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404325</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/crash/vmcore.last</file-name>
                            <file-symlink/>
                            <file-symlink-target>vmcore.4</file-symlink-target>
                            <file-permissions junos:format="lrwxr-xr-x">755</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>8</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404325</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/tmp/cron.core.0.gz</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Aug 29  2024">1724963700</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/tmp/cron.core.1.gz</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>141251</file-size>
                            <file-date junos:format="Aug 29  2024">1724963702</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/tmp/id.core.0.gz</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>117741</file-size>
                            <file-date junos:format="Aug 29  2024">1724963672</file-date>
                        </file-information>
                        <file-information>
                            <file-name>/var/tmp/sleep.core.0.gz</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Aug 29  2024">1724963702</file-date>
                        </file-information>
                        <output>/var/tmp/pics/*core*: No such file or directory</output>
                        <output>/var/crash/kernel.*: No such file or directory</output>
                        <output>/var/jails/rest-api/tmp/*core*: No such file or directory</output>
                        <output>/tftpboot/corefiles/*core*: No such file or directory</output>
                        <output>/jail/var/tmp/*core*: No such file or directory</output>
                        <total-files>10</total-files>
                    </directory>
                </directory-list>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show system uptime</command>
            </command-header>
            <lwc-output>
                <system-uptime-information xmlns="http://xml.juniper.net/junos/20.4R0/junos">
                    <current-time>
                        <date-time junos:seconds="1746471933">2025-05-05 12:05:33 PDT</date-time>
                    </current-time>
                    <time-source>LOCAL CLOCK</time-source>
                    <system-booted-time>
                        <date-time junos:seconds="1742404202">2025-03-19 10:10:02 PDT</date-time>
                        <time-length junos:seconds="4067731">6w5d 01:55</time-length>
                    </system-booted-time>
                    <protocols-started-time>
                        <date-time junos:seconds="1742404332">2025-03-19 10:12:12 PDT</date-time>
                        <time-length junos:seconds="4067601">6w5d 01:53</time-length>
                    </protocols-started-time>
                    <last-configured-time>
                        <date-time junos:seconds="1746466714">2025-05-05 10:38:34 PDT</date-time>
                        <time-length junos:seconds="5219">01:26:59</time-length>
                        <user>jalapeno</user>
                    </last-configured-time>
                    <uptime-information>
                        <date-time junos:seconds="1746471933">12:05PM</date-time>
                        <up-time junos:seconds="4067760">47 days, 1:56</up-time>
                        <active-user-count junos:format="0 users">0</active-user-count>
                        <load-average-1>0.29</load-average-1>
                        <load-average-5>0.20</load-average-5>
                        <load-average-15>0.18</load-average-15>
                        <user-table/>
                    </uptime-information>
                </system-uptime-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show ospf neighbor</command>
            </command-header>
            <lwc-output>
                <ospf-neighbor-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-routing">
                    <ospf-neighbor>
                        <neighbor-address>10.90.2.74</neighbor-address>
                        <interface-name>et-0/1/5.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.17</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>36</activity-timer>
                    </ospf-neighbor>
                    <ospf-neighbor>
                        <neighbor-address>10.90.2.76</neighbor-address>
                        <interface-name>et-0/1/6.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.17</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>37</activity-timer>
                    </ospf-neighbor>
                    <ospf-neighbor>
                        <neighbor-address>10.90.1.62</neighbor-address>
                        <interface-name>et-0/1/8.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.17</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>37</activity-timer>
                    </ospf-neighbor>
                    <ospf-neighbor>
                        <neighbor-address>10.90.1.64</neighbor-address>
                        <interface-name>et-0/1/9.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.17</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>32</activity-timer>
                    </ospf-neighbor>
                    <ospf-neighbor>
                        <neighbor-address>10.90.3.106</neighbor-address>
                        <interface-name>xe-0/0/3:1.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.7</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>36</activity-timer>
                    </ospf-neighbor>
                    <ospf-neighbor>
                        <neighbor-address>10.90.3.108</neighbor-address>
                        <interface-name>xe-0/0/3:2.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.11</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>39</activity-timer>
                    </ospf-neighbor>
                    <ospf-neighbor>
                        <neighbor-address>10.90.3.110</neighbor-address>
                        <interface-name>xe-0/0/3:3.0</interface-name>
                        <ospf-neighbor-state>Full</ospf-neighbor-state>
                        <neighbor-id>192.168.10.26</neighbor-id>
                        <neighbor-priority>128</neighbor-priority>
                        <activity-timer>31</activity-timer>
                    </ospf-neighbor>
                </ospf-neighbor-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show isis adjacency</command>
            </command-header>
            <lwc-output>
                <isis-adjacency-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-routing"
                                            junos:style="brief">
                    <isis-adjacency>
                        <interface-name>et-0/0/0.322</interface-name>
                        <system-name>cdo-QFX5100-48T-6Q-r006</system-name>
                        <level>1</level>
                        <adjacency-state>Up</adjacency-state>
                        <holdtime>18</holdtime>
                    </isis-adjacency>
                    <isis-adjacency>
                        <interface-name>et-0/0/0.323</interface-name>
                        <system-name>0192.1680.1025</system-name>
                        <level>1</level>
                        <adjacency-state>Up</adjacency-state>
                        <holdtime>22</holdtime>
                    </isis-adjacency>
                    <isis-adjacency>
                        <interface-name>et-0/0/0.324</interface-name>
                        <system-name>cdo-SRX1500-r002</system-name>
                        <level>1</level>
                        <adjacency-state>Up</adjacency-state>
                        <holdtime>21</holdtime>
                    </isis-adjacency>
                    <isis-adjacency>
                        <interface-name>et-0/0/0.334</interface-name>
                        <system-name>cdo-PTX1000-r001</system-name>
                        <level>1</level>
                        <adjacency-state>Up</adjacency-state>
                        <holdtime>21</holdtime>
                    </isis-adjacency>
                    <isis-adjacency>
                        <interface-name>xe-0/0/3:3.325</interface-name>
                        <system-name>cdo-MX204-r004</system-name>
                        <level>1</level>
                        <adjacency-state>Up</adjacency-state>
                        <holdtime>24</holdtime>
                    </isis-adjacency>
                </isis-adjacency-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show chassis fpc</command>
            </command-header>
            <lwc-output>
                <fpc-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-chassis" junos:style="brief">
                    <fpc>
                        <slot>0</slot>
                        <state>Online</state>
                        <temperature junos:celsius="56">56</temperature>
                        <cpu-total>20</cpu-total>
                        <cpu-interrupt>0</cpu-interrupt>
                        <cpu-1min-avg>21</cpu-1min-avg>
                        <cpu-5min-avg>21</cpu-5min-avg>
                        <cpu-15min-avg>21</cpu-15min-avg>
                        <memory-dram-size>3168</memory-dram-size>
                        <memory-heap-utilization>11</memory-heap-utilization>
                        <memory-buffer-utilization>23</memory-buffer-utilization>
                    </fpc>
                    <fpc>
                        <slot>1</slot>
                        <state>Empty</state>
                    </fpc>
                </fpc-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show rsvp neighbor</command>
            </command-header>
            <lwc-output>
                <rsvp-neighbor-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-routing">
                    <rsvp-neighbor-count>14</rsvp-neighbor-count>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>192.168.10.26</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067181">6w5d 1:46:21</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451652</hellos-sent>
                        <hellos-received>451652</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>192.168.10.28</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067154">6w5d 1:45:54</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451829</hellos-sent>
                        <hellos-received>451829</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.3.106</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="6645">1:50:45</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>450892</hellos-sent>
                        <hellos-received>450891</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.3.108</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067199">6w5d 1:46:39</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451626</hellos-sent>
                        <hellos-received>451626</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.3.110</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067199">6w5d 1:46:39</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451601</hellos-sent>
                        <hellos-received>451601</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.100.0.55</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067199">6w5d 1:46:39</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451614</hellos-sent>
                        <hellos-received>451613</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.2.74</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067208">6w5d 1:46:48</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>450994</hellos-sent>
                        <hellos-received>450994</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.2.76</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067199">6w5d 1:46:39</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>450991</hellos-sent>
                        <hellos-received>450991</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.1.62</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067195">6w5d 1:46:35</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451833</hellos-sent>
                        <hellos-received>451832</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.90.1.64</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067208">6w5d 1:46:48</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>450986</hellos-sent>
                        <hellos-received>450986</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.100.0.48</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="3978">1:06:18</neighbor-idle>
                        <neighbor-up-count>0</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067208">6w5d 1:46:48</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451913</hellos-sent>
                        <hellos-received>0</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.100.0.51</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="3978">1:06:18</neighbor-idle>
                        <neighbor-up-count>0</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067208">6w5d 1:46:48</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451913</hellos-sent>
                        <hellos-received>0</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.100.0.53</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="3978">1:06:18</neighbor-idle>
                        <neighbor-up-count>0</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067208">6w5d 1:46:48</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451913</hellos-sent>
                        <hellos-received>0</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                    <rsvp-neighbor junos:style="brief">
                        <rsvp-neighbor-address>10.100.0.47</rsvp-neighbor-address>
                        <neighbor-idle junos:seconds="0">0</neighbor-idle>
                        <neighbor-up-count>1</neighbor-up-count>
                        <neighbor-down-count>0</neighbor-down-count>
                        <last-changed-time junos:seconds="4067208">6w5d 1:46:48</last-changed-time>
                        <hello-interval>9</hello-interval>
                        <hellos-sent>451715</hellos-sent>
                        <hellos-received>451715</hellos-received>
                        <messages-received>0</messages-received>
                    </rsvp-neighbor>
                </rsvp-neighbor-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show vrrp detail</command>
            </command-header>
            <lwc-output>
                <rpc-error>
                    <error-severity>warning</error-severity>
                    <error-message>vrrp subsystem not running - not needed by configuration.</error-message>
                </rpc-error>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show system buffers</command>
            </command-header>
            <lwc-output>
                <memory-statistics>
                    <current-mbufs>1119</current-mbufs>
                    <cached-mbufs>5211</cached-mbufs>
                    <total-mbufs>6330</total-mbufs>
                    <current-mbuf-clusters>773</current-mbuf-clusters>
                    <cached-mbuf-clusters>2679</cached-mbuf-clusters>
                    <total-mbuf-clusters>3452</total-mbuf-clusters>
                    <max-mbuf-clusters>3062676</max-mbuf-clusters>
                    <packet-count>770</packet-count>
                    <packet-free>2519</packet-free>
                    <current-jumbo-clusters-4k>257</current-jumbo-clusters-4k>
                    <cached-jumbo-clusters-4k>644</cached-jumbo-clusters-4k>
                    <total-jumbo-clusters-4k>901</total-jumbo-clusters-4k>
                    <max-jumbo-clusters-4k>1531337</max-jumbo-clusters-4k>
                    <current-jumbo-clusters-9k>0</current-jumbo-clusters-9k>
                    <cached-jumbo-clusters-9k>0</cached-jumbo-clusters-9k>
                    <total-jumbo-clusters-9k>0</total-jumbo-clusters-9k>
                    <max-jumbo-clusters-9k>453729</max-jumbo-clusters-9k>
                    <current-jumbo-clusters-16k>0</current-jumbo-clusters-16k>
                    <cached-jumbo-clusters-16k>0</cached-jumbo-clusters-16k>
                    <total-jumbo-clusters-16k>0</total-jumbo-clusters-16k>
                    <max-jumbo-clusters-16k>255222</max-jumbo-clusters-16k>
                    <current-bytes-in-use>2853</current-bytes-in-use>
                    <cached-bytes>9236</cached-bytes>
                    <total-bytes>12090</total-bytes>
                    <mbuf-failures>0</mbuf-failures>
                    <cluster-failures>0</cluster-failures>
                    <packet-failures>0</packet-failures>
                    <jumbo-cluster-failures-4k>0</jumbo-cluster-failures-4k>
                    <jumbo-cluster-failures-9k>0</jumbo-cluster-failures-9k>
                    <jumbo-cluster-failures-16k>0</jumbo-cluster-failures-16k>
                    <sfbuf-requests-denied>0</sfbuf-requests-denied>
                    <sfbuf-requests-delayed>0</sfbuf-requests-delayed>
                    <io-initiated>0</io-initiated>
                </memory-statistics>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show bgp summary</command>
            </command-header>
            <lwc-output>
                <bgp-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-routing">
                    <bgp-thread-mode>BGP I/O</bgp-thread-mode>
                    <thread-state/>
                    <default-ebgp-advertise-mode>accept</default-ebgp-advertise-mode>
                    <default-ebgp-receive-mode>accept</default-ebgp-receive-mode>
                    <group-count>2</group-count>
                    <peer-count>12</peer-count>
                    <down-peer-count>4</down-peer-count>
                    <bgp-rib junos:style="brief">
                        <name>bgp.rtarget.0</name>
                        <total-prefix-count>0</total-prefix-count>
                        <received-prefix-count>0</received-prefix-count>
                        <accepted-prefix-count>0</accepted-prefix-count>
                        <active-prefix-count>0</active-prefix-count>
                        <suppressed-prefix-count>0</suppressed-prefix-count>
                        <history-prefix-count>0</history-prefix-count>
                        <damped-prefix-count>0</damped-prefix-count>
                        <total-external-prefix-count>0</total-external-prefix-count>
                        <active-external-prefix-count>0</active-external-prefix-count>
                        <accepted-external-prefix-count>0</accepted-external-prefix-count>
                        <suppressed-external-prefix-count>0</suppressed-external-prefix-count>
                        <total-internal-prefix-count>0</total-internal-prefix-count>
                        <active-internal-prefix-count>0</active-internal-prefix-count>
                        <accepted-internal-prefix-count>0</accepted-internal-prefix-count>
                        <suppressed-internal-prefix-count>0</suppressed-internal-prefix-count>
                        <pending-prefix-count>0</pending-prefix-count>
                        <bgp-rib-state>BGP restart is complete</bgp-rib-state>
                        <vpn-rib-state>VPN restart is complete</vpn-rib-state>
                    </bgp-rib>
                    <bgp-rib junos:style="brief">
                        <name>inet.0</name>
                        <total-prefix-count>33</total-prefix-count>
                        <received-prefix-count>33</received-prefix-count>
                        <accepted-prefix-count>33</accepted-prefix-count>
                        <active-prefix-count>1</active-prefix-count>
                        <suppressed-prefix-count>0</suppressed-prefix-count>
                        <history-prefix-count>0</history-prefix-count>
                        <damped-prefix-count>0</damped-prefix-count>
                        <total-external-prefix-count>0</total-external-prefix-count>
                        <active-external-prefix-count>0</active-external-prefix-count>
                        <accepted-external-prefix-count>0</accepted-external-prefix-count>
                        <suppressed-external-prefix-count>0</suppressed-external-prefix-count>
                        <total-internal-prefix-count>33</total-internal-prefix-count>
                        <active-internal-prefix-count>1</active-internal-prefix-count>
                        <accepted-internal-prefix-count>33</accepted-internal-prefix-count>
                        <suppressed-internal-prefix-count>0</suppressed-internal-prefix-count>
                        <pending-prefix-count>0</pending-prefix-count>
                        <bgp-rib-state>BGP restart is complete</bgp-rib-state>
                    </bgp-rib>
                    <bgp-rib junos:style="brief">
                        <name>inet.2</name>
                        <total-prefix-count>16</total-prefix-count>
                        <received-prefix-count>16</received-prefix-count>
                        <accepted-prefix-count>16</accepted-prefix-count>
                        <active-prefix-count>16</active-prefix-count>
                        <suppressed-prefix-count>0</suppressed-prefix-count>
                        <history-prefix-count>0</history-prefix-count>
                        <damped-prefix-count>0</damped-prefix-count>
                        <total-external-prefix-count>0</total-external-prefix-count>
                        <active-external-prefix-count>0</active-external-prefix-count>
                        <accepted-external-prefix-count>0</accepted-external-prefix-count>
                        <suppressed-external-prefix-count>0</suppressed-external-prefix-count>
                        <total-internal-prefix-count>16</total-internal-prefix-count>
                        <active-internal-prefix-count>16</active-internal-prefix-count>
                        <accepted-internal-prefix-count>16</accepted-internal-prefix-count>
                        <suppressed-internal-prefix-count>0</suppressed-internal-prefix-count>
                        <pending-prefix-count>0</pending-prefix-count>
                        <bgp-rib-state>BGP restart is complete</bgp-rib-state>
                    </bgp-rib>
                    <bgp-rib junos:style="brief">
                        <name>bgp.l3vpn.0</name>
                        <total-prefix-count>0</total-prefix-count>
                        <received-prefix-count>0</received-prefix-count>
                        <accepted-prefix-count>0</accepted-prefix-count>
                        <active-prefix-count>0</active-prefix-count>
                        <suppressed-prefix-count>0</suppressed-prefix-count>
                        <history-prefix-count>0</history-prefix-count>
                        <damped-prefix-count>0</damped-prefix-count>
                        <total-external-prefix-count>0</total-external-prefix-count>
                        <active-external-prefix-count>0</active-external-prefix-count>
                        <accepted-external-prefix-count>0</accepted-external-prefix-count>
                        <suppressed-external-prefix-count>0</suppressed-external-prefix-count>
                        <total-internal-prefix-count>0</total-internal-prefix-count>
                        <active-internal-prefix-count>0</active-internal-prefix-count>
                        <accepted-internal-prefix-count>0</accepted-internal-prefix-count>
                        <suppressed-internal-prefix-count>0</suppressed-internal-prefix-count>
                        <pending-prefix-count>0</pending-prefix-count>
                        <bgp-rib-state>BGP restart is complete</bgp-rib-state>
                        <vpn-rib-state>VPN restart is complete</vpn-rib-state>
                    </bgp-rib>
                    <bgp-rib junos:style="brief">
                        <name>bgp.l3vpn-inet6.0</name>
                        <total-prefix-count>0</total-prefix-count>
                        <received-prefix-count>0</received-prefix-count>
                        <accepted-prefix-count>0</accepted-prefix-count>
                        <active-prefix-count>0</active-prefix-count>
                        <suppressed-prefix-count>0</suppressed-prefix-count>
                        <history-prefix-count>0</history-prefix-count>
                        <damped-prefix-count>0</damped-prefix-count>
                        <total-external-prefix-count>0</total-external-prefix-count>
                        <active-external-prefix-count>0</active-external-prefix-count>
                        <accepted-external-prefix-count>0</accepted-external-prefix-count>
                        <suppressed-external-prefix-count>0</suppressed-external-prefix-count>
                        <total-internal-prefix-count>0</total-internal-prefix-count>
                        <active-internal-prefix-count>0</active-internal-prefix-count>
                        <accepted-internal-prefix-count>0</accepted-internal-prefix-count>
                        <suppressed-internal-prefix-count>0</suppressed-internal-prefix-count>
                        <pending-prefix-count>0</pending-prefix-count>
                        <bgp-rib-state>BGP restart is complete</bgp-rib-state>
                        <vpn-rib-state>VPN restart is complete</vpn-rib-state>
                    </bgp-rib>
                    <bgp-rib junos:style="brief">
                        <name>inet6.0</name>
                        <total-prefix-count>328</total-prefix-count>
                        <received-prefix-count>328</received-prefix-count>
                        <accepted-prefix-count>328</accepted-prefix-count>
                        <active-prefix-count>0</active-prefix-count>
                        <suppressed-prefix-count>0</suppressed-prefix-count>
                        <history-prefix-count>0</history-prefix-count>
                        <damped-prefix-count>0</damped-prefix-count>
                        <total-external-prefix-count>0</total-external-prefix-count>
                        <active-external-prefix-count>0</active-external-prefix-count>
                        <accepted-external-prefix-count>0</accepted-external-prefix-count>
                        <suppressed-external-prefix-count>0</suppressed-external-prefix-count>
                        <total-internal-prefix-count>328</total-internal-prefix-count>
                        <active-internal-prefix-count>0</active-internal-prefix-count>
                        <accepted-internal-prefix-count>328</accepted-internal-prefix-count>
                        <suppressed-internal-prefix-count>0</suppressed-internal-prefix-count>
                        <pending-prefix-count>0</pending-prefix-count>
                        <bgp-rib-state>BGP restart is complete</bgp-rib-state>
                    </bgp-rib>
                    <bgp-peer junos:style="terse"
                              heading="Peer                     AS      InPkt     OutPkt    OutQ   Flaps Last Up/Dwn State|#Active/Received/Accepted/Damped...">
                        <peer-address>192.168.10.11</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>0</input-messages>
                        <output-messages>0</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067601">6w5d 1:53:21</elapsed-time>
                        <description>IPv4 spine BGP group</description>
                        <peer-state>Connect</peer-state>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>192.168.10.23</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>150055</input-messages>
                        <output-messages>147576</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067160">6w5d 1:46:00</elapsed-time>
                        <description>IPv4 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>bgp.rtarget.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>3</received-prefix-count>
                            <accepted-prefix-count>3</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.2</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn-inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>192.168.10.25</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>0</input-messages>
                        <output-messages>0</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067601">6w5d 1:53:21</elapsed-time>
                        <description>IPv4 spine BGP group</description>
                        <peer-state>Connect</peer-state>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>192.168.10.26</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>150022</input-messages>
                        <output-messages>147577</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067187">6w5d 1:46:27</elapsed-time>
                        <description>IPv4 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>bgp.rtarget.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>11</received-prefix-count>
                            <accepted-prefix-count>11</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.2</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn-inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>192.168.10.27</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>148876</input-messages>
                        <output-messages>147575</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067137">6w5d 1:45:37</elapsed-time>
                        <description>IPv4 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>bgp.rtarget.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>3</received-prefix-count>
                            <accepted-prefix-count>3</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.2</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn-inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>192.168.10.28</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>145117</input-messages>
                        <output-messages>147575</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067141">6w5d 1:45:41</elapsed-time>
                        <description>IPv4 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>bgp.rtarget.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.0</name>
                            <active-prefix-count>1</active-prefix-count>
                            <received-prefix-count>16</received-prefix-count>
                            <accepted-prefix-count>16</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>inet.2</name>
                            <active-prefix-count>16</active-prefix-count>
                            <received-prefix-count>16</received-prefix-count>
                            <accepted-prefix-count>16</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                        <bgp-rib junos:style="terse">
                            <name>bgp.l3vpn-inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>0</received-prefix-count>
                            <accepted-prefix-count>0</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>fd9f:e4af:708f:9466::1:11</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>0</input-messages>
                        <output-messages>0</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067601">6w5d 1:53:21</elapsed-time>
                        <description>IPv6 spine BGP group</description>
                        <peer-state>Active</peer-state>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>fd9f:e4af:708f:9466::1:23</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>150082</input-messages>
                        <output-messages>147597</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067169">6w5d 1:46:09</elapsed-time>
                        <description>IPv6 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>82</received-prefix-count>
                            <accepted-prefix-count>82</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>fd9f:e4af:708f:9466::1:25</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>0</input-messages>
                        <output-messages>0</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067601">6w5d 1:53:21</elapsed-time>
                        <description>IPv6 spine BGP group</description>
                        <peer-state>Active</peer-state>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>fd9f:e4af:708f:9466::1:26</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>150049</input-messages>
                        <output-messages>147598</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067189">6w5d 1:46:29</elapsed-time>
                        <description>IPv6 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>82</received-prefix-count>
                            <accepted-prefix-count>82</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>fd9f:e4af:708f:9466::1:27</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>148902</input-messages>
                        <output-messages>147597</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067163">6w5d 1:46:03</elapsed-time>
                        <description>IPv6 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>82</received-prefix-count>
                            <accepted-prefix-count>82</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                    <bgp-peer junos:style="terse">
                        <peer-address>fd9f:e4af:708f:9466::1:28</peer-address>
                        <peer-as>65412</peer-as>
                        <input-messages>145137</input-messages>
                        <output-messages>147591</output-messages>
                        <route-queue-count>0</route-queue-count>
                        <flap-count>0</flap-count>
                        <elapsed-time junos:seconds="4067149">6w5d 1:45:49</elapsed-time>
                        <description>IPv6 spine BGP group</description>
                        <peer-state junos:format="Establ">Established</peer-state>
                        <bgp-rib junos:style="terse">
                            <name>inet6.0</name>
                            <active-prefix-count>0</active-prefix-count>
                            <received-prefix-count>82</received-prefix-count>
                            <accepted-prefix-count>82</accepted-prefix-count>
                            <suppressed-prefix-count>0</suppressed-prefix-count>
                        </bgp-rib>
                    </bgp-peer>
                </bgp-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>show system license</command>
            </command-header>
            <lwc-output>
                <license-summary-information xmlns="http://xml.juniper.net/junos/20.4R0/junos-license">
                    <license-usage-summary>
                        <features-used/>
                        <feature-summary>
                            <name>scale-subscriber</name>
                            <description>Dynamic/Static Subscriber Base Feature</description>
                            <licensed>10</licensed>
                            <used-licensed>0</used-licensed>
                            <needed>0</needed>
                            <validity-type>permanent</validity-type>
                        </feature-summary>
                        <feature-summary>
                            <name>scale-l2tp</name>
                            <description>L2TP Base Feature</description>
                            <licensed>1000</licensed>
                            <used-licensed>0</used-licensed>
                            <needed>0</needed>
                            <validity-type>permanent</validity-type>
                        </feature-summary>
                    </license-usage-summary>
                    <license-information>
                        <no-licenses-installed/>
                    </license-information>
                </license-summary-information>
            </lwc-output>
        </data>
        <data>
            <command-header>
                <command>file list detail var log</command>
            </command-header>
            <lwc-output>
                <directory-list root-path="/var/log/" junos:seconds="1746471934" junos:style="verbose">
                    <directory name="/var/log/">
                        <directory-name>/var/log/</directory-name>
                        <total-file-blocks>39984</total-file-blocks>
                        <file-information>
                            <file-name>__policy_names_rpdc__</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1828</file-size>
                            <file-date junos:format="May 5  10:38">1746466706</file-date>
                        </file-information>
                        <file-information>
                            <file-name>__policy_names_rpdn__</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1610</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>aprobed</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325443</file-date>
                        </file-information>
                        <file-information>
                            <file-name>apsd</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>18945</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>authd_libstats</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325447</file-date>
                        </file-information>
                        <file-information>
                            <file-name>authd_profilelib</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325447</file-date>
                        </file-information>
                        <file-information>
                            <file-name>authd_sdb.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325447</file-date>
                        </file-information>
                        <file-information>
                            <file-name>bbesmgd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325446</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>147559</file-size>
                            <file-date junos:format="May 5  11:50">1746471052</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.0.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>124462</file-size>
                            <file-date junos:format="May 1  13:12">1746130332</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.1.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>106312</file-size>
                            <file-date junos:format="Jan 27 02:36">1737974209</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.2.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>125073</file-size>
                            <file-date junos:format="Oct 12  2024">1728785746</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.3.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>163144</file-size>
                            <file-date junos:format="Jul 9   2024">1720522589</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.4.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>107340</file-size>
                            <file-date junos:format="Apr 26  2024">1714141007</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.5.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>106026</file-size>
                            <file-date junos:format="Jan 10  2024">1704908843</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.6.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>128267</file-size>
                            <file-date junos:format="Sep 25  2023">1695658604</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.7.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>144073</file-size>
                            <file-date junos:format="Jun 23  2023">1687552164</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd.8.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>127577</file-size>
                            <file-date junos:format="Mar 31  2023">1680301889</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd_snmp</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2207080</file-size>
                            <file-date junos:format="May 5  11:50">1746471052</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd_snmp.0.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>70507</file-size>
                            <file-date junos:format="Jul 22  2024">1721649977</file-date>
                        </file-information>
                        <file-information>
                            <file-name>chassisd_snmp.1.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>80576</file-size>
                            <file-date junos:format="Jul 1   2023">1688196916</file-date>
                        </file-information>
                        <file-information>
                            <file-name>cosd</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1726686</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>coslib_ifinfo</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Sep 6   2018">1536280858</file-date>
                        </file-information>
                        <file-information>
                            <file-name>cscript.log</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>89806</file-size>
                            <file-date junos:format="Mar 19 10:11">1742404295</file-date>
                        </file-information>
                        <file-information>
                            <file-name>dcd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>363000</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>dcd.0.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>40557</file-size>
                            <file-date junos:format="Jan 30  2023">1675084738</file-date>
                        </file-information>
                        <file-information>
                            <file-name>dcd_commit_check</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>61452</file-size>
                            <file-date junos:format="May 5  10:38">1746466706</file-date>
                        </file-information>
                        <file-information>
                            <file-name>dfwc</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325442</file-date>
                        </file-information>
                        <file-information>
                            <file-name>eccd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1792</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404329</file-date>
                        </file-information>
                        <file-information>
                            <file-name>escript.log</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>16558</file-size>
                            <file-date junos:format="May 5  12:03">1746471815</file-date>
                        </file-information>
                        <file-information>
                            <file-name>escript.log.0.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>6715</file-size>
                            <file-date junos:format="May 5  10:26">1746466019</file-date>
                        </file-information>
                        <file-information>
                            <file-name>escript.log.1.gz</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>6732</file-size>
                            <file-date junos:format="May 4  20:51">1746417115</file-date>
                        </file-information>
                        <file-information>
                            <file-name>ext</file-name>
                            <file-directory/>
                            <file-permissions junos:format="drwxrwxr-x">775</file-permissions>
                            <file-owner>ext</file-owner>
                            <file-group>ext</file-group>
                            <file-links>2</file-links>
                            <file-size>512</file-size>
                            <file-date junos:format="Apr 9   2018">1523325371</file-date>
                        </file-information>
                        <file-information>
                            <file-name>flowc</file-name>
                            <file-directory/>
                            <file-permissions junos:format="drwxrwxr-x">775</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>3</file-links>
                            <file-size>512</file-size>
                            <file-date junos:format="Apr 9   2018">1523325371</file-date>
                        </file-information>
                        <file-information>
                            <file-name>fpc_poweron_seq.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2</file-size>
                            <file-date junos:format="Mar 19 10:17">1742404641</file-date>
                        </file-information>
                        <file-information>
                            <file-name>gatekeeper</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>198</file-size>
                            <file-date junos:format="Jun 12  2018">1528841862</file-date>
                        </file-information>
                        <file-information>
                            <file-name>ggsn</file-name>
                            <file-directory/>
                            <file-permissions junos:format="drwxrwxrwt">777</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>3</file-links>
                            <file-size>512</file-size>
                            <file-date junos:format="Apr 9   2018">1523325371</file-date>
                        </file-information>
                        <file-information>
                            <file-name>gres-test-point</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>45923</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404337</file-date>
                        </file-information>
                        <file-information>
                            <file-name>ifstraced</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>3593</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>install</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>38733</file-size>
                            <file-date junos:format="Jun 15  2023">1686851634</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>545291</file-size>
                            <file-date junos:format="May 5  12:05">1746471934</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.0.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48136</file-size>
                            <file-date junos:format="May 5  09:30">1746462600</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.1.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48910</file-size>
                            <file-date junos:format="May 5  03:15">1746440100</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.2.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>49115</file-size>
                            <file-date junos:format="May 4  20:30">1746415800</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.3.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48836</file-size>
                            <file-date junos:format="May 4  14:15">1746393300</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.4.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48883</file-size>
                            <file-date junos:format="May 4  07:45">1746369900</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.5.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50489</file-size>
                            <file-date junos:format="May 4  01:15">1746346500</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.6.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48371</file-size>
                            <file-date junos:format="May 3  18:30">1746322200</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.7.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48279</file-size>
                            <file-date junos:format="May 3  12:15">1746299700</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.8.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>48548</file-size>
                            <file-date junos:format="May 3  06:00">1746277200</file-date>
                        </file-information>
                        <file-information>
                            <file-name>interactive-commands.9.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50171</file-size>
                            <file-date junos:format="May 2  23:30">1746253800</file-date>
                        </file-information>
                        <file-information>
                            <file-name>internal-snapshot-logs</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1175</file-size>
                            <file-date junos:format="Mar 19 10:14">1742404447</file-date>
                        </file-information>
                        <file-information>
                            <file-name>inventory</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>127417</file-size>
                            <file-date junos:format="May 5  10:38">1746466726</file-date>
                        </file-information>
                        <file-information>
                            <file-name>ipfd</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>328279</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>ipfd_chk_only</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>136</file-size>
                            <file-date junos:format="May 5  10:38">1746466707</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_chassisd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>20602</file-size>
                            <file-date junos:format="May 5  10:38">1746466706</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_clksyncd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325448</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_cosd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1188</file-size>
                            <file-date junos:format="Apr 9   2018">1523325512</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_dcd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>264</file-size>
                            <file-date junos:format="Apr 9   2018">1523325475</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_dfwd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>14520</file-size>
                            <file-date junos:format="Oct 7   2022">1665141414</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_l2ald</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>9688</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404332</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jam_tnp.bootpd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325440</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jddosd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>55410</file-size>
                            <file-date junos:format="Jan 30 03:27">1738236444</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jinsightd</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Oct 7   2022">1665164638</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_icrq.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>884</file-size>
                            <file-date junos:format="Sep 8   2018">1536397626</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_icrq.log.0</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>884</file-size>
                            <file-date junos:format="Apr 9   2018">1523325904</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_icrq.log.1</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>884</file-size>
                            <file-date junos:format="Apr 9   2018">1523325445</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_icrq.log.2</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325445</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_sccrq.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>861</file-size>
                            <file-date junos:format="Sep 8   2018">1536397626</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_sccrq.log.0</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>861</file-size>
                            <file-date junos:format="Apr 9   2018">1523325904</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_sccrq.log.1</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>861</file-size>
                            <file-date junos:format="Apr 9   2018">1523325445</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jl2tpd_era_lns_sccrq.log.2</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325445</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jmb_log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1263</file-size>
                            <file-date junos:format="Jul 13  2020">1594649603</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jmb_log.0</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>3785</file-size>
                            <file-date junos:format="Jul 13  2020">1594639450</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jnud</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>185</file-size>
                            <file-date junos:format="Apr 9   2018">1523325450</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jsysmon-event.log</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Oct 7   2022">1665164636</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jsysmon.log</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1332542</file-size>
                            <file-date junos:format="May 5  12:04">1746471866</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jsysmon.log.1</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1999816</file-size>
                            <file-date junos:format="Apr 26 18:42">1745718138</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jsysmon.log.2</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1999816</file-size>
                            <file-date junos:format="Apr 13 16:15">1744586136</file-date>
                        </file-information>
                        <file-information>
                            <file-name>jsysmon.log.3</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1999816</file-size>
                            <file-date junos:format="Mar 31 13:50">1743454204</file-date>
                        </file-information>
                        <file-information>
                            <file-name>license</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325477</file-date>
                        </file-information>
                        <file-information>
                            <file-name>license_subs_trace.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>38726</file-size>
                            <file-date junos:format="Mar 19 10:13">1742404410</file-date>
                        </file-information>
                        <file-information>
                            <file-name>lmpd</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>3998</file-size>
                            <file-date junos:format="May 5  10:38">1746466707</file-date>
                        </file-information>
                        <file-information>
                            <file-name>mastership</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>2482231</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404378</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>339134</file-size>
                            <file-date junos:format="May 5  12:05">1746471934</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.0.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>89834</file-size>
                            <file-date junos:format="May 4  17:15">1746404100</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.1.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>87897</file-size>
                            <file-date junos:format="May 2  06:45">1746193500</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.2.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>87186</file-size>
                            <file-date junos:format="Apr 29 14:15">1745961300</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.3.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>87487</file-size>
                            <file-date junos:format="Apr 26 20:30">1745724600</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.4.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>87947</file-size>
                            <file-date junos:format="Apr 24 02:15">1745486100</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.5.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>88013</file-size>
                            <file-date junos:format="Apr 21 08:15">1745248500</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.6.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>71371</file-size>
                            <file-date junos:format="Apr 18 14:00">1745010000</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.7.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>86137</file-size>
                            <file-date junos:format="Apr 16 09:30">1744821000</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.8.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>84816</file-size>
                            <file-date junos:format="Apr 13 02:00">1744534800</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.9.gz</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>87537</file-size>
                            <file-date junos:format="Apr 9  09:45">1744217100</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.icmd</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>23878</file-size>
                            <file-date junos:format="Sep 14  2018">1536958194</file-date>
                        </file-information>
                        <file-information>
                            <file-name>messages.icmd.err</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 9   2018">1523325476</file-date>
                        </file-information>
                        <file-information>
                            <file-name>mgd-api</file-name>
                            <file-permissions junos:format="-rw-r-----">640</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Sep 14  2018">1536958880</file-date>
                        </file-information>
                        <file-information>
                            <file-name>mqtt_broker_chassis.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>daemon</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>4814</file-size>
                            <file-date junos:format="Oct 7   2022">1665164340</file-date>
                        </file-information>
                        <file-information>
                            <file-name>mqtt_broker_lchassis.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>daemon</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>7257</file-size>
                            <file-date junos:format="Oct 7   2022">1665164340</file-date>
                        </file-information>
                        <file-information>
                            <file-name>mqtt_broker_re.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>daemon</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>5210</file-size>
                            <file-date junos:format="Oct 7   2022">1665164340</file-date>
                        </file-information>
                        <file-information>
                            <file-name>na-grpcd</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>588109</file-size>
                            <file-date junos:format="Mar 19 10:15">1742404535</file-date>
                        </file-information>
                        <file-information>
                            <file-name>net-monitord-log</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Oct 7   2022">1665176369</file-date>
                        </file-information>
                        <file-information>
                            <file-name>ntf-agent.log</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>6004</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>op-script.log</file-name>
                            <file-permissions junos:format="-rw-------">600</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>97813</file-size>
                            <file-date junos:format="Jul 13  2020">1594649612</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pcap</file-name>
                            <file-directory/>
                            <file-permissions junos:format="drwxr-xr-x">755</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>2</file-links>
                            <file-size>512</file-size>
                            <file-date junos:format="Oct 7   2022">1665164635</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pfe_flow_stats.txt</file-name>
                            <file-permissions junos:format="-rw-rw----">660</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>886</file-size>
                            <file-date junos:format="Mar 19 10:17">1742404646</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pfe_flow_stats.txt.0</file-name>
                            <file-permissions junos:format="-rw-rw-rw-">666</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50</file-size>
                            <file-date junos:format="Oct 7   2022">1665141761</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pfe_flow_stats.txt.1</file-name>
                            <file-permissions junos:format="-rw-rw-rw-">666</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50</file-size>
                            <file-date junos:format="Aug 26  2022">1661572108</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pfe_flow_stats.txt.2</file-name>
                            <file-permissions junos:format="-rw-rw-rw-">666</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50</file-size>
                            <file-date junos:format="Aug 10  2022">1660136266</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pfe_flow_stats.txt.3</file-name>
                            <file-permissions junos:format="-rw-rw-rw-">666</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50</file-size>
                            <file-date junos:format="Aug 10  2022">1660126669</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pgmd</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>50</file-size>
                            <file-date junos:format="Apr 9   2018">1523325448</file-date>
                        </file-information>
                        <file-information>
                            <file-name>pm_longterm.txt</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>253448</file-size>
                            <file-date junos:format="Apr 9   2018">1523325448</file-date>
                        </file-information>
                        <file-information>
                            <file-name>rtspd</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>3427</file-size>
                            <file-date junos:format="May 5  10:38">1746466714</file-date>
                        </file-information>
                        <file-information>
                            <file-name>shmlog</file-name>
                            <file-directory/>
                            <file-permissions junos:format="drwxr-xr-x">755</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>25</file-links>
                            <file-size>1536</file-size>
                            <file-date junos:format="Oct 7   2022">1665176370</file-date>
                        </file-information>
                        <file-information>
                            <file-name>utx.lastlogin</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>788</file-size>
                            <file-date junos:format="May 5  11:17">1746469053</file-date>
                        </file-information>
                        <file-information>
                            <file-name>utx.log</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>56053</file-size>
                            <file-date junos:format="May 5  11:37">1746470279</file-date>
                        </file-information>
                        <file-information>
                            <file-name>vmhost</file-name>
                            <file-permissions junos:format="-rw-rw-rw-">666</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>1778</file-size>
                            <file-date junos:format="Jun 12  2024">1718228024</file-date>
                        </file-information>
                        <file-information>
                            <file-name>vmhost_host_app_alarm_failed_daemons</file-name>
                            <file-permissions junos:format="-rw-r--r--">644</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Mar 19 10:12">1742404329</file-date>
                        </file-information>
                        <file-information>
                            <file-name>wtmp</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>0</file-size>
                            <file-date junos:format="Apr 23 19:15">1745460900</file-date>
                        </file-information>
                        <file-information>
                            <file-name>wtmp.0.gz</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>27</file-size>
                            <file-date junos:format="Apr 23 19:00">1745460000</file-date>
                        </file-information>
                        <file-information>
                            <file-name>wtmp.1.gz</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>27</file-size>
                            <file-date junos:format="Mar 24 19:45">1742870700</file-date>
                        </file-information>
                        <file-information>
                            <file-name>wtmp.2.gz</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>27</file-size>
                            <file-date junos:format="Mar 24 19:30">1742869800</file-date>
                        </file-information>
                        <file-information>
                            <file-name>wtmp.3.gz</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>27</file-size>
                            <file-date junos:format="Feb 22 19:15">1740280500</file-date>
                        </file-information>
                        <file-information>
                            <file-name>wtmp.4.gz</file-name>
                            <file-permissions junos:format="-rw-rw-r--">664</file-permissions>
                            <file-owner>root</file-owner>
                            <file-group>wheel</file-group>
                            <file-links>1</file-links>
                            <file-size>27</file-size>
                            <file-date junos:format="Feb 22 19:00">1740279600</file-date>
                        </file-information>
                        <total-files>120</total-files>
                    </directory>
                </directory-list>
            </lwc-output>
        </data>
    </dataset>
</lwc>`;

export function jsasLwcDd1720an0080101023520250505t190548(device) {
  return renderDevicePayload(PAYLOAD, device);
}
