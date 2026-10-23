# Higher Than 75 Marks

Link: [Hackerrank](https://www.hackerrank.com/challenges/more-than-75-marks/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition

1. Use `SUBSTRING(Name, Length(Name)-2, 3)` to get the last 3 characters and pass them to `ORDER BY`

## Solution
```sql
SELECT Name FROM Students
WHERE Marks > 75
ORDER BY SUBSTRING(Name, Length(Name)-2, 3), ID;
```