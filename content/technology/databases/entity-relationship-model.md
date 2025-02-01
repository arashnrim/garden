---
title: Entity-relationship model
date: 2022-11-01T09:21:57+08:00
tags:
  - spark
  - knowledge
---

A database visualisation model that describes interrelated things of interest in a specific domain of knowledge. Provides a detailed and logical representation of the data in a database.

# Terminologies

| Term | Definition |
|:-:|:-|
| Simple/Atomic attribute | An attribute that cannot be further divided into smaller attributes |
| Composite attribute | An attribute that is made up of multiple components, each with an independent existence |
| Single-valued attribute | An attribute that holds only a single value for a single entity (e.g., name, gender, ID) |
| Multi-valued attribute | An attribute that holds multiple values for a single entity (e.g., phone numbers, qualifications) |
| Derived attribute | An attribute that represents a value derivable from the value of related attributes | 

# Symbols

| Symbol | Representation |
|:-:|:-|
| Rectangle | Entity (singular) |
| Concentric rectangle | Weak entity (singular) |
| Oval | Simple/Composite single-valued attribute; underlined attributes represent primary keys |
| Concentric oval | Single/Composite multi-valued attribute |
| Dotted oval | Derived attribute |
| Diamond | Relationship (verb) |

| Line | Representation |
|:-:|:-|
| Single line | Partial/Optional participation |
| Double line | Total/Mandatory participation |
| Line with horseshoe | Subtype declaration |

# Relationships

## Degrees of relationships
Relationships can have different degrees to show in an ER model. Common degrees include the:
- unary (one) degree;
- binary (two) degree; and
- ternary (three) degree.

### Unary relationships
Represents the relationship between instances of a single entity. Also known as a recursive relationship.

- It is important to assign a role name that signifies the function a participating entity plays in each relationship; this allows you to distinguish the meaning of each participation

### Binary relationships
Represents the relationship between instances of two entities. Is the most common type of relationship encountered in data modelling.

### Ternary relationships
Represents the relationship among instances of three entities.

## Relationship constraints
Relationships can be constrained such that only certain cases are valid in a database. This helps to plan out a database in greater detail.

### Cardinality ratio
Refers to the number of instances of an entity that can be associated with an instance of another entity. The three most commonly-used cardinality ratios used in databases include:
- one-to-one (1:1) relationship;
	- example: one staff member supervising one branch
- one-to-many (1:M) relationship; and
	- example: one book publisher publishing many books
- many-to-many (M:N) relationship.
	- the 'N' is used to differentiate the letters, but still means many. Can be ignored (don't need to change)
	- example: many students taking many subjects

### Participation
Specifies whether the existence of an entity depends upon it being another entity through the relationship. Shown in the ER diagram as different strokes of lines connecting entities and relationships.

Generally has two participation constraints:
- partial/optional participation, where instances of an entity are related to instances of another entity through the relationship, but not necessarily all; and
- total/mandatory participation, where instances of an entity must be associated with an instance of the related entity.

# Types

There are two types of entities that can be drawn in an ER model. These are akin to base and derived classes in object-oriented programming:
- Supertype — generic entity that can be divided into subtypes;
- Subtype — a subset of a supertype that shares common attributes (inheritance) or relationships distinct from other subsets.
	- The subtype should not have a primary key, but rather inherit a primary key from its supertype.

The process of defiing a set of subtypes of an entity is known as specialisation. 

The reverse process of abstraction, which involves:
- supressing differences among entities;
- identifying common features; and
- generalising the entities into a supertype;

is known as generalisation.

## Constraints
Similar to relationship constraints, there are constraints when it comes to specialisation and abstraction.

### Disjointment
An entity must only have one subtype or can have many subtypes according to the context of the situation. This is referred to as the disjoint constraint, in which an additional symbol (a circle with a character below) is added to denote the case.

When a specialisation consists of only one subtype, there is no need to show the disjoint constraint.

- `d` is used to represent that an entity is disjoint, meaning that the entity can only be one subtype; and
- `o` is used to represent that an entity overlaps, meaning that the entity can be more than one substype.

### Participation
Specifies whether the existence of an entity depends upon it being another entity through the relationship. Shown in the ER diagram as different strokes of lines connecting entities and relationships.

Generally has two participation constraints:
- partial/optional participation, where instances of an entity are related to a subtype, but not necessarily; and
- total/mandatory participation, where instances of an entity must be associated with a subtype.

# Rough outline of steps

1. Identify the main entities in the user's view of the enterprise.
2. Identify the important relationships existing between the identified entities.
3. Associate attributes with an appropriate entity or relationship.
4. Identify the candidate keys for each entity before settling on a primary key.
5. Identify supertypes and subtypes where appropriate.
6. Draw the ER model for the database.
7. Review the ER model.
8. Reiterate where required.