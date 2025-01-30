---
title: Databases
date: 2022-10-13T11:29:12+08:00
tags:
  - spark
---

Can be defined as organised collections of data. Generally more advantageous compared to spreadsheets, given that they have:
	- a fast and easy setup;
	- more storage;
	- has built-in tools to see all data at a glance;
	- support for encryption; and
	- the ability to faciltiate multiple connections at once.

# Terminologies

| Term | Definition |
|:-:|:-|
| Tables | Collections that hold data about a particular subject (e.g., entity, object in warehouse); generally organised into rows (records) and columns (fields) |
| Record | A row in a table. Typically includes information about one of several counts of a subject (e.g., a person in a persons table) |
| Field | A column in a table. Typically includes key information about the subject (e.g., the name, email address, and phone number of a person in a persons table) |

# Conventions
#### Table names
- Lowercase and not including spaces (underscores instead)
- Should refer to a collective group or be singular

#### Field names
- Lowercase and not including spaces (underscores instead)
- Should be singular, unique, and different from the table name

# [[technology/data-typing|Data typing]]
Some instances of databases (for example, the [[technology/databases/sql|SQL]] family of databases) tend to use data typing to streamline the developer experience and prevent errors (such as invalid field names provided by the developer). For these cases, view the particular database page.

# Application lifestyle

Generally has seven stages that needs to be gone through to execute the creation of a database. They include:

1. Database planning — defining the mission statement of the database (what does the database want to solve/store?)
2. System definition — identifying system boundaries
3. Analysis — collecting and analysing information (e.g., from the current data available)
4. Database design — creating a plan/model that uses previous steps to meet the requirements
	- Conceptual database design — creating models and entities
	- Logical database design — mapping entities to relations
	- Physical database design — creating relations between tables
5. Implementation
6. Testing
7. Operational maintenance
