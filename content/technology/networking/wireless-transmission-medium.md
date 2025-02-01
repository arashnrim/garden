---
title: Wireless transmission medium
date: 2023-02-08T17:15:44+08:00
tags:
  - spark
  - knowledge
---

The method of transmitting data through wireless means. Uses radio frequencies to transmit data. The most common standard in today's world used is Wi-Fi by the Wi-Fi Alliance.

As with other radio communication, wireless transmission mediums work in a two-way system with a transmitter (wireless [[technology/networking/network-interface-controller|NIC]]) and receiver. Two frequent hardware devices enabling wireless transmission include the [[technology/networking/wireless-access-point|wireless access point]] and [[technology/networking/residential-gateway|residential gateway]].

# Wireless [[technology/networking/area-networks#Local area network|LAN]]

A computer network that links two or more devices using a wireless connection to form a local area network[^1]. Most WLANs today conform to the [[technology/networking/ieee-802.11|IEEE 802.11]] standard.

## Parameters
Typically has several parameters that must be specified, namely the:
- [[#Service set identifier|service set identifier (SSID)]];
- [[#Frequency channel|frequency channel]];
- [[#Frequency band|frequency band]];
- [[#Security type|security type]];
- encryption type; and
- other miscellaneous parameters, including:
	- the host's [[technology/networking/internet-protocol-address||IP address]]; and
	- a [[technology/networking/media-access-control-address|MAC address]] filter list.

### Service set identifier
A case-sensitive text string that uniquely identifies a service set (i.e., WLAN). Comprises of a sequence of alphanumeric characters up to 32 characters. Usually broadcasted by the AP to all wireless devices in the coverage range.

### Frequency channel
A portioned range in the radio frequencies occupied by WLANs. Adjacent WLANs should use different frequency channels to prevent interference with each other. Usually automatically selected by the AP.

### Frequency band
The interval in the frequency domain used. In the context of Wi-Fi networks, depending on which generation of Wi-Fi the network operates in, the band may be 2.4 GHz, 5 GHz, or 6 GHz.

Higher-numbered bands enjoy better performance, have less proneness to interference, and offer more non-overlapping channels. They are, however, disadvantaged in range as they cover a shorter range than their lower-numbered counterparts.

### Security type
The protocol used to maintain security within the WLAN. Can be open, meaning there is no authentication and encryption. If using the Wi-Fi standard, [[technology/networking/wired-equivalent-privacy|Wired Equivalent Privacy (WEP)]] (now obsolete) and [[technology/networking/wi-fi-protected-access|Wi-Fi Protected Access (WPA)]] are additional types to secure the network.

## Roaming
A term used on clients that refer to surveying radio frequencies and finding an AP that provides better service (i.e., has a stronger signal or higher data rate) when moving from one point to another.

APs should share the same SSID, authentication, and encryption, with channels being different.

[^1]: See [[technology/networking/network|network]].
