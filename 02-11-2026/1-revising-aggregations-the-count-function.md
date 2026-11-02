# Revising Aggregations - The Count Function

Link: [Hackerrank](https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use the `COUNT` function to count the number of cities where the population is greater than 100_000.

## Solution
```sql
SELECT COUNT(ID) FROM City
WHERE Population > 100000;
```