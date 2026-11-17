# Weather Observation Station 20

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-20/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use a Common Table Expression (CTE) to rank the latitudes in ascending order. Use the `ROW_NUMBER()` window function, together with `OVER(ORDER BY Lat_N)`, to assign a sequential row number to each latitude based on its position in the sorted dataset.

Also, use `COUNT(*) OVER()` to capture the total number of records without collapsing the result set.

With the row numbers and total record count available, we can identify the middle position using the median formula:

`FLOOR((Total_Rows + 1) / 2)`

Finally, filter the CTE to retrieve the latitude at that middle position and use `ROUND()` to round the result to four decimal places.

## Solution

The solution below works becase the dataset has an odd number of records.
```sql
WITH RankedLatitudes AS (
    SELECT Lat_N, ROW_NUMBER() OVER (ORDER BY Lat_N) AS Rn,
    COUNT(*) OVER () AS Total_Rows
    FROM Station
)

SELECT ROUND(Lat_N, 4) FROM RankedLatitudes
WHERE Rn = FLOOR((Total_Rows + 1) / 2);
```

In case the dataset had an even number of records:

```sql
WITH RankedLatitudes AS (
    SELECT
        Lat_N,
        ROW_NUMBER() OVER (ORDER BY Lat_N) AS Rn,
        COUNT(*) OVER () AS Total_Rows
    FROM Station
)

SELECT ROUND(AVG(Lat_N), 4)
FROM RankedLatitudes
WHERE Rn IN (
    FLOOR((Total_Rows + 1) / 2),
    FLOOR((Total_Rows + 2) / 2)
);
```