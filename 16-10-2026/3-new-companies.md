# New Companies

Link: [Hackerrank](https://www.hackerrank.com/challenges/the-company/problem?isFullScreen=true)

Difficulty: Medium

DB Engine: MySQL

## Intuition
For each company, we want to print the following:
- `company_code`
- `founder`
- total number of lead managers
- total number of senior managers
- total number of managers
- total number of employees

Output is ordered by ascending `company_code`

When you join multiple tables that have one-to-many relationships with the same table, you can end up duplicating rows. For example, if a company has 2 senior managers and 3 employees, joining both tables can produce 6 rows because each senior manager gets matched with every employee. Consequently, using `COUNT()` can give you incorrect results. We will use `COUNT(DISTINCT column)` to solve this by counting each unique record only once.

## Solution

```sql
SELECT
    c.company_code,
    c.founder,
    COUNT(DISTINCT lm.lead_manager_code),
    COUNT(DISTINCT sm.senior_manager_code),
    COUNT(DISTINCT m.manager_code),
    COUNT(DISTINCT e.employee_code)
FROM Company c
LEFT JOIN Lead_Manager lm ON c.company_code = lm.company_code
LEFT JOIN Senior_Manager sm ON c.company_code = sm.company_code
LEFT JOIN Manager m ON c.company_code = m.company_code
LEFT JOIN Employee e ON c.company_code = e.company_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code ASC;
```