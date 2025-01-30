---
title: Data typing
date: 2022-10-13T11:36:54+08:00
tags:
  - spark
---

The process of assigning a type to a particular variable or value. Often done to:
	- dynamically allocate a certain amount of memory (for instance, `double` allocates twice as many bits as `float`); and
	- restrict operations (as some operations, like division, can only be done for certain types).

Different languages can have different data types, but the common few include:

| Data type | Used for |
|:-:|:-|
| integer | Whole numbers |
| float | Numbers with a floating point decimal |
| character | Any kind of character |
| string | A chain of characters |
| Boolean | True or false values |
| list/array | A collection of data types |

In some low-level languages (e.g., the C family of languages), there may be additional data types to handle assigning different amounts of bits (usually 16, 32, and 64 bits). Common types include:

| Data type | Related data type | Bit size | Amount held |
|:-:|:-:|:-:|:-|
| byte | integer | 8 | 256 (0–255 unsigned, -128–127 signed) |
| short | integer | 16 | 65536 (0–65535 unsigned, -32768–32767 signed) |
| long | integer | 32 | 4294967296 (0—4294967295 unsigned, -2147483648–2147483647 signed) |
| double | float | 64 | | 
