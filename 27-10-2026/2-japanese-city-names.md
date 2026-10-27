# Japanese City Names

Link: [Hackerrank](https://www.hackerrank.com/challenges/japanese-cities-name/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition
We want all names for cities that are in Japan. The country code for Japan is 'JPN', we will use this with the `WHERE` clause.

## Solution

```sql
SELECT Name FROM City WHERE CountryCode = 'JPN';
```