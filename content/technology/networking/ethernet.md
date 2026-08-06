---
title: Ethernet
date: 2023-02-08T16:09:58+08:00
tags:
  - spark
  - knowledge
---

A [[wired-transmission-medium|wired transmission]] family of technologies frequently adapted for data transfer across the internet. Exists in the physical layer of the [[open-systems-interconnection-model|OSI model]]. Has two main implementations: Fast Ethernet (obsolete) and Gigabit Ethernet (current).

# Standards

Ethernet has different classifications for the cabling used, in line with that of the cable types associated with [[twisted-pair-cable|twisted pair cables]]. The table below summarises the main differences:

| Fast Ethernet layer |  Transmission rate | Cable type | Maximum distance |
|:-:|:-:|:-:|:-:|
| 100BASE-TX | 100 Mbps | UTP (Cat 5) | 100 metres |
| 100BASE-FX | 100 Mbps | Optical fibre (multi-mode) | 400 metres (half-duplex); 2 kilometres (full duplex) |
| 1000BASE-T | 1 Gbps | UTP (Cat 5e/6) | 100 metres |
| 1000BASE-TX | 1 Gbps | UTP (Cat 6) | 100 metres |
| 1000BASE-SX | 1 Gbps | Optical fibre (multi-mode) | 550 metres |
| 1000BASE-LX | 1 Gbps | Optical fibre (both modes) | 550 metres (multi-mode); 5 kilometres (single-mode) |

## Nomenclature
For each layer's name, there is a nomenclature that the layer's name abides to. In general, the designation has the following structure:
<div style="text-align: center">
XXXXYYYY-ZN
</div>
where:
- XXXX refers to the transmission rate (e.g., 100, 1000, 10G)
- YYYY refers to either BASE, BROAD, or PASS where:
	- BASE refers to baseband signaling;
	- BROAD refers to broadband signalling; and
	- PASS refers to passband signalling; and
- Z refers to either one of the following where:
	- T refers to twisted pair;
	- F refers to optical fibre (various wavelengths);
	- S refers to optical fibre (multi-mode, 850 nm short wavelength);
	- L refers to optical fibre (usually single-mode, 1300 nm long wavelength);
	- T1 refers to single-pair twisted pair;
	- E or Z refers to optical fibre (single-mode, 1500 nm extra long wavelength);
	- B refers to optical fibre (usually single-mode, bidirectional) using WDM;
	- P refers to optical fibre (passive); and
	- H refers to plastic optical fibre.
- N refers to the PCS encoding method where:
	- X refers to an 8b/10b or 4B5B block encoding; and
	- R refers to large block encoding.

# Type II Ethernet Frame

![[type-ii-ethernet-frame.png]]

A [[open-systems-interconnection-model|data link]] protocol data unit that includes information about a particular packet. Spans between 64 and 1518 bytes. Has three primary components to it, namely the:
- [[media-access-control|MAC]] header spanning 14 bytes (6 + 6 + 2), including the:
	- destination [[media-access-control-address|MAC address]];
	- source MAC address; and
	- EtherType (used to indicate which protocol is encapsulated in the payload);
- payload spanning 46 to 1500 bytes; and
- CRC checksum spanning 4 bytes.