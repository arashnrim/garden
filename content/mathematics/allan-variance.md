---
title: Allan variance and derivation
date: 2025-02-19
tags:
  - spark
  - knowledge
---
Also abbreviated as **AVAR**, it is a measure of frequency stability in clocks, oscillators, and amplifiers. Expressed mathematically as $\sigma^2_y(\tau)$. It can be expressed like so:

$$
\sigma^2_y(\tau) = \frac{1}{2} \langle (\bar{y}_{n+1} - \bar{y}_n)^2 \rangle = \frac{1}{2\tau} \langle (x_{n+2} - 2x_{n+1} + x_n)^2 \rangle
$$

# Allan deviation

Like standard deviation, Allan variance has Allan deviation (abbreviated as **ADEV**), derivable through the square root of AVAR: $\sigma_y(\tau) = \sqrt{\sigma^2_y(\tau)}$