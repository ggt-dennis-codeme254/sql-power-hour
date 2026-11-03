# Average Population

Link: [Hackerrank](https://www.hackerrank.com/challenges/average-population/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition

Use `AVG` to find the average and `FLOOR` to round down to the nearest integer.

## Solution
```sql
SELECT FLOOR(AVG(Population)) FROM City;
```