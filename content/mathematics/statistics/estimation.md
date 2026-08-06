---
title: Estimation
date: 2023-01-05T13:59:03+08:00
tags:
  - spark
  - knowledge
---

The process of using a sample statistic to estimate the population parameter. The estimator is a statistic used to estimate a parameter, usually denoted with a capped symbol of the parameter; for instance, given parameter $\mu$, its estimator is denoted as $\hat\mu$.

# Terminologies

| Term | Definition |
|:-:|:-|
| Estimator | The statistic used to estimate a parameter |
| Estimate | The numerical value of the estimator |
| Point estimate | A single and specific estimate of a parameter |

# Unbiased estimators

If the estimator of parameter $\theta$ ($\hat\theta$) is equal to $\theta$, $\hat\theta$ is an unbiased estimator of $\theta$. The unbiased estimate of the population mean is the sample mean.

## Unbiased estimator of a population's mean
The unbiased estimator of a population's mean is the sample mean. Expressed mathematically:
$$
\hat \mu = \bar X = \frac {\sum X} n
$$
where:
- $X$ are the values in the sample; and
- $n$ is the sample size.

Should an additional constant $a$ be introduced such that only $\sum (X - a)$ is available, the unbiased estimator of a population's mean can still be determined:
$$
\hat \mu = \frac {\sum (X - a)} {n} + a
$$

## Unbiased estimator of a population's variance
The unbiased estimator of a population's variance is the sample variance. Expressed mathematically:
$$
\hat {\sigma^2} = S^2 = \frac {\sum (X - \bar X)^2} {n - 1} = \frac 1 {n - 1} (\sum X^2 - \frac {(\sum X)^2} {n})
$$

Should an additional constant $a$ be introduced such that only $\sum (X - a)$ and $\sum (X - a)^2$ is available, the unbiased estimator of a population's variance can still be determined:
$$
\hat \sigma^2 = \frac 1 {n - 1} (\sum (X - a)^2 - \frac {[\sum ( X - a)]^2} {n})
$$

# Interval estimates and confidence intervals

It is not practically possible that a point estimate from a given sample is exactly equal to the population parameter even with accuracy increasing with larger samples. Interval estimates are more frequently used in this case. They refer to a stated range or interval used to estimate a parameter.

Where interval estimates are valid, the confidence level of an interval estimate is the probability the interval estimate will contain the parameter. Confidence levels usually are 90%, 95%, or 99%.

## Confidence intervals of large samples or populations with variance
Where $\bar X$ is the mean of a sample of size $n$, and either:
- the population is normal with a known variance $\sigma^2$; or
- the population has a known variance $\sigma^2$ and $n \geq 30$,
for a $100(1 - \alpha)$% confidence interval for $\mu$, the formula is:
$$
\bar X \pm Z_{\frac \alpha 2} (\frac \sigma {\sqrt n})
$$
If the variance is not known, the unbiased estimate of the population variance $\hat \sigma^2$ can be used in place:
$$
\bar X \pm Z_{\frac a 2} (\frac {\hat \sigma} {\sqrt n})
$$

## Confidence intervals of small samples or populations with unknown variance
The [[continuous-probability-distribution#$t$-distribution|t-distribution]] is employed here. Where $\bar X$ is the mean of a sample of size $n$, and:
- the sample size is small ($n < 30$); and
- the population does not have a known variance $\sigma^2$,
for a $100(1 - \alpha)$% confidence interval for $\mu$, the formula is:
$$
\bar X \pm t(\frac s {\sqrt n})
$$

## Confidence intervals of the population proportion
Where $n$ is large ($n \geq 30$), for a $100(1 - \alpha)$% confidence interval for $\mu$, the formula is:
$$
\hat p \pm Z_{\frac a 2} (\sqrt {\frac {\hat p \hat q} n})
$$
where:
- $\hat p$ is the sample proportion;
- $\hat q$ is the sample proportion of failures ($\hat q = 1 - \hat p$); and
- $n$ is the sample size.

# Maximum error of the mean

In the formula for calculating a confidence interval, there is a term that is added and subtracted to find the interval. This term in particular is known as the maximum error of the mean, and is the maximum likely difference between the point estimate of the parameter and the actual value of the parameter.

## Maximum error of the mean for confidence intervals of large samples or populations with variance
The maximum error of the mean for this scenario is as follows:
$$
Z_{\frac \alpha 2} (\frac \sigma {\sqrt n})
$$

## Maximum error of the mean for confidence intervals of small samples or populations with unknown variance
The maximum error of the mean for this scenario is as follows:
$$
t (\frac s {\sqrt n})
$$

