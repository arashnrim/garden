---
title: Address Resolution Protocol
date: 2023-01-31T00:23:38+08:00
tags:
  - spark
---

Used to discover the [[technology/networking/media-access-control-address|MAC address]] of a device given its [[technology/networking/internet-protocol-address|IP address]]. There are particularly two parts to the ARP protocol, namely the request and response.

# Process

1. A host or router that needs to find the MAC address of another host or router on the network creates an ARP query packet which includes:
	- the sender's MAC and IP address; and
	- the receiver's IP address.
2. The created packet gets broadcasted over the network to other hosts or routers.
3. Every host or router receives the packet, but the host or router with the receiver's IP address creates a reply packet that includes its MAC address. This is then sent back to the initiating host or router.
