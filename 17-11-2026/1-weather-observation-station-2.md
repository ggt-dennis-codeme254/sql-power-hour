# Weather Observation Station 2

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-2/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use `ROUND` and `SUM` functions.

## Solution

```sql
SELECT ROUND(SUM(Lat_N), 2), ROUND(SUM(Long_W), 2) FROM Station;
```