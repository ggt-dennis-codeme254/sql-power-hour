# Question Name

Link:

Difficulty: Medium

DB Engine: MySQL

## Intuition
N represents the value of a node in binary tree, regardless of whether it is a leaf, inner or root.

P represents the parent of N.

- Leaves are not parents, meaning given a node, if we want to establish if it is a leaf, it should not be there in column P.
- Given a node, to establish if it is an inner node, it should be there in the P Column.
- To establish if a Node is a root, the corresponding P column should be `NULL`

## Solution

```sql
SELECT N,
    CASE
        WHEN P IS NULL THEN 'Root'
        WHEN N IN (SELECT P FROM Bst) THEN 'Inner'
        ELSE 'Leaf'
    END AS Type
FROM Bst
ORDER BY N;
```
