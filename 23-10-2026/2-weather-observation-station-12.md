# Weather Observation Station 12

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-12/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
1. Use `SUBSTRING(City, 1, 1)` to get the first character of the string.
2. Use `SUBSTRING(City, 1, 1)` to get the last character of the string.
3. Use `NOT IN ('a', 'e', 'i', 'o', 'u')` to check that the characters above are not vowels.
4. Use `DISTINCT` to get unique city names.
5. Join the two conditions (1 and 2 above) using `AND`.

## Solution
```sql
SELECT DISTINCT City FROM Station
WHERE SUBSTRING(City, 1, 1) NOT IN ('a', 'e', 'i', 'o', 'u')
AND SUBSTRING(City, LENGTH(City), 1) NOT IN ('a', 'e', 'i', 'o', 'u');
```