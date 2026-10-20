# Weather Observation Station 5

Link: [Hackerrank](https://www.hackerrank.com/challenges/weather-observation-station-5/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
The question will need two queries, one to find the min city and one to find the max city.

The order by clause will take both the length of the city name and the city itself that way, if two cities have the same length, the order by clause will use the name to prioritize one of the cities alphabetically.

## Solution

```sql
-- Query to find the min city
SELECT City, LENGTH(City) AS StringLength FROM Station
ORDER BY StringLength, City LIMIT 1;

-- Query to find the max city
SELECT City, LENGTH(City) AS StringLength FROM Station
ORDER BY StringLength DESC, City LIMIT 1;
```