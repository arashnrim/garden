---
title: SQL
date: 2022-10-13T11:26:45+08:00
tags:
  - spark
---

Abbreviated term for Structured Query Language, often pronounced as 'sequel'. Used as a language used in [[technology/databases/databases|databases]] to query for data according to specified instructions by the language. Used to create, query, and update relational databases.

# Terminologies

| Term | Definition |
| :-:|:-|
| Result set | The produced data after processing a query |
| View | A table that is a saved result set |
| Virtual table | Not a table in the database, but the query code is saved instead |
| Null | A value that is unknown, not available, or not applicable |
| Tuple | A term usually synonymous with a record in a table |
| Relation | A term usually synonymous with a table |

# Statements and functions

## Statements
| Statement | Description |
|:-:|:-|
| `SELECT` | Selects the given fields from a database |
| `SELECT ... FROM ... WHERE` | Selects the given fields from a database, provided the conditions provided are true |
| `FROM` | Specifies which table should data be retrieved from |
| `AS` | Aliasing a field name in the query |
| `DISTINCT` | Filters a field and removes duplicate values |
| `CREATE VIEW` | Creates a new view |
| `ORDER BY ... ASC` or `ORDER BY ... DESC` | Sorts a field in ascending or descending order |
| `LIKE` | Performs pattern match searching; often `%` is used in conjunction to select zero or more characters |
| `IN (...)` | Checks if the condition matches one of the items in a given list (similar to concatenating multiple `OR`s) |
| `BETWEEN ... AND ...` | Checks if the condition is between the two given items; often used with dates |
| `AND` | Concatenates conditions together such that both must be true to pass |
| `OR` | Concatenates conditions together such that at least one must be true to pass |
| `NOT` | Inverses a condition |

## Functions
- Scalar functions: functions that produces an output for each row of input
- Aggregate functions: functions that accept values from multiple rows and produces an output

### String functions

| Function | Syntax | Kind | Description |
|:-:|:-|:-:|:-|
| `LOWER` | `LOWER(str)` | Scalar | Converts a string to lowercase |
| `UPPER` | `UPPER(str)` | Scalar | Converts a string to uppercase |
| `REPLACE` | `REPLACE(str, old_substring, new_substring)` | Scalar | Replaces a string with another given value |
| `STR` | `STR(num)` | Scalar | Converts a numeral into a string |
| `SUBSTRING` | `SUBSTRING(str, start, end)` | Scalar | Returns part of a string, inclusive of `start` and `end` |

### Mathematical functions

| Function | Syntax | Kind | Description |
|:-:|:-|:-:|:-|
| `CEILING` | `CEILING(num)` | Scalar | Returns the next integer of a given number |
| `FLOOR` | `FLOOR(num)` | Scalar | Returns the previous integer of a given number |
| `ROUND` | `ROUND(num, places)` | Scalar | Rounds up a number to a given number of decimal places |
| `COUNT` | `COUNT(attribute)` | Aggregate | Returns the number of items in a group |
| `MIN` | `MIN(attribute)` | Aggregate | Selects the minimum value in a set of values |
| `MAX` | `MAX(attribute)` | Aggregate | Selects the maximum value in a set of values |
| `AVERAGE` | `AVERAGE(attribute)` | Aggregate | Returns the average value in a set of values |
| `SUM` | `SUM(attribute)` | Aggregate | Returns the sum of all values in a set of values |

### datetime functions

Note that for each syntax, `interval` refers to `DAY`, `MONTH`, `YEAR`, `WEEK`, `HOUR`, `MINUTE`, `SECOND`, etc.

| Function | Syntax | Kind | Description |
|:-:|:-|:-:|:-|
| `DATEADD` | `DATEADD(interval, num, date)` | Scalar | Adds a given interval to a date |
| `DATEDIFF` | `DATEDIFF(interval, end, start)` | Scalar | Returns the difference between two dates |
| `GETDATE` | `GETDATE()` | Scalar | Gets the current date |
| `DAY` | `DAY(date)` | Scalar | Returns an integer of the day of the date |
| `MONTH` | `MONTH(date)` | Scalar | Returns an integer of the month of the date |
| `YEAR` | `YEAR(date)` | Scalar | Returns an integer of the year of the date |
| `FORMAT` | `FORMAT(date, format, culture)` | Scalar | Returns a date as a string in the given format |

### System functions

| Function | Syntax | Kind | Description |
|:-:|:-|:-:|:-|
| `FORMAT` | `FORMAT(val, format)` | Scalar | Returns a value formatted with the given format |
| `ISNULL` | `ISNULL(attribute, replaced_value)` | Scalar | Replaces `NULL` values with a given value |

# Logical operators

| Operator | Operation |
|:-:|:-|
| `=` | equality |
| `!=` or `<>` | not |
| `<` | less than |
|  `<=` | less than or equal to |
| `>` | greater than |
| `>=` | greater than or equal to |

# Data types
Often [[technology/data-typing|data typed]] and store a particular piece of required information; common data types include:

| Data type | Used for |
|:-:|:-|
| `VARCHAR` | A variable-length string; can be used for anything ranging from an individual character to a string of thousands of characters. |
| `INTEGER` or `INT` | A medium-sized integer (32-bits) |
| `BOOL` | Boolean |

# Best practices
- End off queries with a semicolon to denote that the query is complete
	```sql
	SELECT name
	FROM patrons;
	```