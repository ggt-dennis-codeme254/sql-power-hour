# The Blunder

Link: [Hackerrank](https://www.hackerrank.com/challenges/the-blunder/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use `REPLACE(Salary, '0', '')` to remove zeros from a give salary.

Use `AVG` to find average before the zeros are removed and after the zeros are removed. Then find the difference between the two results.

## Solution
```sql
SELECT CEILING(AVG(Salary) - AVG(REPLACE(Salary, '0', ''))) FROM Employees;
```