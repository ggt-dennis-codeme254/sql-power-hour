# Weather Observation Station 3

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-3/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition

The table has `ID`, `CITY`, `STATE`, `LAT_N` and `LONG_W` fields but we only want to query the `CITY` and `STATION` columns.

We want to query the table for cities who's id is an even number.

We will use the modulo operator to determine if an id is even, a number is said to be even if the remainder of dividing the number by 2 is zero, the modulo operator will give us this.

we will then use the `WHERE` clause to filter those `ID`s that don't give a remainder of zero.

finally, we will use the `DISTINCT` clause on the `CITY` column to remove any duplicates.

## Solution

```sql
SELECT DISTINCT City FROM STATION
WHERE ID % 2 = 0;
```