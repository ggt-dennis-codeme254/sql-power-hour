# Question Name

Link:

Difficulty: Easy/Medium/Hard

DB Engine:

## Intuition

The table has `ID`, `CITY`, `STATE`, `LAT_N` and `LONG_W` fields but we only want to query the `CITY` and `STATION` columns.

## Solution

```sql
SELECT City, State FROM STATION;
```