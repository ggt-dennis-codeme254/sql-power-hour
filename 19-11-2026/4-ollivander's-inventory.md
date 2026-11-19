# Ollivander's Inventory

Link: [Hackerrank](https://www.hackerrank.com/challenges/harry-potter-and-wands/problem?isFullScreen=true)

Difficulty: Medium

DB Engine: MySQL

## Intuition
The problem requires finding the cheapest non-evil wand for each combination of age and power.
1. Filter: Exclude evil wands (is_evil = 0).
2. Group logically: Wands with the same age and power belong to the same group.
3. Aggregate: Find the minimum coins_needed within each group.
4. Retrieve original rows: Use a correlated subquery to compare each wand's price against the minimum price for its age and power combination.
5. Sort: Order by power DESC, then age DESC.

## Solution

```sql
SELECT
    w.id,
    wp.age,
    w.coins_needed,
    w.power
FROM Wands w
INNER JOIN Wands_Property wp
    ON w.code = wp.code
WHERE wp.is_evil = 0
AND w.coins_needed = (
    SELECT MIN(w2.coins_needed)
    FROM Wands w2
    INNER JOIN Wands_Property wp2
        ON w2.code = wp2.code
    WHERE wp2.age = wp.age
      AND wp2.is_evil = 0
      AND w2.power = w.power
)
ORDER BY w.power DESC, wp.age DESC;
```
