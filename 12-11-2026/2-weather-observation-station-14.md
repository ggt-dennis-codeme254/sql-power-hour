# Weather Observation Station 14

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-14/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
- Use a subquery to get all values that are less than 137.2345.
- Use `MAX` to get the max from the values above.
- To round to 4dp, use `ROUND(number, precision)`

## Solution
```sql
SELECT ROUND(MAX(Lat_N), 4) FROM (
    SELECT Lat_N FROM Station WHERE Lat_N < 137.2345
) AS Lat_Ns;
```