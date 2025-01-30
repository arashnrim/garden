---
title: Dynamic Host Configuration Protocol
date: 2023-01-30T10:09:55+08:00
tags:
  - spark
---

A protocol typically employed in the provision and assignment of [[technology/networking/internet-protocol-address|IP addresses]]. It allows a host to obtain an IP address dynamically without the network administrator having to set up an individual profile for the host.

# Process

The entire process for address assignment can be abbreviated to DORA, which stands for:
1. discovery, where as hosts come online, they contact the DHCP server and make themselves known;
2. offer, where the DHCP selects an available address and offers the address to the host;
3. request, where the host confirms and requests the lease of the address; and
4. acknowledgement, where the DHCP confirms the lease for a certain time duration and acknowledges the request.
