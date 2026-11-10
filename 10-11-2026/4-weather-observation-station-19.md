# Weather Observation Station 19

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-19/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
- a => MIN(Lat_n)
- b => MAX(Lat_n)
- c => MIN(Long_w)
- d => MAX(Long_w)
- euclidean distance = ROUND(SQRT(POW((b - a), 2) + POW((d - c), 2)), 4)

## Solution
```sql
SELECT ROUND(SQRT(
    POW((MAX(Lat_n) - MIN(Lat_n)), 2) +
    POW((MAX(Long_w) - MIN(Long_w)), 2)
), 4) FROM Station;
```