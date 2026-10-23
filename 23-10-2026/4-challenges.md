# Challenges

Link: [Hackerrank](https://www.hackerrank.com/challenges/challenges/problem?isFullScreen=true)

Difficulty: Medium

DB Engine: MySQL

## Intuition
1. Count each hacker's challenges. Group the Challenges table by `hacker_id` and use `COUNT(*)` to calculate how many challenges each hacker created.
2. Find the maximum challenge count. Calculate the highest number of challenges created by any hacker. Hackers who achieved this maximum should always be included in the results.
3.Identify unique challenge counts. Group the hackers by their challenge counts and use `HAVING COUNT(*) = 1` to identify counts achieved by exactly one hacker. Include these hackers too.
4. Combine the conditions. Keep hackers whose challenge count equals the maximum OR whose challenge count is unique.
5. Sort the results. Order by the number of challenges in descending order, then by hacker_id in ascending order to break ties.

## Solution
```sql
SELECT h.hacker_id, h.name, COUNT(c.challenge_id) AS num_challenges
FROM Hackers h
JOIN Challenges c ON h.hacker_id = c.hacker_id
GROUP BY h.hacker_id, h.name
HAVING COUNT(c.challenge_id) = (
    SELECT MAX(challenge_count)
    FROM (
        SELECT COUNT(*) AS challenge_count
        FROM Challenges
        GROUP BY hacker_id
    ) AS counts
)
OR COUNT(c.challenge_id) IN (
    SELECT challenge_count
    FROM (
        SELECT COUNT(*) AS challenge_count
        FROM Challenges
        GROUP BY hacker_id
    ) AS counts
    GROUP BY challenge_count
    HAVING COUNT(*) = 1
)
ORDER BY num_challenges DESC, h.hacker_id ASC;
```