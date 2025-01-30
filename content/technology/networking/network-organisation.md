---
title: Network organisation
date: 2023-01-09T09:47:48+08:00
tags:
  - spark
---

A network can differ in terms of the roles each device plays in the network. Generally, devices in a network can take up any of two roles:

- a client — a network device initiating a connection to a server requesting for resources and services to perform operations; or
- a server — a network device that shares resources and responds to requests from devices and other servers on the network.

Servers often need a lot of computing power as they need to be able to respond to many requests from many devices at once.

A network can be organised in two ways:

- a client-server network; or
- a peer-to-peer network.

# Client-server network

An architecture that has one or more higher-capacity computer acting as servers and other computers acting as clients.

- `[+]` Allows the centralised control of data and resources
- `[+]` It is easy to schedule backups of all shared files at regular intervals as only a few computers at most have the files
- `[+]` Enhanced security as servers can use specialised software or operating system features to protect themselves
- `[-]` Initially costly due to the need of a server
- `[-]` Costs needed on administrative tasks and maintenance of server and clients

# Peer-to-peer network

An architecture where all computers are considered equals and the load is distributed among all computers. Computers in a peer-to-peer network are able to act as both clients and servers.

- `[+]` Cheaper to set up as no cost is incurred on servers
- `[+]` Easy to set up as no specialised software or operating system features are needed
- `[-]` More effort is needed to access and back up resources as they are distributed across computers
- `[-]` Reduced security as access rights are not administered by a central server

