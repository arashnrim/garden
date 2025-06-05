---
title: Internet Protocol address
date: 2023-01-30T09:47:27+08:00
tags:
  - spark
  - knowledge
---

An 4-byte (i.e., 32-bit) identifier for a network device typically assigned by another more prominent network device that identifies the device in the network using the [[internet-protocol|internet protocol]]. Typically has two components to it, namely the:
- network identifier; and
- host identifier.

Usually expressed in a decimal format of a byte per section, separated by periods. IP addresses therefore range from 0.0.0.0 to 255.255.255.255 (256 values per byte).

# IP address classes

IP addresses have different classifications based on the how many bits the network identifier occupies. There are in particular three classes, namely:
- Class A addresses (1-byte network addresses, ranging from 0.0.0.1 to 127.255.255.254);
- Class B addresses (2-byte network addresses, ranging from 128.0.0.1 to 191.255.255.254); and
- Class C addresses (3-byte network addresses, ranging from 192.0.0.1 to 223.255.255.254).

For each class, the very first and last address are used specially for identifying the network and broadcasting. For example, for a range of 192.168.1.0 to 192.168.1.255, 192.168.1.0 is used for identifying the network and 192.168.1.255 is used for broadcasting. The rest is usable by other network devices.

# Private IP addresses

Usually just used in internal networks. Not routable through the internet and will therefore not work in the internet, and must be converted to a public IP address instead. Each IP address class has a range dedicated to private IP addresses, namely:
- 10.0.0.0 to 10.255.255.255 for Class A addresses;
- 172.16.0.0 to 172.31.255.255 for Class B addresses; and
- 192.168.0.0 to 192.168.255.255 for Class C addresses.

To translate or map a private address to or fro a public address, [[network-address-translation|network address translation (NAT)]] can be used.

# Assignment of IP addresses

IP addresses can be static or dynamic, and they are assigned via the [[dynamic-host-configuration-protocol|Dynamic Host Configuration Protocol (DHCP)]].

# Binding of IP address with [[media-access-control-address|MAC address]]

IP addresses are often bound together with MAC addresses via the [[address-resolution-protocol|Address Resolution Protocol (ARP)]] and, in the past, the Reverse Address Resolution Protocol (RARP).