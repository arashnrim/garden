---
title: Discrete probability distribution
date: 2022-10-31T14:12:37+08:00
tags:
  - spark
---

A random variable can be discrete if it has:
- a finite number of values; or
- an infinite but countable number of values.

A discrete probability distribution, therefore, is the probabity distribution of a discrete random variable (one that has a finite number of values). Two common distributions include the:
- binomial distribution; and
- Poisson distribution.

# Binomial distribution

A binomial distribution is only valid if four conditions are met (**2pin**):
- Each trial of the experiment must result in only two (**2**) outcomes (e.g., yes or no; success or failure).
- The probability (**p**) of a successful outcome is constant for each trial.
- The trials are independent (**i**) of one another — i.e., the result of one trial does not affect another.
- There are a finite number (**n**) of trials in the experiment.

In an experiment of $n$ independent trials,
- $p$ is the probability of a successful outcome; and
- $X$ is the random variable.

The notation to describe a binomial distribution is:
$$
X \sim B (n, p)
$$
Provided a binomial distribution, the probability when $X = a$ is denoted by the following formula:
$$
P(X = a) = {^n}C_a \space p^a \space q^{n-a}
$$
(where $q = 1 - p$)

The expected value or mean of the distribution is denoted by the following:
$$
E(X) = np
$$
The variance can be calculated by the following:
$$
Var(X) = npq
$$

# Poisson distribution

A Poisson distribution is only valid if four conditions are met:
- The event must occur randomly.
- The probability an event will occur in a certain time interval is proportional to the size of the interval.
- The number of events occurring in a unit of time is independent of the number of events that occur in other units of time.
- In a very small interval, the probability that two or more events will occur tends to zero.

A distribution that describes the number of times an event will occur randomly in:
- a given interval of time; or
- a given space (e.g., area, volume, weight, distance).

The notation to describe a Poisson distribution is:
$$
X \sim P_O (\lambda)
$$
(where $\lambda$ is any number more than zero, often the average for the given time)

Provided a Poisson distribution, the probability when $X = a$ is denoted by the following formula:
$$
P(X = a) = e^{-\lambda} \space \frac {\lambda^a} {a!}
$$
The expected value or mean of the distribution is $\lambda$.
The variance of the distribution is $\lambda$.

## Poisson approximation from binomial distribution

When a binomial distribution has a high number of independent trails ($n$) and a low probability ($p$), we can approximate the binomial distribution into a Poisson distribution.

Expressed mathematically, when $n \to \infty, \space p \to 0$,
$$
X \sim B(n, p) \approx X \sim P_O(np)
$$