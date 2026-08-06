---
title: Allan variance and deviation
date: 2025-02-19
tags:
  - spark
  - knowledge
---
Allan variance is a measure of frequency stability in clocks, oscillators, and amplifiers, expressed mathematically as $\sigma^2_y(\tau)$ and abbreviated as AVAR. It can be expressed like so:

$$
\sigma^2_y(\tau) = \frac{1}{2} \langle (\bar{y}_{n+1} - \bar{y}_n)^2 \rangle = \frac{1}{2\tau} \langle (x_{n+2} - 2x_{n+1} + x_n)^2 \rangle
$$

# Allan deviation

Like standard deviation, Allan variance has its deviated variant called Allan deviation (abbreviated as ADEV), derivable through the square root of AVAR: $\sigma_y(\tau) = \sqrt{\sigma^2_y(\tau)}$.

ADEV is typically plotted using a log-log linear graph of ADEV against observation time ($\tau$). The plot suggests how the stability of a signal changes over time.