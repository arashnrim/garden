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

> [!info] Additional resources
> 
> - [GitHub repo for setup + config files](https://github.com/arashnrim/homelab)

# Setup

* Raspberry Pi 4 Model B (active)
	* 64-bit ARM Cortex-A72 [[central-processing-unit|CPU]]
	* 4 GB LPDDR4-3200 SD[[random-access-memory|RAM]]
	* 32 GB microSD internal storage; 1 TB HDD external storage
* Mac mini (not onboarded)
	* 64-bit Apple M2 [[central-processing-unit|CPU]]
	* 16 GB LPDDR5-6400 SD[[random-access-memory|RAM]]
	* 256 GB SSD internal storage
* Lenovo ThinkCentre M910q (not onboarded)
	* 64-bit Intel Core i5-6500T [[central-processing-unit|CPU]]
	* 8 GB PC4-2400T (DDR4-2400) [[random-access-memory|RAM]]
	* 256 GB SSD internal storage
* Custom-built PC (primary device)
	* 64-bit Intel Core i5-13500 [[central-processing-unit|CPU]]
	* 32 GB DDR4-3600 [[random-access-memory|RAM]]
	* 1 TB + 1 TB SSD internal storage
	* 8 GB NVIDIA RTX 3070 Ti

## Current services

| Application                                                     | Usage                         | Tech           | Host         | Status                 |
| :-------------------------------------------------------------- | :---------------------------- | :------------- | :----------- | :--------------------- |
| Joplin Server                                                   | Note-taking                   | Docker Compose | Raspberry Pi | Active (in use)        |
| Shlink                                                          | Link shortening               | Docker Compose | Raspberry Pi | Active (in use)        |
| [5.0 GPA Student](https://github.com/arashnrim/5.0-gpa-student) | Discord bot                   | Docker         | Raspberry Pi | Active (in use)        |
| Portainer Agent                                                 | Docker management             | Docker         | Raspberry Pi | Active (unused)        |
| Radicale                                                        | CalDAV and CardDAV management | Docker Compose | Raspberry Pi | Active (in use)        |
| Portainer                                                       | Docker management             | Docker         | Raspberry Pi | Active (in use)        |
| Portainer Agent                                                 | Docker management             | Docker         | PC           | Active (in use)        |
| Portainer Agent                                                 | Docker management             | Docker         | Mac mini     | Active (in use)        |
| Open WebUI                                                      | LLM interaction               | Docker         | Mac mini     | Active (in use)        |
| Paperless-ngx                                                   | Physical paper scanning       | Docker Compose | Mac mini     | Active (experimenting) |

# Current plans

- ~~Onboard Mac mini into setup~~ (Done!)
	- Prepare separate home lab user — still want to be able to use the Mac regularly as a desktop
		- The setup for doing this seems more complicated such that the technicality overweighs the convenience. I've opted to installing [OrbStack](https://orbstack.dev) alongside the current default user instead of going with a separate home lab user
2. Source and install upgraded memory and storage devices for ThinkCentre
	* 8 GB DDR4-2400 → ~16+ GB DDR4-2400
	* 256 GB → ~1 TB
3. Onboard ThinkCentre into setup
	1. Read more about [Proxmox VE](https://proxmox.com/en/products/proxmox-virtual-environment/overview) and virtualisation
	2. Prepare and install Proxmox VE as main interface

# Devlog

## 20 June 2025

- Figured out Samba and managed to get a Samba share working from the external 1 TB HDD connected to the Pi (USB) to the other devices in the home network!
- Came across Radicale and thought it can replace my current contacts + calendar back-up implementation (running on [Wölkli](https://woelkli.com)'s hosted Nextcloud instance)
	- Managed to get Radicale working and ported over all my contact + calendar information successfully
