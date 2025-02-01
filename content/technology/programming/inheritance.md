---
title: Inheritance
date: 2022-11-21T11:03:49+08:00
tags:
  - spark
  - knowledge
---

A feature that allows the derivation of a new class from an existing class. Introduces a way to reuse existing code without duplicating them.

A subclass inherits all the functionality of a superclass, but can also have its own unique attributes and methods.

# Terminologies

| Term | Definition |
|:-:|:-|
| Superclass (also parent or base class) | The class from which subclasses can be created from |
| Subclass (also child or derived class) |  The class that inherits a superclass |

# Declaration

In many OOP-based languages, a subclass can be created using the `:` symbol as such:

- C#
```C#
// CashCard is an existing class that is the superclass.
// MemberCashCard is the new class deriving from CashCard.
class MemberCashCard: CashCard
{
	// Unique attributes, properties, and methods
}
```
- Python
```python
# CashCard is an existing class that is the superclass.
# MemberCashCard is the new class deriving from CashCard.
class MemberCashCard(CashCard):
	# Unique attributes, properties, and methods
```

# Inheriting superclass

A subclass can call upon the superclasses's attributes and properties, though the exact method differs across programming languages.

Some examples when inheriting superclass is used include:
- calling the superclass's constructors to initialise the attributes in the superclass;
- calling the superclass's printing method to retrieve information in the superclass; and
- calling a method in the superclass.

- C#
```c#
// Defining the constructor for MySubClass
public MySubClass(subparams) : base(superparams)
{
	// other initialization
}
```