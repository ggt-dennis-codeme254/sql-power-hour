# African Cities

Link: [Hackerrank](https://www.hackerrank.com/challenges/african-cities/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
A simple join and filter.

## Solution
```sql
SELECT City.Name
FROM City City
JOIN Country Country ON City.CountryCode = Country.Code
WHERE Country.Continent = 'Africa';
```