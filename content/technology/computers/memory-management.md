---
title: Memory management
date: 2022-11-07T09:20:32+08:00
tags:
  - spark
---

Refers to the allocation of resources to each program by the [[technology/computers/operating-system|operating system]]. Heavily involves the [[technology/computers/random-access-memory|random access memory]] as a resource used by programs as a working space.

A memory manager has several tasks in particular:
- allocating portions of the main memory to various programs at their request;
- freeing portions of the main memory when no longer needed;
- keeping track of the status of each location of the main memory; and
- protecting the memory allocated to a program from unauthorised access by other programs.

The [[technology/computers/operating-system-kernel|kernel]] is the part of the operating system always in the RAM as long as the computer is turned on.

# Memory address

A location, often in the form of a binary number, located on the memory. It can be referenced to access the content stored in-memory at that particular location. Starts from 0 to a maximum number defined by the amount of RAM in the computer.

To calculate the range of an address space provided the amount of RAM, given that $b$ is the number of bytes, find the number of bits $n$ by using $\frac {log(b)} {log(2)}$ and use that to find the maximum value ($\frac n 4$ `F`s).

The number of bits an address has is dependent on the [[technology/computers/computer-architecture#von Neumann computer architecture|address bus]]'s width.

# Memory content

A particular address can store **eight bits** (one byte) of information; this information could be either a part of an instruction or data.

# Frames, pages, and page tables

Frames refer to compartments brought about due to the *physical* memory's storage. Pages, on the other hand, are *virtual* and refer to references created by the CPU.
- The typical size of a frame is **4096 bytes** (4 KiB).
- The size of a frame **must match** the size of the page.
- Expressed differently, data or instructions are stored in the memory as frames. When the CPU references and reads or writes the memory, the CPU handles them as pages.

## Page tables

To bridge the link between frames and pages, memory managers often create a page table for each process. Page tables are data structures used by the memory manager to keep track of which page corresponds to which frame.

Page tables include a valid or invalid control bit which is used to tell whether or not a page is in the physical memory. In the case of demand paging, where data can be stored on the secondary storage temporarily, the control bit will be 0 (demarking it as not in the physical memory).

# Logical and physical memory

The logical memory is the memory as seen as pages (i.e., seen by the CPU). The logical memory stores pages by the CPU and can be purged at any time.

The physical memory is the memory stored as-is physically, and is seen as frames.

# Virtual memory and demand paging

Multiple programs may be loaded into the physical memory at once (in [[technology/computers/operating-system#Multi-tasking and multi-user OSs|multi-tasking operating systems]]). The total memory size required by the OS and all the programs may exceed the physical memory size; in this event, the OS uses virtual memory to compensate. This space is known as a swap space; on Linux, this space is a partition called `swap` while on Windows, this space is in a file named `pagefile.sys`.
- This method makes use of the available space on the secondary storage to store programs.
- The OS moves inactive data from the physical memory to the temporary space in the secondary storage.
- The memory manager than swaps data to and fro the storage and memory when required.

Trashing refers to the excessive swapping of pages and data between the memory and secondary storage; this causes the program to operate more slowly.

A computer on low memory may exhibit several signs:
- running and executing programs slowly;
- having high thrashing activity;
- crashing (Blue/Black Screen of Death); and
- showing warnings about having low memory.

To resolve low memory, consider:
- upgrading the computer's RAM; and
- closing unused applications.

# `resmon`

`resmon`, or Resource Monitor, is a program introduced in Windows Vista allowing users to view realtime information about the resources on their computer (i.e., CPU, memory, disk, and network) and the processes using them. There are several terminologies to note for `resmon`.

| Term | Definition |
|:-:|:-|
| Commit | The total amount of physical memory and page file space allocated by Windows |
| Working set | The amount of physical memory used |
| Shareable | The amount of physical memory a process is sharing with other processes |
| Private | The amount of physical memory a process is using alone |