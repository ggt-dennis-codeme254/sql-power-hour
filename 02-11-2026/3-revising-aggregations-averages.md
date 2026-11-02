# Revising Aggregations - Averages

Link: [Hacerrank](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use the `AVG` function to find the average population for all cities where district is 'California'.

## Solution
```sql
SELECT AVG(Population)
FROM City WHERE District = 'California';
```