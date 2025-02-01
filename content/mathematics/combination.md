---
title: Combination
date: 2022-10-25T18:07:19+08:00
tags:
  - spark
  - knowledge
---

The arrangement of a given number of items **without the consideration of order**. Not to be confused with [[mathematics/permutation|permutations]], which is similar but with consideration of order.

Provided:
- the number of distinct items to choose, $n$ (things you have); and
- the number of combinations, $r$ ('slots' to fill)
$$
^nC_r = \frac {^nP_r} {r!} = \frac {\frac {n!} {(n-r)!}} {r!} = \frac {n!} {r!(n-r)!}
$$

Where restrictions are applicable, it is important to deal with them first. Some common restrictions include:
- the use of binary genders in a group of people.

# Examples

- How many ways are there to select 2 students from a class of 20 students?
	- 2 students, 20 students: no detail of order needed
- How many ways are there to choose 5 students from a class of 20 students to participate in a gaming competition?
	- 5 students, 20 students: no detail of order needed
