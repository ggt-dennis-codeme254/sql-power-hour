# Question Name

Link:

Difficulty: Easy/Medium/Hard

DB Engine: MySQL

## Intuition
**Intuition:**

1. `JOIN` the tables to connect hackers with their submissions, challenges, and difficulty levels to determine the maximum score for each challenge.
2. `WHERE` `s.score = d.score` filters submissions to keep only those where the hacker achieved a full score.
3. `GROUP BY` `h.hacker_id, h.name` groups the remaining submissions by hacker.
4. `HAVING COUNT(DISTINCT s.challenge_id) > 1` keeps only hackers who achieved full scores on more than one distinct challenge.
5. `ORDER BY` sorts hackers by the number of challenges on which they achieved full scores, in descending order. If there's a tie, it sorts by `hacker_id` in ascending order.

## Solution

```sql
SELECT h.hacker_id, h.name
FROM Hackers h
JOIN Submissions s
    ON h.hacker_id = s.hacker_id
JOIN Challenges c
    ON s.challenge_id = c.challenge_id
JOIN Difficulty d
    ON c.difficulty_level = d.difficulty_level
WHERE s.score = d.score
GROUP BY h.hacker_id, h.name
HAVING COUNT(DISTINCT s.challenge_id) > 1
ORDER BY COUNT(DISTINCT s.challenge_id) DESC, h.hacker_id ASC;
```