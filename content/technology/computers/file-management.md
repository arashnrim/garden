---
title: File management
date: 2022-11-21T09:07:22+08:00
tags:
  - spark
  - knowledge
---

# Terminologies

| Term | Definition |
|:-:|:-|
| File system | A structure for filling data |
| File | A set of data grouped in some logical manner, assigned a name, and stored on the disk |
| Cluster | The smallest allocation unit of a disk (e.g., 4096 bytes for NTFS); read and write operation consumes a space of at least one cluster |

# File system

A structure for filling data. Utilised by operating systems to store and access information on a computer. The file system manages, stores, and retrieves information and allocates locations on the storage and keeps a record of where specific information is kept.

Some examples of commonly-used file systems:
- [[file-allocation-table|File Allocation Table]] (FAT), used in legacy Windows computers;
	- FAT32, a version of FAT designed by Microsoft;
- [[extensible-file-allocation-table|Extensible File Allocation Table]] (exFAT), used in modern windows computers;
- [[new-technology-file-system|New Technology File System]] (NTFS), used in modern Windows computers;
- Hierarchical File System (HFS), used in legacy Apple computers; and
- Apple File System (APFS), used in modern Apple computers.

A file system consists of folders and files. Folders can be organised in a hierarchy that is similar to a tree structure. Operating system files should be and usually are kept separate to ensure that important files are not deleted by users.

# Pathnames

Pathnames are used to locate and identify specific files within a file system. There are two kinds of pathnames:
- absolute pathnames; and
- relative pathnames.

For the following two examples, consider the following structure:

```
                  root
                    │
        ┌───────────┼────────────┐
        ╵           ╵            ╵
    personal      group       family

   readme.txt   report.docx   Jan10.png
      tasks      fsp.java     May10.jpg
```

## Absolute pathnames
Used to identify the path to a file from the root directory (`/` in Linux-like terminals and `\` in Windows, usually `C:`).

To target `May10.jpg` from `personal`, using absolute pathnames, the path will be:
```
root/family/May10.jpg
```

## Relative pathnames
Used to identify the path to a file from the current directory.

To target `May10.jpg` from `personal`, using relative pathnames, the path will be:
```
../family/May10.jpg
```
(To navigate to `May10.jpg`, you need to go up one directory (`../`) then into the `family` directory to access the file.)

# Files

A set of data grouped in some logical manner, assigned a name, and stored on the disk. The file system records where the file is located on the disk for retrieval later. Data in files must be converted into a digital format (binary) that the computer can understand.

Besides the content of the file, some metadata is also stored alongside in the file:
- the date and time of:
	- the file's creation;
	- the file's last modification; and
	- the file's last access;
- the file's size;
- the file's attributes (e.g., security information, last back up time);
- the file's compression status; and
- the file's encryption status.

# Storage types

There are generally two types of storage used in modern day computers:
- hard disk drives (HDD); and
- solid-state drives (SSD).

Hard disk drives are spinning hard drives that are commonly used in legacy computers. They are magnetic in nature, meaning that they are more prone to drops and shocks than solid-state drives. Hard disk drives are low-level formatted when delivered from the manufacturer.

Solid state drives are similar to hard disk drives, but are more efficient and performant than hard disk drives. They are generally much more expensive, though.

# Fragmentation and defragmentation

## Fragmentation

The wastage of disk space within the cluster due to the actual file size being smaller than the allocated space. Also known as slack space (or file slack), which is the space between the end of a file and the end of the cluster it is stored in.

![[external-fragmentation.png]]

Occurs when a file is divided into pieces scattered around the disk, and of which is usually caused by frequently creating, deleting, and modifying files. Usually caused by the deletion of small files which leaves small sets of contiguous clusters insufficient enough to be filled by a bigger new file.

Fragmentation results in the OS searching the disk for diferent groups of clusters scattered around the disk, degarding system performance of disk operations.

it is important to note that fragmentation only affects hard disk drives; most if not all solid-state drives do not face the issue of fragmentation.

There are two kinds of fragmentation:
- external fragmentation is when a process's memory blocks are non-contiguous; and
- internal fragmentation is when there is the presence of slack space in a a process's memory blocks.

## Defragmentation
The process of consolidating fragmented files on a computer's hard disk by physically reorganising the contents of the disk. In Windows, the [Disk Defragmenter](https://support.microsoft.com/en-us/windows/defragment-your-windows-10-pc-048aefac-7f1f-4632-d48a-9700c4ec702a) is a system utility tool that handles the defragmentation of a hard disk drive.

# Partitioning

The process of splitting a single physical storage into a number of partitions or volumes. In Windows, partitions or volumes may be assigned a drive letter. Each partition must be formatted using a particular file system. In Windows, [Disk Management](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management) is a system utility tool that allows users to preview and partition their storage.

# Formatting

The process of preparing a chosen partition of the storage to be used by an OS by deleting all the data and setting up a file system.

In the first sector of the formatted partiton, a boot block is created. The boot block contains the root folder, which contains:
- file information, including the file's
	- name;
	- start cluster;
	- size; and
	- MAC (modification, access, creation) date time information; and
- file attributes (e.g., hidden, read-only, and archive).

# Authorisation

The file manager tracks each user's authorisation to access file using file attributes, or codes signifying the ability of every system user to manipulate the file.

Attributes used by Linux (and Linux-like OS terminals including macOS) and Unix include:
- `d` (directory; a file is indicated with `-`);
- `r` (read);
- `w` (write); and
- `x` (execute).

The code has the following format; to explain, the following example is used:
```
drwxr-xr-x
╷─┬╴─┬╴─┬╴
│ │  │  └╴permissions for world (everyone)
│ │  └╴permissions for group
│ └╴permissions for owner
└╴directory or file indicator (d or -)
```
Attributes used by Windows include:
- `D` (directory);
- `R` (read-only);
- `S` (executable);
- `H` (hidden); and
- `A` (archived).

# Components

## Boot sector

A section on the storage that includes information on how to start the boot process to load an operating system. There are two types of boot sectors:
- master boot record (MBR); and
- volume boot record (VBR).

### Master boot record

The master boot record is the first sector of a partitioned storage and holds the information (including the file system) on the logical partitions on the storage. There can only be one master boot record in a storage.

### Volume boot record

The first sector of a partition, used to contain:
- code initiating the boot process or loading an OS; 
- the file system type; and
- parameter information, including:
	- bytes per sector; and
	- sector per cluster.

## Directory entry

A 32-byte reference to every file and folder. Contains metadata and information including the:
- name of the file/folder;
- MAC (modification, access, creation) date time information;
- location (starting cluster);
- size; and
- author.