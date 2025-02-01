---
title: Power-on self-test
date: 2022-10-26T22:02:08+08:00
tags:
  - spark
  - knowledge
---

A set of routines performed by firmware or software immediately after a computer is powered on. Used to determine if hardware is working as expected. The power-on self test performs the following:

- verification of CPU registers;
- verification of the BIOS's code integrity;
- verification of some basic components (direct memory access, timer, and interrupt controller);
- initialisation, sizing, and verifiation of system main memory;
- initialisation of BIOS;
- passing of control to other specialised extension BIOSs; and
- identification, organisation, and selection of devices available for booting.

The checks usually test the following components:

- hardware components (e.g., the processor, storage devices, and memory);
- basic system devices (e.g., keyboard and peripheral devices);
- CPU registers;
- direct memory access;
- timers; and
- interrupt controllers.
