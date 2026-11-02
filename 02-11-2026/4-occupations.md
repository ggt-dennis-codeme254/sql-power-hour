# Occupations

Link: [Hackerrank](https://www.hackerrank.com/challenges/occupations/problem?isFullScreen=true)

Difficulty: Medium

DB Engine: MySQL

## Intuition
The trick is to first assign a row number to each person within their occupation using `ROW_NUMBER()`. This ensures that the first doctor, professor, singer, and actor share the same row number, the second ones share another, and so on.

We then use conditional aggregation with `CASE` to place each name under its respective occupation column. `MAX()` combines the names sharing the same row number into a single row, while `GROUP BY RowNum` brings everything together.

## Solution

```sql
SELECT
    MAX(CASE WHEN Occupation = 'Doctor' THEN Name END) AS Doctor,
    MAX(CASE WHEN Occupation = 'Professor' THEN Name END) AS Professor,
    MAX(CASE WHEN Occupation = 'Singer' THEN Name END) AS Singer,
    MAX(CASE WHEN Occupation = 'Actor' THEN Name END) AS Actor
FROM (
    SELECT
        Name,
        Occupation,
        ROW_NUMBER() OVER (
            PARTITION BY Occupation
            ORDER BY Name
        ) AS RowNum
    FROM Occupations
) AS RankedOccupations
GROUP BY RowNum
ORDER BY RowNum;
```

Or use the `PIVOT` function in SQL Server:

```sql
SELECT
    Doctor,
    Professor,
    Singer,
    Actor
FROM (
    SELECT
        Name,
        Occupation,
        ROW_NUMBER() OVER (
            PARTITION BY Occupation
            ORDER BY Name
        ) AS RowNum
    FROM Occupations
) AS SourceTable
PIVOT (
    MAX(Name)
    FOR Occupation IN (
        [Doctor],
        [Professor],
        [Singer],
        [Actor]
    )
) AS PivotTable
ORDER BY RowNum;
```