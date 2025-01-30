---
title: Differentiation
date: 2023-04-25T08:07:46+08:00
tags:
  - spark
---

The process of finding the rate of change of one variable compared to another. Useful when the rate of change is non-linear. Given a function $f(x)$, its derivative can be denoted by either:
- $\frac {dy} {dx}$, and the derivative $y'$ (y prime); or
- $\frac {d} {dx} f(x)$, and the derivative $f'$ (f prime).

Because it deals with the rate of change, differentiation is useful for:
- finding the gradient of a curve at a point;
- calculating distance, velocity, and acceleration given their graphs;
- determining the maximum and minimum points of curves;
- measuring rates of change of certain parameters (e.g., volume, area, and capacity); and
- other situation dealing with the rate of change.

# Rules

There are five rules that can be implemented to differentiate an equation. These rules include the:
- power rule;
- sum and difference rule;
- constant multiple rule;
- product rule; and
- quotient rule.

## Power rule

Expressed with $f(x)$:
$$
f(x) = x^{n} \implies f'(x) = nx^{n-1}
$$
Expressed with $y$:
$$
y = x^{n} \implies \frac {dy} {dx} = nx^{n-1}
$$
TL;DR, power bring down, power minus one.

## Sum and difference rule
Expressed with $y$:
$$
y = f(x) + g(x) \implies \frac d {dx} [f(x) + g(x)] = f'(x) + g'(x)
$$
$$
y = f(x) - g(x) \implies \frac {d} {dx}[f(x) - g(x)] = f'(x) - g'(x)
$$

## Constant multiple rule

## Product rule
Expressed with $y$:
$$
y = f(x) \times g(x) \implies \frac {dy} {dx} = f(x) \space g'(x) + f'(x) \space g(x) 
$$

## Quotient rule
Expressed with $y$:
$$
y = \frac {f(x)} {g(x)} \implies \frac {dy} {dx} = \frac {g(x)f'(x) - g'(x)f(x)} {[g(x)]^2}
$$
Where possible, attempt to convert the fraction into a form such that the product rule may be applied (e.g., converting $\frac {x+1} {x^2}$ into $(x+1)(x^-2)$).

## Chain rule
Expressed with $y$, if $y$ is a function of $u$, and $u$ is a function of $x$ (i.e., $y$ is expressed in terms of $u$ and $u$ is expressed in terms of $x$), the chain rule can be formed:
$$
\frac {dy} {dx} = \frac {dy} {du} \times \frac {du} {dx}
$$

# Differentiating different types of equations

## Trigonometric equations
Remembering trigonometric equations to differentiate is a bit complicated but still possible.

$$
\frac d {dx} sin[f(x)]^n = n \space f'(x) \space (sin[f(x)])^{n-1} \space cos[f(x)]
$$
$$
\frac d {dx} cos[f(x)]^n = -n \space f'(x) \space (cos[f(x)])^{n-1} \space sin[f(x)]
$$
$$
\frac d {dx} tan[f(x)]^n = n \space f'(x) \space (tan[f(x)])^{n-1} \space sec[f(x)]^2
$$

## Exponential functions
$$
\frac d {dx} e^{f(x)} = f'(x) \space e^{f(x)} \space ln(e) = f'(x) \space e^{f(x)}
$$$$
\frac d {dx} a^{f(x)} = f'(x) \space a^{f(x)} \space ln(a)
$$
## Logarithmic functions
$$
\frac d {dx} ln[f(x)] = \frac {f'(x)} {f(x)}
$$
$$
\frac d {dx} log_a[f(x)] = \frac {f'(x)} {ln(a) \space f(x)}
$$

# Applications of differentiation

Generally, differentiation is used where gradients or rates of changes are involved. Some particular examples in which differentiation can be applied include:
- derivative tests;
- problems of maxima and minima;
- small changes and approximation; and
- rates of change.

## Derivative tests
Derivative tests are used in the first ($f'(x)$) and second ($f''(x)$) of a derived equation. They are used to determine the nature of stationary points.
- The first derivative test tests $f'(x)$ by getting the values adjacent to the value of $x$. This method can determine whether the point is a maximum, minimum, or inflexion point.
- The second derivative test test $f''(x)$ by checking whether the value is greater than or less than zero. This method can only determine whether the point is a maximum or minimum point; otherwise, use the first derivative test.

### First derivative test
1. Determine the first derivative (i.e., $f'(x)$).
2. Find two adjacent values of $x$, one slightly lower and one slightly higher than $x$.
3. Determine the value of $f'(x)$ when $x$ is both values.
4. Construct a table to determine the shape of the derived equation.

A table like below could be used:
| $x < a$ | $x = a$ | $x > a$ | Nature of stationary point |
|:-:|:-:|:-:|:-:|
| Positive | 0 | Negative | Maximum point |
| Negative | 0 | Positive | Minimum point |
| Positive | 0 | Positive | Inflexion point |
| Negative | 0 | Negative | Inflexion point |

### Second derivative test
1. Determine the second derivative (i.e., $f''(x)$).
2. Determine the value of $f''(x)$ when $x = a$.
3. Determine if the point is a maximum or minimum point.
	- If $f''(x) < 0$, the point is a maximum one.
	- If $f''(x) > 0$, the point is a minimum one.
	- If $f''(x) = 0$, the result is inconclusive; use the first derivative test instead.

## Problems of maxima and minima
Many problems of this kind generally involve things where a maximum or minimum value of something is required, like the minimum length, breadth, or height for the maximum or minimum area of volume. In general, the following steps are used to solve such problems:
1. Determine what variable is independent, and understand how it affects other values (e.g., how height, breadth, or width affects area or volume).
2. Determine a formula from the question's context (e.g., area or volume).
3. Differentiate the formula.
4. Find the stationary points by equating the differential equation to zero (i.e., $\frac {dy} {dx} = 0$).
5. Use the first or second derivative tests to verify if the point is a maximum, minimum, or inflexion point.

## Small changes and approximation
Many problem of this kind generally give you the values to approximate. The questions may generally give you the new value of $x$ so that you can find the change in $x$ ($\sigma x$). In general, the following steps are used to solve such problems:
1. Determine the change in $x$ ($\sigma x = x_2 - x_1$).
2. Approximate the change in $y$ ($\sigma y \approx \frac {dy} {dx} \sigma x$).
3. Use the change in $y$ as required by the question.

## Rates of change
Many problems of this kind will give you the rates of change of different variables and expect you to find the rates of change of one variable. In general, the following steps are used to solve such problems:
1. Figure out which variable and its rate of change is the question asking for.
2. Determine a formula from the question's context (e.g., a given formula, volume, area).
3. Differentiate the formula.
4. Establish a chain rule that sets up the rates of change of all variables.
5. Manipulate the equation to find the rate of change of the intended variable.