---
title: Integration
date: 2023-05-21T19:24:43+08:00
tags:
  - spark
---

The reverse process of [[differentiation]], where a derived equation is restored to its original equation. There is a loss when differentiating an equation (i.e., constants are stripped away), which is why integration is only able to add an arbitrary constant $C$ or $K$ to the restored equation.

Has a notation of $\int f(x) \space dx$, read as "the integral of $f(x)$ with respect to $x$". 
- $f(x)$ is known as the integrand;
- $F(x)$ is known as anti-derivative of $f(x)$
- $C$ an arbitrary constant of integration.

# Rules

As with differentiation, integration has several rules that are the opposite of their counterparts with differentiation. These rules include the:
- power rule;
- reciprocal rule.
- sum and difference rule;
- constant multiple rule; and
- product rule.

## Power rule
$$
\int x^n \space dx = \frac {x^{n + 1}} {n + 1} + C
$$

If the integral equation is in the form $(ax + b)^n$, the following formula can be used:
$$
\int (ax + b)^n = \frac {(ax + b)^{n + 1}} {a(n + 1)}
$$

## Reciprocal rule
When the exponent of $x$ is $-1$, it's not possible to use the power rule as it'll leave with a fraction dividing by zero. In this case, this rule is used instead:

$$
\int \frac 1 x \space dx = \int x^{-1} \space dx = ln \mid x \mid
$$


## Sum and difference rule
$$
\int [f(x) + g(x)] \space dx = \int f(x) \space dx + \int g(x) \space dx
$$
$$
\int [f(x) - g(x)] \space dx = \int f(x) \space dx - \int g(x) \space dx
$$

## Constant multiple rule
$$
\int kf(x) \space dx = k \int f(x) \space dx
$$