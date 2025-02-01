---
title: Sampling
date: 2022-11-20T10:55:27+08:00
tags:
  - spark
  - knowledge
---

Refers to the process of extracting a subset of a population. Done either due to constraints around:
- time consumption;
- cost;
- feasibility; or
- impossibility.

Statistics are often used to infer population parameters.

# Terminologies

| Term | Definition |
|:-:|:-|
| Population | An entire group of entites of which data can be collected from |
| Sample | A subset of a population; a smaller group of entities selected from the population |
| Parameter | A numerical measurement collected from a population |
| Statistic | A numerical measurement computed from a sample |

# Notations

| Representation | Parameter symbol (population) | Statistic symbol (sample) |
|:-|:-:|:-:|
| Size | $N$ | $n$ |
| Mean | $\mu$ | $\bar X$ |
| Standard deviation | $\sigma$ | $s$ |
| Variance | $\sigma^2$ | $s^2$ |

# Sampling methods

## Random sampling
A technique whereby a sample is selected from a population entirely by chance (randomly). Each entity in the population has a known probability of being selected. Reduces the possibility of bias in sampling.

There are three kinds of random sampling:
- simple random sampling;
- statified random sampling; and
- systematic random sampling.

### Simple random sampling
A random sampling method that ensures that each entity in the population has an equal chance of being included in the sample.

### Stratified random sampling
A random sampling method that selects a sample from different groups in the population, ensuring that a particular group in the population won't be missed out.

### Systematic random sampling
A random sampling method such that a starting point and every $k$-th entity in the population is selected. Is easy to implement and reasonably efficient, but bias may exist if there is a certain pattern in the population list.

## Quota sampling
A technique commonly used in marketing research where interviewers are given a quota of interviewees from a certain type to conduct an interview with. Not random in nature as not every entity in the population has a chance to be selected.

There may also be additional bias as interviewers may approach more approchable and helpful interviewees than interviewees of a diverse background.

# Sampling distribution

Refers to the probability distribution of a statistic. More of a theoretical concept than one observed from experiment. As statistics are random variables, each statistic follows a particular distribution.

## Sampling distribution of the sample mean
Refers to the probability distribution of all possible values the sample mean can take when a sample (of size $n$) is taken from a particular population. Is a [[mathematics/statistics/continuous-probability-distribution|continuous probability distribution]] by nature.

An important statistic is the sample's mean ($\bar X$), meaning that we often concern ourselves with the sample distribution of the sample mean.

### Mean and variance
When a very large number of samples (each of size $n$) of either:
- an infinite population,
- a very large finite population, or
- a finite population with replacement

is repeatedly and independently drawn from a population,
- the average sample mean ($E(\bar X)$) will be approximately equal to the actual population mean ($\mu$); and
- the variance of the sample mean ($Var(\bar X)$) will only be $\frac 1 n$ times the population's variance ($\sigma^2$).

Expressed mathematically, when $n \to \infty$,
$$
E(\bar X) \approx \mu
$$
$$
Var(\bar X) = \frac {1} {n} \times \sigma^2 = \frac {\sigma^2} {n}
$$

On the other hand, if $n$ is done on a finite population (of size $N$) and $n$ is not a very small fraction of $N$, the finite population correction factor needs to be applied to the variance:
$$
Var(\bar X) = \frac {\sigma^2} n \times \frac {N - n} {N - 1}
$$

### Sampling error
Sampling errors are defined as the differences between statistics and parameters as samples are not a perfect representation of a population that will always be present. The sampling error of the mean is the standard deviation of the sampling distribution of the mean.

When a very large number of samples (each of size $n$) of either:
- an infinite population,
- a very large finite population, or
- a finite population with replacement

is repeatedly and independently drawn from a population, the standard error of the mean is as such:
$$
SE_{mean} = \sqrt {Var(\bar X)} = \frac \sigma {\sqrt n}
$$
On the other hand, if $n$ is done on a finite population (of size $N$) and $n$ is not a very small fraction of $N$, the finite population correction factor needs to be applied:
$$
SE_{mean} = \sqrt {Var(\bar X)} = \frac \sigma {\sqrt n} \times \sqrt \frac {N - n} {N - 1}
$$
### Central limit theorem
If $X_1, X_2, ..., X_n$ is a random sample (of size $n \geq 30$) taken from a population where with a random variable X (of any kind of distribution) with a mean ($\mu$) and variance ($\sigma^2$), the sample mean ($\bar X$) is approximately normal.

Expressed mathematically, when $n \geq 30$,
$$
\bar X \sim N(\mu, \frac {\sigma^2} n)
$$