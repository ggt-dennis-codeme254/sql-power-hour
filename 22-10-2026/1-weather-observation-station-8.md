# Weather Observation Station 8

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-8/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
We want to query all city names that start and end with 'a', 'e', 'i', 'o', 'u'.

1. Use `SUBSTRING(City, 1, 1)` to get the first character of each city and check if it's a vowel.
2. Use `SUBSTRING(City, LENGTH(City), 1)` to get the last character and check if it's a vowel.
3. Use `AND` to ensure both the first and last characters are vowels.
4. Use `DISTINCT` to remove duplicate city names.
5. Use `ORDER BY City` to sort the results alphabetically.

## Solution

```sql
SELECT DISTINCT City FROM Station
WHERE (
SUBSTRING(City, 1, 1) IN ('a', 'e', 'i', 'o', 'u')
AND
SUBSTRING(City, LENGTH(City), 1) IN ('a', 'e', 'i', 'o', 'u')
)
ORDER BY City;
```