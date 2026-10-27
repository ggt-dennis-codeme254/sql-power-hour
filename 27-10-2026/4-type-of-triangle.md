# Type of Triangle

Link: [Hackerrank](https://www.hackerrank.com/challenges/what-type-of-triangle/problem?isFullScreen=true)

Difficulty: Easy

DB Engine: MySQL

## Intuition

First, check if the sum of any two sides is less than the third side. If so, it's Not A Triangle.

Next, check if all three sides are equal. If they are, it's Equilateral.

Then, check if all three sides are different. If they are, it's Scalene.

If none of the above conditions apply, the triangle must be Isosceles.

## Solution

```sql
SELECT
    CASE
     WHEN (A + B) < C OR (A + C) < B OR (B + C) < A THEN 'Not A Triangle'
     WHEN A = B AND B = C THEN 'Equilateral'
     WHEN A != B AND B != C AND A != C THEN 'Scalene'
     ELSE 'Isosceles'
    END AS Type
FROM Triangles;
```