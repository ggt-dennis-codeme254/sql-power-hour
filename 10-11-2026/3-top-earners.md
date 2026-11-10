# Top Earners

Link: [Hackerrank](https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Find the max salary and count the number of employees with the max salary.

## Solution

```sql
SELECT 
    MAX(months * salary) AS max_earnings,
    COUNT(*) AS employee_count
FROM Employee
WHERE months * salary = (
    SELECT MAX(months * salary)
    FROM Employee
);
```