---
title: Permutation
date: 2022-10-25T17:51:31+08:00
tags:
  - spark
  - knowledge
---

The arrangement of a given number of items **in a particular order**. Not to be confused with [[mathematics/combination|combinations]], which is similar but without consideration of order.

Provided:
- the number of distinct items to choose, $n$ (things you have); and
- the number of permutations, $r$ ('slots' to fill)
$$
^nP_r = n \times (n-1) \times ... \times (n-r+1) = \frac {n!} {(n-r)!}
$$

When there are duplicates, they must be removed. In order to do so, the following formula is used:
$$
\frac {r!} {r_{dup}!}
$$
where:
- $r$ is the number of distinct items; and
- $r_{dup}$ is the number of duplicated items (one for each).

Where restrictions are applicable, it is important to deal with them first. Some common restrictions include:
- the use even and odd numbers; and
- the use of non-zero numbers.

# Examples

The following are some examples of permutations. Note how order plays a role in each case respectively:

- How many 3-letter word arrangements can be formed from the letters "A", "B", "C", "D", and "E" in all possible orders with no repetition of letters?
	- 3-letter word: 'slots' to fill ($n$)
	- letters A to E: distinct items to choose ($r$)
	- all possible orders: order matters
- How many ways are there to arrange the letters in the word "ELEMENTAL" with no repetition of letters?
	- no repetition of letters: duplicating items need to be removed
	- "ELEMENTAL": (three) repeated Es, (two) repeated Ls
- How many ways are there to choose 2 students from a class of 20 students, so as to make the first person a class representative, and the second a class treasurer?
	- first class representative, second class treasurer: order matters
