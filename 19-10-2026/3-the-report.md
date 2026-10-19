# The Report

Link: [Hackerrank](https://www.hackerrank.com/challenges/the-report/problem?isFullScreen=true)

Difficulty: Medium

DB Engine: MySQL

## Intuition
- We want a report containing `Name`, `Grade` and `Mark`.
- No names for students who received grades lower than 8.
- Sort in descending order of `Grade`.
- If there are ties in `Grade`, order the candidates by their name in ascending order.
- If grade is lower than 8, use NULL as the name, and List in descending order of grades.
- For those with grade lower than 8, if there's a tie, order by marks in ascending order.

We don't need to perform any join operations, the Grades table is not really a table, it's just a criteria to help know the Grades for various scores, if anything, it doesn't even need to be stored in the database.

For this question, we use  `CASE` to map various marks to grades, the resulting column from this case statement will be the `Grade` column, we then Order using two columns, the resulting `Grade` column and the `Name` column.

## Solution

```sql
SELECT
    CASE
        WHEN Marks < 70 THEN NULL
        ELSE Name
    END AS Name,

    CASE
        WHEN Marks >= 90 THEN 10
        WHEN Marks >= 80 AND Marks <= 89 THEN 9
        WHEN Marks >= 70 AND Marks <= 79 THEN 8
        WHEN Marks >= 60 AND Marks <= 69 THEN 7
        WHEN Marks >= 50 AND Marks <= 59 THEN 6
        WHEN Marks >= 40 AND Marks <= 49 THEN 5
        WHEN Marks >= 30 AND Marks <= 39 THEN 4
        WHEN Marks >= 20 AND Marks <= 29 THEN 3
        WHEN Marks >= 10 AND Marks <= 19 THEN 2
        ELSE 1
    END AS Grade, Marks
    
FROM Students
ORDER BY Grade DESC, Name;
```