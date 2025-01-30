---
title: New Technology File System
date: 2022-11-24T11:33:39+08:00
tags:
  - spark
---

A file system used in modern Windows operating systems (starting with Windows NT in 1993). All data are allocateed to files, including the file system itself. Has three main components, including the:
- partition boot record (PBR), comprising of 16 sectors (opposed to one sector with FAT), of which half is used for data;
- master file table (MFT), containing every object's name, size, date and time, starting extent, and fragementation on the volume; and
- $Bitmap.
