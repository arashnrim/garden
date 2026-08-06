---
title: Internet protocol suite
date: 2023-01-31T00:30:41+08:00
tags:
  - spark
  - knowledge
---

A framework for organising the set of communication protocols used in the internet and similar networks. Also commonly known as the [[transmission-control-protocol|TCP]]/[[internet-protocol|IP]] protocol suite.

The suite is somewhat similar to, but is not necessarily the same, as the [[open-systems-interconnection-model|OSI model]]. Originally has four layers in total, namely the:
1. network interface layer, including data link and physical interfaces (e.g., [[ethernet|Ethernet]] and [[wireless-transmission-medium#Wireless LAN|wireless LAN]]);
2. [[internet-layer|internet layer]], including interfaces that connect to the internet (e.g., the [[internet-protocol|IP]]);
3. [[transport-layer|transport layer]], including interfaces responsible for transport (e.g., [[transmission-control-protocol||TCP]], [[user-datagram-protocol|UDP]], and port numbers); and
4. application layer, includding applications that use the internet (e.g., [[technology/networking/hypertext-transfer-protocol|HTTP]], [[dynamic-host-configuration-protocol|DHCP]], [[technology/networking/domain-name-system|DNS]] and FTP).

Modern implementations of the TCP/IP protocol suite extends the model to include one more layer, the physical layer, and amends existing layers. The modern suite has five layers in total, namely the:
1. physical layer, including how data is physically transmitted (e.g., [[twisted-pair-cable#Categories|UTP cables]], optical fibre cables and radio frequencies);
2. data link layer, including the interfaces transmitting data (e.g., Ethernet and wireless LAN);
3. [[internet-layer|internet layer]];
4. [[transport-layer||transport layer]]; and
5. application layer.