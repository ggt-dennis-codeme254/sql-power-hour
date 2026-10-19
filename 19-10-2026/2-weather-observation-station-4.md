# Weather Observation Station 4

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-4/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
We want to find the difference between total number of `CITY` entries and the number of distinct `CITY` entry.

We will use subqueries and a subtraction operation here, the left operand will be a subquery returning the total number of `CITY` entries and the right operand will be a subquery returning the number of distinct `CITY` entries. We then use a `SELECT` statement on the final result to query it.

## Solution

```sql
SELECT (
(SELECT COUNT(City) FROM Station) - (SELECT COUNT(DISTINCT City) FROM Station)
);
```