---
title: Homelabbing
date: 2025-06-06
tags:
  - spark
  - projects
---
A home lab is an environment consisting of running servers, services, and infrastructure setups at home, usually created as a form of exploration or interest. Homelabbing taps into the personal setups already readily available at home (networks and devices).

I currently have an extremely basic homelab, with plans to expand even further and explore interesting tech in the time to come!

![[homelab.png]]

# Setup

* Raspberry Pi 4 Model B (active)
	* 64-bit ARM Cortex-A72
	* 4 GB LPDDR4-3200 SDRAM
	* 32 GB microSD internal storage; 1 TB HDD external storage
* Mac mini (not onboarded)
	* 64-bit Apple M2
	* 16 GB LPDDR5-6400 SDRAM
	* 256 GB SSD internal storage
* Lenovo ThinkCentre M910q (not onboarded)
	* 64-bit Intel Core i5-6500T
	* 8 GB PC4-2400T (DDR4-2400) RAM
	* 256 GB SSD internal storage
* Custom-built PC (primary device)
	* 64-bit Intel Core i5-13500
	* 32 GB DDR4-3600 RAM
	* 1 TB + 1 TB SSD internal storage
	* 8 GB NVIDIA RTX 3070 Ti

# Current plans

1. Onboard Mac mini into setup
	- Prepare separate home lab user — still want to be able to use the Mac regularly as a desktop
2. Source and install upgraded memory and storage devices for ThinkCentre
	* 8 GB DDR4-2400 → ~16+ GB DDR4-2400
	* 256 GB → ~1 TB
3. Onboard ThinkCentre into setup
	1. Read more about [Proxmox VE](https://proxmox.com/en/products/proxmox-virtual-environment/overview) and virtualisation
	2. Prepare and install Proxmox VE as main interface
