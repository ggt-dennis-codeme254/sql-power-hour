# Weather Observation Station 18

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-18/problem?isFullScreen=true)

Difficulty: Medium

DB Engine: MS SQL Server

## Intuition
- a = MIN(LAT_N)
- b = MIN(LONG_W)
- c = MAX(LAT_N)
- d = MAX(LONG_W)
- Manhattan distance = | a - c | + | b - d |
- Manhattan distance = ABS(MIN(LAT_N) - MAX(LAT_N)) + ABS(MIN(LONG_W) - MAX(LONG_W))
- Round the result above to a scale of 4 dp.

## Solution
```sql
SELECT
FORMAT(ROUND((ABS(MIN(Lat_N) - MAX(Lat_N)) + ABS(MIN(Long_W) - MAX(Long_W))), 4), '0.####')
FROM Station;
```

Best approach is to use the `CAST` function:

```sql
SELECT
CAST(
    ABS(MIN(Lat_N) - MAX(Lat_N)) + 
    ABS(MIN(Long_W) - MAX(Long_W))
    AS DECIMAL(10, 4)
) AS ManhattanDistance
FROM Station;
```