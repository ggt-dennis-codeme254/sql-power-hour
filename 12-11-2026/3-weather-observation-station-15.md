# Weather Observation Station 15

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-15/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
- Use a subquery to get station that has Lat_N less than 137.2345
- Query the result above for the Long_W field.

## Solution

```sql
SELECT ROUND(Long_w, 4)
FROM Station
WHERE Lat_N = (
    SELECT MAX(Lat_N) FROM Station
    WHERE Lat_N < 137.2345
);
```