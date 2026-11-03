# Revising Aggregation - The Count Function

Link: [Hackerrank](https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use the `Count` aggregate function and filter with the `WHERE` clause to find all cities where the population is greater than 10000.

## Solution
```sql
SELECT COUNT(*) FROM City WHERE Population > 100000;
```