---
title: Database design
date: 2022-10-21T10:03:43+08:00
tags:
  - spark
---

The process of coming up with entities and models to be used in a future database. Considered a critical process in the planning and development of a database for use.

# Terminologies

| Term | Definition |
|:-:|:-|
| Entity | An object (e.g., people and items) of which is to be captured and modelled into a database |
| Weak entity | An entity that does not have any key attributes of its own and can only be identified by relating it to an owner entity |
| Attribute | A property or characteristic of an entity that is of interest to the organisation or business area (that the database is being built for) |
| Relationship | An association between the instances of one or more entities of interest to the organisation |

> **Example**
> For a Salesperson entity, the employee number, name, date of birth, gender, and email address are examples of relevant attributes to the person.

# Keys

Keys are used to identify a record in a table. They are unique to each record and there are different kinds of keys:

- Candidate key — an attribute that uniquely identifies a tuple in a relation
- Primary key — a chosen candidate key used to uniquely identify each tuple. A primary key requires two requirements and two recommendations:
	- the value of the primary key should be consistent (unchanged) over time;
	- the value of the primary key must be non-null.
	Additionally, consider the following:
	- intelligent keys (keys with structures indicating the likes of classifications or locations) should be avoided; and
	- surrogate keys should be considered as a possible substitution.
- Alternate key — a candidate key that was not chosen as the primary key of the record
- Foreign key — an attribute used to create a relationship with another relation (table) within the database
- Composite key — a key that consists of more than one attribute
	- In some instances, one primary key is not enough (e.g., the ISBN of a book is insufficient as a library may hold multiple copies of the same book)
- Surrogate key — a new attribute specifically introduced into an entity to serve as the primary key
	- Often used when a natural identifier cannot be used to guarantee the uniqueness of each tuple
	- When the primary key is a composite key with many attributes, it is suggested to use a surrogate key in its place
- Partial key — an attribute or set of attributes that uniquely identify weak entities related to the same owner entity

# Models

Conceptual database models are used to give a brief overview of what entities a database has and the relationships the entities have with each other. Like flowcharts, shapes resemble different things in the model.

The [[technology/databases/entity-relationship-model|entity-relationship model (ER model)]] is a commonly used model used to sketch out and visualise the relationships entities have with one another in a database.