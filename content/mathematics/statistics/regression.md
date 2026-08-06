---
title: Regression
date: 2023-01-30T15:14:45+08:00
tags:
  - spark
  - knowledge
---

A process to analyse two sets of data and work backwards (hence the name) to deduce the relationship between the two sets of data. Should a relationship be found between the two sets, prediction of the value of one set of data given the value of the other can be made.

Often used in statistics as it helps to detect trends that are crucial in real life as they can lead to better decisions in planning; for example, in natural disaster proactiveness and weather forecasts, regression can serve to predict occurrences before they happen.

# Important notes

- Predictions should be viewed as only approximations rather than accurate calculations.
- Predictions should not be extended beyond the range of data values given as input data, as it remains inconclusive whether the relationship will maintain for all values of both data sets.

# Type of relationship

Regressions can be broadly classified according to the type of relationship the two sets of data have. In particular, a relationship can be:

- linear, and therefore expressable in the form $y = ax + b$ where $a$ and $b$ are constants; or
- non-linear, and often in the form of a curve.

# Methods of regression

Based on the type of the relationship, there are different methods available to perform regression.

## Linear relationships

There are two notable methods to perform regression on sets of data with a linear relationship. These methods are:

- line-fitting by eye; and
- calculating the least squares.

If an equation is given by $y$ in terms of $x$ (i.e., $y = ax + b$), the line fit is known as the regression line of $y$ on $x$. Inversely (i.e., $x  = ay + b$), it is called the regression line of $x$ on $y$

### Line-fitting by eye

Given two sets of data, we can attempt to analyse the relationship between them by plotting a graph using the given data. If points on the scatter diagram appear to lie close to a straight line, a regression line can be formed.

This method of regression is very subjective however as each individual plotting the regression line may not have the exact same line. Line-fitting by eye should only be used as a very rough estimation of the relationship between two sets of data.

### Least squares

Involves the construction of a regression line that fits the plotted points in a way that the total deviation between the line and the points is the least.

For any two sets of data with a relationship of $y = ax + b$, the method of least squares defines several formulae that can be employed and calculated. Combined:

$$
a = \frac {s_{xy}} {s_{xx}} =  \frac {\sum xy - \frac {(\sum x)(\sum y)} {n}} {\sum x^2 - \frac {(\sum x)^2} {n}}
$$

$$
b = \bar y - a \bar x = \frac {\sum y} n - a(\frac {\sum x} n)
$$

Breaking down each formula that this method defines:

$$
\bar x = \frac {\sum X} n
$$

$$
\bar y = \frac {\sum y} n
$$

$$
S_{xx} = \sum x^2 - \frac {(\sum x)^2} n
$$

$$
s_{yy} = \sum y^2 - \frac {(\sum y)^2} n
$$

$$
s_{xy} = \sum xy - \frac {(\sum x)(\sum y)} {n}
$$

# Correlation

Correlation does not mean causation; regression lines does not necessarily mean that there must be a relationship between the two data sets. There are generally four possible kinds of correlations: - positive correlations; - negative correlations; - no correlations; and - non-linear correlations.

## Correlation coefficient

Measures the strength of the linear relationship between two sets of data. Also known as the linear product moment correlation coefficient and the coefficient of correlation. A computed value that gives a clue of the type of linear correlation two data sets have.

Ranges from -1 to 1, with more positive values indicating a strong positive linear relationship and the opposite a strong negative linear relationship. Should there be no linear relationship, the value of $r$ will be almost 0.

The correlation coefficient $r$ can be calculated using the following formula:

$$
r = \frac {s_{xy}} {\sqrt {s_{xx} \times y_{yy}}}
$$
