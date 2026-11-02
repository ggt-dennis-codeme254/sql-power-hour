# Revising Aggregations - The Sum Function

Link: [Hackerrank](https://www.hackerrank.com/challenges/revising-aggregations-sum/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use the `SUM` function to add the populations for all the rows where district is 'California'.

## Solution
```sql
SELECT SUM(Population) FROM City 
WHERE District = 'California';
```