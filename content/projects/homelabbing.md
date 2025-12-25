---
title: Homelabbing
date: 2025-06-06
tags:
  - spark
  - projects
---
A home lab is an environment consisting of running servers, services, and infrastructure setups at home, usually created as a form of exploration or interest. Homelabbing taps into the personal setups already readily available at home (networks and devices).

> [!abstract] The state of things
> 
> **What's the setup like now?** A control plane federation
> - Portainer Server is running on one device, with Portainer Agents in other devices feeding back to it
> - The Server instance is able to control the Docker Engines within each other device, but the devices' Engines are not connected (i.e. in an orchestrated manner, using a stack like Docker Swarm/Kubernetes)

I currently have an extremely basic homelab, with plans to expand even further and explore interesting tech in the time to come!

# Overview

The two diagrams below that show different aspects of the home lab:

![[homelab-service-access-flow.png]]

The **service access diagram** (above) shows the way an externally-connected device, such as my phone on the go, can connect to and access the services running on my home lab through external vendors that help bridge the home lab node to the Internet.

The device can connect to a service through two means: public-facing (accessing a domain like `XXX.arash.codes`) in which the request is routed through Cloudflare's network (including its DNS records resolver and Tunnels) and internally in which the request is routed through Tailscale.

- The consideration for using two different methods lie in security: services that shouldn't or doesn't need to be exposed to the entire internet (e.g. Portainer for handling Docker containers) are exposed internally through Tailscale. Services that should be accessible by other apps or for convenience (e.g. Joplin) will be exposed through Cloudflare.


![[homelab-network.png]]

The **network diagram** (above) shows a technical overview of how my home lab nodes are connected to the internet. The flow follows a conventional set up for a home network, with the ISP connected to the household using a fibre optic cable that terminates at an ONT before the rest of the network is connected via Ethernet and Wi-Fi after the router.

- A key highlight in this network configuration is the use of [carrier-grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT) (CGNAT). CGNAT allows internet service providers (ISPs) to share a single public IP address between many customers often with cost- and resource-saving benefits. This causes several issues:
	- Port forwarding is not supported, meaning conventional means of allowing external internet traffic into the home network is no longer supported. Found this out the hard way a long time ago when trying to set up a Minecraft server to no avail.
	- Dynamic DNS, an alternative method to port forwarding, also is not supported.
	- Accessing services within the network becomes harder, and alternatives (e.g. Tailscale and Cloudflare Tunnels) have to be looked into to access services from the internet.


> [!info] Additional resources
> 
> - [GitHub repo for setup + config files](https://github.com/arashnrim/homelab)

# Setup

* Raspberry Pi 4 Model B (active)
	* 64-bit ARM Cortex-A72 [[central-processing-unit|CPU]]
	* 4 GB LPDDR4-3200 SD[[random-access-memory|RAM]]
	* 32 GB microSD internal storage; 1 TB HDD external storage
* Mac mini (active)
	* 64-bit Apple M2 [[central-processing-unit|CPU]]
	* 16 GB LPDDR5-6400 SD[[random-access-memory|RAM]]
	* 256 GB SSD internal storage
* Lenovo ThinkCentre M910q (active)
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
| Bento PDF                                                       | PDF management suite          | Docker Compose | Mac mini     | Active (experimenting) |
| Stirling PDF                                                    | PDF management suite          | Docker Compose | Mac mini     | Active (experimenting) |
| n8n                                                             | Workflow automation           | Docker Compose | Mac mini     | Active (in use)        |
| Open WebUI                                                      | LLM interaction               | Docker         | Mac mini     | Active (in use)        |
| Paperless-ngx                                                   | Physical paper scanning       | Docker Compose | Mac mini     | Active (in use)        |
| Portainer Agent                                                 | Docker management             | Docker         | Mac mini     | Active (in use)        |
| Umami                                                           | Analytics                     | Docker Compose | Mac mini     | Active (in use)        |
| [5.0 GPA Student](https://github.com/arashnrim/5.0-gpa-student) | Discord bot                   | Docker         | Raspberry Pi | Active (in use)        |
| Portainer Agent                                                 | Docker management             | Docker         | Raspberry Pi | Active (in use)        |
| Radicale                                                        | CalDAV and CardDAV management | Docker Compose | Raspberry Pi | Active (in use)        |
| Shlink                                                          | Link shortening               | Docker Compose | Raspberry Pi | Inactive (shut down)   |
| Ghostfolio                                                      | Financial planning            | Docker Compose | ThinkCentre  | Active (experimenting) |
| Linkwarden                                                      | Bookmarks management          | Docker Compose | ThinkCentre  | Active (experimenting) |
| SearXNG                                                         | Metasearch engine             | Docker Compose | ThinkCentre  | Active (experimenting) |
| Wakapi                                                          | Time tracking for coding      | Docker Compose | ThinkCentre  | Active (experimenting) |
| Firefly III                                                     | Financial planning            | Docker Compose | ThinkCentre  | Active (in use)        |
| Joplin Server                                                   | Note-taking                   | Docker Compose | ThinkCentre  | Active (in use)        |
| Portainer                                                       | Docker management             | Docker         | ThinkCentre  | Active (in use)        |
| Uptime Kuma                                                     | Uptime tracking               | Docker Compose | ThinkCentre  | Active (in use)        |
| Portainer Agent                                                 | Docker management             | Docker         | ThinkCentre  | Inactive (shut down)   |

# Current plans

## Architectural

- ~~Explore container orchestration with either Kubernetes (k8s) or Docker Swarm~~ (scrapped; see [[homelabbing#22 November 2025|below]]
	- Currently, the home lab is preliminarily linked through instances of Portainer Agent and an instance of Portainer Server (running on the Pi) that allows me to interact with the Docker Engine of all three (Pi, PC, and Mac) devices — though somewhat connected this way, each system is still isolated

## Onboarding

- ~~Onboard Mac mini into setup~~ (done!)
	- Prepare separate home lab user — still want to be able to use the Mac regularly as a desktop
		- The setup for doing this seems more complicated such that the technicality overweighs the convenience. I've opted to installing [OrbStack](https://orbstack.dev) alongside the current default user instead of going with a separate home lab user
2. Source and install upgraded memory and storage devices for ThinkCentre
	* 8 GB DDR4-2400 → ~16+ GB DDR4-2400
	* 256 GB → ~1 TB
3. ~~Onboard ThinkCentre into setup~~ (done!)
	1. ~~Read more about [Proxmox VE](https://proxmox.com/en/products/proxmox-virtual-environment/overview) and virtualisation~~
	2. ~~Prepare and install Proxmox VE as main interface~~
	- I made a conscious decision to switch to Debian instead of Proxmox; the latter is currently a bit too overkill, and trying to learn it is making my head hurt. Why not stick to something I'm comfortable with for the time being?
4. ~~Offload services on the Raspberry Pi to the ThinkCentre~~ (done!)
	- The only service left that remains is a Dockerised Discord bot that can be safely shut down (no users at this time...)

# Devlog

## 26 December 2025

- I must admit that I've been falling down an n8n rabbit hole ever since I truly started playing with it last weekend. I'm now combining many different sub-workflows with an LLM agent to make a cute yet helpful assistant that can do loads of things, from:
	- Checking up on the state of my home lab (including pinging, seeing if they're connected to the Tailnet, and checking the uptime status of some services)
	- Searching up up-to-date information on the internet using SearXNG and "factual" (enough) information from Wikipedia
	- Interacting with my saved links in Linkwarden, giving an overview on my ever-growing pile of links to read through and give insights/suggestions on what to read next
	- Fetching my calendar and viewing events from there (not really full CRUD yet though!)
- And there surely will be more to come in the next few days. RIP to my sleep schedule.

## 21 December 2025

- Came across a video from Tailscale that shows a working implementation of Cloudflare DNS with a tailnet, effectively creating a private intranet of public domain names accessible only by authenticated devices connected to the tailnet ([video here](https://youtu.be/Vt4PDUXB_fg?si=uLMY1mb1eWwqBFtk)). Seems pretty interesting, will give it a try!
	- I walk away with my head low as some networking issue throws itself at me once again. I'll try it again when I have the time!

## 13 December 2025

- Came across Pangolin as a potential alternative to Tailscale, and the idea of switching seems pretty promising solely based on what I've been seeing so far:
	- Increasing adoption within home lab users with a considerable majority saying that their experience has been positive
	- Another OSS is another win in my books!
- Also finally started looking at establishing a back up system for all crucial services (i.e. Paperless, Portainer, etc.)
	- Came across `launchd` as macOS' preferred scheduling system over `cron`, so I'm seeing if I can schedule a back-up script to be run once in a while to automatically copy over files to the Raspberry Pi HDD (which is in itself being backed up to Google Drive using `rclone`). Backing up magic in progress!

## 11 December 2025

- Finally took me a long time, but I finally opted to switch over to using keys instead of password authentication for SSH connections between the devices in my home lab. It makes things a lot more seamless — no more having to enter passwords everywhere anymore once SSH keys are set up!

## 8 December 2025

- Awkward story, but... I've accidentally nuked my Debian WSL instance off the face of my Windows PC, so I'm currently planning to cut back on the PC's involvement in the home lab for now. Never let a Stack Overflow answer tell you to run the `--unregister` flag before reading the comment belows it that says "yes, this sets up a new instance of Debian"
	- Docker Desktop is running with the WSL2 integration enabled, meaning that the deletion of the Debian distro entirely messes up Docker. I've currently fixed that problem by pretending Docker doesn't exist and nuking it off my PC, too
- Since WSL2 is now gone, I've opted to running the main development version of this digital garden on GitHub Codespaces. The main issue now lies with somehow trying to get the source content folder on my Windows PC synced with the Codespaces one
	- Found a solution that involves using the GitHub CLI — `gh codespace cp` allows us to use `scp` to transfer items; I've used `doskey` to create `delta-sync`, a macro of sorts that copies over the contents of my source content folder onto the Codespace one
		- Nevermind, `doskey` only somehow persists macros for the current active terminal instance; if you open another one, the macro cannot be called again. I'll need to figure out some alternative for this to work...
- Realised a solution to a semi-long-term issue that's been plaguing the Open WebUI instance running on the Mac. For the longest time, Open WebUI experiences network connectivity issues reaching out to the Ollama instance running on the Windows PC using the internal IP address (`http://192.168.X.XXX:11434`); a temporary workaround has been to use Cloudflare Tunnels to expose Ollama, but I think some Cloudflare magic places a timeout counter such that the connection will terminate after a while (not ideal for LLM tasks, which usually take a while to complete)
	- The solution was to allow Local Networks permissions to OrbStack on macOS. This was something I missed out on a while back, and since I hardly access my Mac by remote connecting into it, I couldn't notice the issue sooner
- Finally migrated the main Portainer CE instance from the Raspberry Pi to the ThinkCentre. It was a lot more tedious because of the mismatch in the backup data, but seems like we're all good for now?

## 22 November 2025

- Learnt more about the concept of orchestration with interactions from LLMs, and decided that orchestration isn't the right path for this home lab (booooo, I'll catch any tomatoes you throw at me)
	- Orchestration frameworks assume fungible compute resources (meaning that it doesn't care *where* things run, just that it *runs*). This clashes with the current infrastructure I have, where each node (device) in the infra is purpose-built — the Pi is the low-power and always-on coordinator, the Mac is the mid-tier workhorse, etc.
	- Though orchestration is something I'd like to learn *one day*, today might just complicate things more and add more overhead
	- Orchestration might be incompatible with Cloudflare Tunnels, where routes through tunnels are statically mapped; i.e., `subdomain.example.com` will always be mapped to `device-A:port` — practically incompatible with orchestration frameworks that can spawn replicas on any device in the cluster
- Curious about [Ansible](https://www.redhat.com/en/ansible-collaborative?intcmp=7015Y000003t7aWQAQ) and the idea of automating the provisioning (setting up) of devices
	- Might be handy to always ensure that Docker is installed on future devices with Watchtower set up!

## 20 June 2025

- Figured out Samba and managed to get a Samba share working from the external 1 TB HDD connected to the Pi (USB) to the other devices in the home network!
- Came across Radicale and thought it can replace my current contacts + calendar back-up implementation (running on [Wölkli](https://woelkli.com)'s hosted Nextcloud instance)
	- Managed to get Radicale working and ported over all my contact + calendar information successfully
