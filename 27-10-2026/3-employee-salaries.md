# Employee Salaries

Link: [Hackerrank](https://www.hackerrank.com/challenges/salary-of-employees/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Filter using `WHERE` and combine conditions with `AND`.

## Solution

```sql
SELECT name FROM Employee WHERE salary > 2000 AND months < 10 ORDER BY employee_id;
```