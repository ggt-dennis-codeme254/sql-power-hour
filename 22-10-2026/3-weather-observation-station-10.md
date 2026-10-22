# Weather Observation Station 10

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-10/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
1. Use `SUBSTRING(City, LENGTH(City), 1)` to get the last character of each city and check if it's not a vowel.
2. Use `DISTINCT` to remove duplicate city names.

## Solution

```sql
SELECT DISTINCT City FROM Station
WHERE SUBSTRING(City, LENGTH(City), 1) NOT IN ('a', 'e', 'i', 'o', 'u')
ORDER BY City;
```