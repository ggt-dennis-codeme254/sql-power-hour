# Population Density Difference

Link: [Hackerrank](https://www.hackerrank.com/challenges/population-density-difference/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use `MAX` function to get the maximum population and the `MIN` function to get the minimum population, then find the difference between the two.

## Solution
```sql
SELECT MAX(Population) - MIN(Population) FROM City;
```