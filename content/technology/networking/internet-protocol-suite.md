---
title: Internet protocol suite
date: 2023-01-31T00:30:41+08:00
tags:
  - spark
---

A framework for organising the set of communication protocols used in the internet and similar networks. Also commonly known as the [[technology/networking/transmission-control-protocol|TCP]]/[[technology/networking/internet-protocol|IP]] protocol suite.

The suite is somewhat similar to, but is not necessarily the same, as the [[technology/networking/open-systems-interconnection-model|OSI model]]. Originally has four layers in total, namely the:
1. network interface layer, including data link and physical interfaces (e.g., [[technology/networking/ethernet|Ethernet]] and [[technology/networking/wireless-transmission-medium#Wireless LAN|wireless LAN]]);
2. [[technology/networking/internet-layer|internet layer]], including interfaces that connect to the internet (e.g., the [[technology/networking/internet-protocol|IP]]);
3. [[technology/networking/transport-layer|transport layer]], including interfaces responsible for transport (e.g., [[technology/networking/transmission-control-protocol||TCP]], [[technology/networking/user-datagram-protocol|UDP]], and port numbers); and
4. application layer, includding applications that use the internet (e.g., [[technology/networking/hypertext-transfer-protocol|HTTP]], [[technology/networking/dynamic-host-configuration-protocol|DHCP]], [[technology/networking/domain-name-system|DNS]] and FTP).

Modern implementations of the TCP/IP protocol suite extends the model to include one more layer, the physical layer, and amends existing layers. The modern suite has five layers in total, namely the:
1. physical layer, including how data is physically transmitted (e.g., [[technology/networking/twisted-pair-cable#Categories|UTP cables]], optical fibre cables and radio frequencies);
2. data link layer, including the interfaces transmitting data (e.g., Ethernet and wireless LAN);
3. [[technology/networking/internet-layer|internet layer]];
4. [[technology/networking/transport-layer||transport layer]]; and
5. application layer.