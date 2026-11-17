# Weather Observation Station 16

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-16/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use the `ROUND` and `MIN` functions.

## Solution
```sql
SELECT ROUND(MIN(Lat_N), 4) FROM Station WHERE Lat_N > 38.7780;
```