# Weather Observation Station 5

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-6/problem?isFullScreen=true)

Difficulty: Easy/Medium/Hard

DB Engine: MySQL

## Intuition
We want to query all city names that start with 'a', 'e', 'i', 'o', 'u'.

To do indexing, we will use the `SUBSTRING` function which takes 3 parameters:
- First parameter is the string
- Second parameter is start position
- Third parameter is end position

In SQL, indexing starts from 1, so the second parameter will be 1, that gives us the first character, the third parameter will also be 1 because we only want 1 character.

## Solution
```sql
SELECT DISTINCT City FROM Station
WHERE SUBSTRING(City, 1, 1) IN ('a', 'e', 'i', 'o', 'u')
ORDER BY City;
```