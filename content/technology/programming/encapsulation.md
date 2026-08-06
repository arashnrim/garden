---
title: Encapsulation
date: 2022-11-07T11:06:01+08:00
tags:
  - spark
  - knowledge
---

The process of enclosing certain information. In the context of object-oriented programming, encapsulation refers to hiding irrelevant data (e.g., variables and methods) outside of a class.

# Access specifiers

Many OOP-based languages utilise access specifiers to implement encapsulation in code. The following are some examples of certain access specifiers used:

| Access specifier | Visible to objects of other classes _within the namespace_ | Visible to objects of child classes _within the namespace_ | Visible to objects of other classes _outside the namespace_ | Visible to objects of child classes _outside the namespace_ |
|:-:|:-:|:-:|:-:|:-:|
| `public` | **Yes** | **Yes** | **Yes** | **Yes** |
| `private` | No | No | No | No |
| `protected` | No | **Yes** | No | **Yes** |
| `internal` | **Yes** | No | No | No |
| `protected internal` | **Yes** | **Yes** | No | No |
