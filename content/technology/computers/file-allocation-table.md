---
title: File Allocation Table
date: 2022-11-21T10:08:43+08:00
tags:
  - spark
  - knowledge
---

A file system used in legacy Windows operating systems. Has multiple versions, including 12, 16, and 32-bit variation (FAT12, FAT16, and FAT32 respectively). FAT32 supports a maximum of 4 GiB of storage. Has three main components, including the:
- volume boot record (VBR);
- directory entries; and the
- file allocation table.

In a FAT file system, there are usually two file allocation tables for redundancy.

# Process

1. A file is called by the file name and path.
2. The storage path leads to the location of the parent directory, of which the directory entry of the file is location.
3. The OS refers to the parent directory and reads the directory entry.
4. The directory entry provides the starting cluster and size of the file.
5. The OS goes to the starting cluster and begins reading the data.
6. Only the data within the cluster up to the size of the file is read; should the file size surpass one cluster, the FAT is needed to link a file's clusters together.
