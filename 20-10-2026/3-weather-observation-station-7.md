# Weather Observation Station 7

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-7/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
We want to query all city names that end with 'a', 'e', 'i', 'o', 'u'.

To do indexing, we will use the `SUBSTRING` function which takes 3 parameters:
- First parameter is the string
- Second parameter is start position
- Third parameter is end position

In SQL, indexing starts from 1, so the second parameter will be length of the string which we will find using the `LENGTH` function (`LENGTH(str)`), that gives us the last character, the third parameter will also be 1 because we only want 1 character.

## Solution
```sql
SELECT DISTINCT City FROM Station
WHERE SUBSTRING(City, LENGTH(City), 1) IN ('a', 'e', 'i', 'o', 'u')
ORDER BY City;
```