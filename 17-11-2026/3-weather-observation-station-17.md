# Weather Observation Station 17

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-17/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use a subquery to get the smallest nothern latitude (LAT_N) that is greater than 38.7780.

Pass this value to the main query to filter with LAT_N in the main query.

## Solution
```sql
SELECT ROUND(Long_W, 4) FROM Station WHERE Lat_N = (
    SELECT MIN(Lat_N) FROM Station WHERE Lat_N > 38.7780
);
```