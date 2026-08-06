---
title: Class
date: 2022-11-07T11:20:51+08:00
tags:
  - spark
  - knowledge
---

A blueprint for creating objects, often a feature of many object-oriented programming languages.

# Attributes and variables

More or less an interchangeable term used to describe low-level storage slots attached to an object.

## Properties

In most OO languages, properties are used to define getter and setter functions to change the value of or read and return the value of an attribute in a class. The way properties are defined varies across programming languages.

- C#
```c#
class SavingsAccount
{
	// Variables are made private to prevent illegal accessing out of the object
	private string accountNo;
	public string AccountNo
	{
		get { return accountNo; }
		set { accountNo = value; } // Can be extended to have additional checks or validation
	}
	
	private string accountName;
	public string AccountName { get; set; } // Shorthand
}
```

# Methods

There are three types of methods in a user-defined class:
- constructors — used to create objects of a class;
- user-defined methods — used to perform a specific task related to the class; and
- printing methods — used to print out the class in a particular format when called by the programming language's print function.

## Constructors

A special function used to create objects of a class. Usually a required method in many OO programming languages.

The following code chunks below show some examples for different languages:

- C#
```c#
class SavingsAccount {
	// The name of the class and constructor must match.
	// Default constructor — does not have parameters
	public SavingsAccount() { }
	
	// Parameterised constructor with parameters
	public SavingsAccount(string no, string name, double bal)
	{
		AccountNo = no;
		AccountName = name;
		Balance = bal;
	}
}
```
- Python
```python
class SavingsAccount:
	# The name of the constructor must be __init__.
	# Default constructor — does not have parameters
	def __init__(self):
		pass
	
	# Parameterised constructor with parameters
	def __init__(self, no, name, bal):
		self.accountNo = no
		self.accountName = name
		self.balance = bal
```

## Printing methods

Because we won't know what exactly to print out, we may need to define what to print out when a language's printing function is called on an object of a class. The name of the function varies across programming languages.

- C#
```c#
class SavingsAccount {
	// The name of the function must be ToString.
	public override string ToString()
	{
		return "AccountNo: " + AccountNo +
			" AccountName: " + AccountName +
			" Balance: " + Balance;
	}
}
```
- Python
```python
class SavingsAccount:
	# The name of the function must be __str__.
	def __str__(self):
		return "AccountNo: " + self.accountNo +
			" AccountName: " + self.accountName +
			" Balance: " + self.balance
```