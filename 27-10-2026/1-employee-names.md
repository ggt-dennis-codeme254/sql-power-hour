# Employee Names

Link: [Hackerrank](https://www.hackerrank.com/challenges/name-of-employees/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
We want all employe names sorted in ascending order of names. A simple `SELECT` statement with an `ORDER BY` clause will do the trick.

## Solution
```sql
SELECT name FROM Employee ORDER BY name;
```