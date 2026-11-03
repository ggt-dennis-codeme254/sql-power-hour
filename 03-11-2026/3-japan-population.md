# Japan Population

Link: [Hackerrank](https://www.hackerrank.com/challenges/japan-population/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MS SQL Server

## Intuition
Use the `SUM` aggregate function and filter with 'JPN' on `CountryCode` columns.

## Solution
```sql
SELECT SUM(Population) FROM City
WHERE CountryCode = 'JPN';
```