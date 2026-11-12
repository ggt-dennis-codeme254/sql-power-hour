# Weather Observation Station 13

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-13/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
- Use `ROUND(number, precision)` to round to 4dp.
- Use `AND` operator to join the two conditions `Lat_N > 38.7880`, `Lat_N < 137.2345`

## Solution

```sql
SELECT ROUND(SUM(Lat_N), 4) FROM Station
WHERE Lat_N > 38.7880 AND Lat_N < 137.2345;
```