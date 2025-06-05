---
title: Operating system
date: 2022-10-20T11:57:17+08:00
tags:
  - spark
  - knowledge
---

A collection of software that manages computer hardware resources and provides common services for application software. Designed to support a [[computer|computer]]'s basic functions. Often provides a [[technologies/graphical-user-interface|graphical user interface]] for the user to interact with the OS.

# Kinds of OSs

## Type of OS
Often comes as two kinds of operating systems:
- desktop operating systems — installed on personal computers meant to be used by one person at a time; and
	- the Windows and macOS families of operating systems are examples of desktop OSs
- server operating systems — installed on more powerful computers (servers) connected to a network and sets out rules enabling multiple users to access information.
	- the Windows Server family of operating systems are examples of server OSs

## Open-source and closed-source OSs
Operating systems may also vary in whether they are [[open-source|open source]]; the Linux OS and most distributions based off it are open-source, whereas Windows and macOS are examples of proprietary OSs.

## Multi-tasking and multi-user OSs
A multi-tasking OS allows more than one program to run at the same time in a computer. Users will be able to:
- do multiple tasks at the same time;
- switch between different active applications; and
- transfer data from one application to another.

A multi-user OS allows multiple users concurrently logging into the computer. The OS will need to handle:
- fair treatment of users with similar privileges;
- the issuance of priority to superusers;
- the privacy of users' files and data sharing storages; and
- the protection of integrity of each user's programs and data from:
	- malicious attempts by others; or
	- accidental mistakes from others.

Based on the definitions above:
| Operating System | Is a multi-user OS? | Is a multi-tasking OS? |
|:-:|:-:|:-:|
| Windows | No | **Yes** |
| Windows Server | **Yes** | **Yes** |
| macOS | **Yes** | **Yes** |
| UNIX | **Yes** | **Yes** |
| Linux | **Yes** | **Yes** |

# How it works

Operating systems work with other components in a computer to fully make use of a computer's resources and function well. These components include:
- the [[basic-input-output-system|basic input/output system (BIOS)]];
- the operating system's [[operating-system-kernel|kernel]] and
- [[device-management|device drivers]].

# Functions

Generally has four important functions:

- [[file-management|file management]] — the handling of file-related activities (e.g., storage, retrieval, naming, and sharing);
- [[process-management|process management]] — the handling of the creation and destruction of processes and provision of mechanisms for synchronisation and communication across processes;
- [[memory-management|memory management]] — the handling of the allocation and deallocation of memory space to programs; and
- [[device-management|device management]] — the handling of the management of I/O devices.