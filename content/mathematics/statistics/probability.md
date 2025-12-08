---
title: Probability
date: 2022-10-25T17:42:14+08:00
tags:
  - spark
  - knowledge
---

A branch of mathematics that examines the possibility of an event to happen. Events are assigned values between 0 (impossible) to 1 (always); many events in real life range in this spectrum.

The probability of a particular event, $E$, can be calculated through the following formula:

$$
P(E) = \frac {n(E)} {n(S)}
$$

where:

- $n(E)$ is the number of outcomes in $E$; and
- $n(S)$ is the number of outcomes in the sample space (i.e., the total number of outcomes).

## Using combinations

In the case where order does not matter, the probability of an event can be calculated using [[mathematics/combination|combinations]. For example, given a question as such:

> There were 9 pens in a box. 2 were black, 3 were red and 4 were blue. If 3 pens were randomly selected, what is the probability that we would get: 1 black pen and 2 red pens?

The probability can be calculated using combinations as such:

$$
P(E) = \frac {^2C1 \times ^3C_2} {^9C_3}
$$

($^2C_1$ is the probability of getting a black marker and $^3C_2$ is that of getting a 2 red pens. $^9C_3$ is the probability of getting three markers, regardless of colour.)

# Computing probability

Given two events, Event A and Event B:

- the probability of **either** (or) event occuring is found by their sum: $P(A \cup B) = P(A) + P(B)$
- the probability of **both** (and) events occuring is found by their product: $P(A \cap B) = P(A) \times P(B)$

# Rules

For the probability of an event to be valid, there are some rules that it should adhere to. The following lists out the rules of probability:

- $0 \leq P(A) \leq 1$ for an event A — in other words, probability must be bound between 0 and 1.
- $\sum P(A) = 1$ for an event A — in other words, the sum of probability of all outcomes must sum up to 1.
- $P(A') = 1 - P(A)$ for an event A — in other words, the probability of an event not happening is the difference between it and 1.

There are also rules if certain conditions are met. There are two notable ones, namely:

- [the rule of multiplication of choices](#multiplication-of-choices); and
- [the rule of addition of choices](#addition-of-choices).

## Multiplication of choices

Provided:

- a procedure with $k$ stages; or
- a situation with $k$ factors,
  the total number of total different ways the procedure can occur is
  $$
  n_1 \times n_2 \times ... \times n_k
  $$
  where:
- $n$ is the number of ways in a stage.

## Addition of choices

Provided:

- Procedure A, having $m$ ways of doing; and
- Procedure B, having $n$ ways of doing,
  the total number of total different ways the procedure can occur is
  $$
  m + n
  $$

# Conditional probability

Conditional probability refers to the probability of an event occuring given that another has already occurred. It is a multi-layered form of probability, if you will. Conditional probability is denoted as $P(E | F)$ and read as "the conditional probability of E, given F".

To calculate conditional probability, the following formula is used:

$$
P(A|B) = \frac {P(A \cap B)} {P(B)}
$$

If the events are independent, then:

$$
P(A|B) = P(A)
$$

$$
P(B|A) = P(B)
$$
