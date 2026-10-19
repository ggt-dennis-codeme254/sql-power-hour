# Japanese Cities' Attributes

Link: [Hackerrank](https://www.hackerrank.com/challenges/japanese-cities-attributes/problem?isFullScreen=true)

Difficulty: Easy/Medium/Hard

DB Engine: MySQL

## Intuition

We want to query all attributes/fields from the City table for all cities in Japan.

The `COUNTRYCODE` for Japan is `JPN`. We will use the `WHERE` clause for filtering.

## Solution

```sql
SELECT * FROM City WHERE COUNTRYCODE = 'JPN';
```