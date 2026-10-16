# Weather Observation Station 1

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-1/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition

The table has `ID`, `CITY`, `STATE`, `LAT_N` and `LONG_W` fields but we only want to query the `CITY` and `STATION` columns.

## Solution

```sql
SELECT City, State FROM STATION;
```