---
title: Transport layer
date: 2023-01-31T00:38:07+08:00
tags:
  - spark
  - knowledge
---

The third layer in the [[internet-protocol-suite|internet protocol suite]]. Mainly used to provide end-to-end communication services for applications and is more focused on connection-oriented communications. Where required, the protocol segments data into smaller segments and reassembles the segments at the receiving host.

Several protocols employed in the transport layer include the:
- [[transmission-control-protocol|Transmission Control Protocol (TCP)]]; and
- [[user-datagram-protocol|User Datagram Protocol (UDP)]].

# Port numbers

In both TCP and UDP, port numbers play an important role as they identify the application protocols by port numbers. Ports cannot be occupied by two applications at the same time, and therefore must be ordered and kept track of.

Well-known ports are often reserved for the different protocols. These ports usually serve critical networking applications (e.g., [[technology/networking/hypertext-transfer-protocol|HTTP]]) and therefore need to be standardised across devices. Some of these ports include:
- 80 for [[technology/networking/hypertext-transfer-protocol|HTTP]];
- 21 for [[technology/networking/file-transfer-protocol|FTP]];
- 22 for [[technology/networking/secure-shell|SSH]];
- 23 for [[technology/networking/telnet|telnets]];
- 53 for [[technology/networking/domain-name-system|DNS]]; and
- 443 for [[technology/networking/hypertext-transfer-protocol|HTTPS]].
