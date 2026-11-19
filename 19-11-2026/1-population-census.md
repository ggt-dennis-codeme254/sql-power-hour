# Population Census

Link: [Hackerrank](https://www.hackerrank.com/challenges/asian-population/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
A simple join with the `SUM` aggregate function.

## Solution
```sql
SELECT SUM(Ci.Population)
FROM City Ci
JOIN Country Co ON Ci.CountryCode = Co.Code
WHERE Co.Continent = 'Asia';
```