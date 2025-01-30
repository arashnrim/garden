---
title: Transmission Control Protocol
date: 2023-01-31T00:42:19+08:00
tags:
  - spark
---

A connection-oriented protocol under the [[technology/networking/transport-layer|transport layer of the internet protocol suite]]. Connections made by the TCP are established prior to data transfer, maintained throughout the data exchange, and then terminated at the end of the communication.

Provides reliable data transfers using acknowledgements, error detection, and recovery.

Common applications that use the TCP include:
- the [[technology/networking/hypertext-transfer-protocol|Hypertext Transfer Protocol (HTTP)]];
- the [[technology/networking/file-transfer-protocol|File Transfer Protocol (FTP)]];
- [[technology/networking/telnet|telnets]];
- the [[technology/networking/simple-mail-transfer-protocol|Simple Mail Transfer Protocol (SMTP)]]; and
- the [[technology/networking/post-office-protocol|Post Office Protocol (POP)]].

# Header

Refers to additional metadata that is required to ensure the proper transmission of the data to the relevant destination. Has 11 fields to it, namely the:
- source port spanning 16 bits;
- destination port spanning 16 bits;
- sequence number spanning 32 bits;
- acknowledgement number spanning 32 bits;
- data offset spanning 4 bits;
- reserved spanning 3 bits;
- flags spanning 9 bits and contain specific components:
	- URG (urgent pointer);
	- ACK (acknowledgement);
	- PSH (push);
	- RST (reset);
	- SYN (synchronise?);
	- FIN (finish);
- window spanning 16 bits;
- checksum spanning 16 bits;
- urgent pointer spanning 16 bits; and
- options, an optional field spanning between 0 and 320 bits.