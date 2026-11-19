# Average Population of Each Continent

Link: [Hackerrank](https://www.hackerrank.com/challenges/average-population-of-each-continent/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
Use `GROUP BY` clause to group the continents and `AVG` function to find the average population of each continent.

## Solution
```sql
SELECT Co.Continent, FLOOR(AVG(Ci.Population))
FROM Country Co
JOIN City Ci ON Ci.CountryCode = Co.Code
GROUP BY Co.Continent;
```