// -- Basic Queries and Joins:

// -- Retrieve the names of employees who earn more than their department's average salary.
// SELECT e.name
// FROM employees e
// JOIN departments d ON e.department_id = d.id
// WHERE e.salary > (
//     SELECT AVG(salary)
//     FROM employees
//     WHERE department_id = e.department_id
// );

// -- Find the second highest salary from the Employee table.
// SELECT MAX(salary)
// FROM employees
// WHERE salary < (
//     SELECT MAX(salary)
//     FROM employees
// );

// -- List all departments along with the number of employees in each department.
// SELECT d.name, COUNT(e.id) AS employee_count
// FROM departments d
// LEFT JOIN employees e ON d.id = e.department_id
// GROUP BY d.name;

// -- Write a query to fetch the common records between two tables.
// SELECT *
// FROM table1
// INTERSECT
// SELECT *
// FROM table2;

// -- Subqueries and Nested Queries:

// -- Write a query to find employees who have the same job as their manager.
// SELECT e.name
// FROM employees e
// JOIN employees m ON e.manager_id = m.id
// WHERE e.job_title = m.job_title;

// -- Retrieve the names of employees who do not have any subordinates.
// SELECT e.name
// FROM employees e
// LEFT JOIN employees s ON s.manager_id = e.id
// WHERE s.id IS NULL;

// -- Find the departments which have more than five employees.
// SELECT d.name
// FROM departments d
// JOIN employees e ON d.id = e.department_id
// GROUP BY d.name
// HAVING COUNT(e.id) > 5;

// -- Aggregation and Group By:

// -- Write a query to find the total salary expenditure for each department.
// SELECT d.name, SUM(e.salary) AS total_salary
// FROM departments d
// JOIN employees e ON d.id = e.department_id
// GROUP BY d.name;

// -- Retrieve the department-wise highest salary from the employee table.
// SELECT d.name, MAX(e.salary) AS highest_salary
// FROM departments d
// JOIN employees e ON d.id = e.department_id
// GROUP BY d.name;

// -- Find the average salary of employees who joined in the last year.
// SELECT AVG(salary)
// FROM employees
// WHERE YEAR(join_date) = YEAR(CURDATE()) - 1;

// -- String and Date Functions:

// -- Write a query to fetch employees whose names start with 'A' and end with 'N'.
// SELECT *
// FROM employees
// WHERE name LIKE 'A%N';

// -- Find employees who joined in the first quarter of the year.
// SELECT *
// FROM employees
// WHERE MONTH(join_date) IN (1, 2, 3);

// -- Write a query to calculate the tenure of each employee in the company.
// SELECT name,
//        DATEDIFF(CURDATE(), join_date) / 365 AS tenure_years
// FROM employees;

// -- Set Operations:

// -- Write a query to find all employees who are in the HR department but not in the Sales department.
// SELECT e.*
// FROM employees e
// JOIN departments d ON e.department_id = d.id
// WHERE d.name = 'HR'
// AND e.id NOT IN (
//     SELECT e.id
//     FROM employees e
//     JOIN departments d ON e.department_id = d.id
//     WHERE d.name = 'Sales'
// );

// -- Find the union of two sets of records from two tables.
// SELECT * FROM table1
// UNION
// SELECT * FROM table2;

// -- Case Statements and Conditional Logic:

// -- Write a query to categorize employees based on their salary ranges (e.g., Low, Medium, High).
// SELECT name,
//        CASE
//            WHEN salary < 30000 THEN 'Low'
//            WHEN salary BETWEEN 30000 AND 70000 THEN 'Medium'
//            ELSE 'High'
//        END AS salary_category
// FROM employees;

// -- Find employees who earn above average salary, and classify them into different tax brackets.
// SELECT name,
//        CASE
//            WHEN salary > (SELECT AVG(salary) FROM employees) AND salary < 50000 THEN 'Bracket 1'
//            WHEN salary BETWEEN 50000 AND 100000 THEN 'Bracket 2'
//            ELSE 'Bracket 3'
//        END AS tax_bracket
// FROM employees;

// -- Window Functions:

// -- Write a query to calculate a running total of salaries.
// SELECT name, salary,
//        SUM(salary) OVER (ORDER BY join_date) AS running_total
// FROM employees;

// -- Retrieve the top 3 earners in each department using window functions.
// SELECT name, department_id, salary
// FROM (
//     SELECT name, department_id, salary,
//            RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rank
//     FROM employees
// ) ranked
// WHERE ranked.rank <= 3;

// -- Find the nth highest salary for each department using rank() or dense_rank() functions.
// SELECT department_id, salary
// FROM (
//     SELECT department_id, salary,
//            DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rank
//     FROM employees
// ) ranked
// WHERE ranked.rank = n; -- replace 'n' with the desired rank

// -- Data Integrity and Constraints:

// -- Explain how you would enforce a unique constraint on a combination of two columns.
// ALTER TABLE table_name
// ADD CONSTRAINT unique_constraint_name UNIQUE (column1, column2);

// -- Write a query to identify duplicate records in a table.
// SELECT column1, column2, COUNT(*)
// FROM table_name
// GROUP BY column1, column2
// HAVING COUNT(*) > 1;

// -- How would you enforce referential integrity between two tables?
// ALTER TABLE child_table
// ADD CONSTRAINT fk_name FOREIGN KEY (child_column)
// REFERENCES parent_table(parent_column);

// -- Complex Data Manipulation:

// -- Write a query to transpose rows into columns.
// SELECT
//     MAX(CASE WHEN row_num = 1 THEN value END) AS column1,
//     MAX(CASE WHEN row_num = 2 THEN value END) AS column2
// FROM (
//     SELECT value, ROW_NUMBER() OVER (ORDER BY some_column) AS row_num
//     FROM table_name
// ) as sub;

// -- Merge two tables and handle conflicts in data.
// MERGE INTO target_table AS target
// USING source_table AS source
// ON target.id = source.id
// WHEN MATCHED THEN UPDATE SET target.column = source.column
// WHEN NOT MATCHED THEN INSERT (columns) VALUES (values);

// -- Retrieve hierarchical or tree-structured data from a self-referencing table.
// WITH RECURSIVE hierarchy AS (
//     SELECT id, name, parent_id
//     FROM table
//     WHERE parent_id IS NULL
//     UNION ALL
//     SELECT t.id, t.name, t.parent_id
//     FROM table t
//     JOIN hierarchy h ON t.parent_id = h.id
// )
// SELECT * FROM hierarchy;

// -- Performance and Optimization:

// -- Explain how you would optimize a slow-running query.
// -- Use indexing, analyze execution plans, use query hints, optimize joins, etc.

// -- Describe different indexing strategies and how they impact query performance.
// -- Use index types such as B-trees, bitmap indexes, covering indexes for specific query needs.

// -- Write a query to fetch the first 10 records from a large table efficiently.
// SELECT * FROM large_table ORDER BY some_column LIMIT 10;



// Advanced Joins:

// Retrieve the list of employees who have not been assigned to any project.
// Write a query to fetch employees who are working on all projects simultaneously.
// Find customers who have ordered all products available in the store.
// Recursive Queries:

// Write a query to find the hierarchy of employees starting from a given manager.
// Retrieve all ancestors of a given node in a tree - structured table.
// Use a recursive CTE to find the factorial of a given number.
// Data Types and Conversions:

// Explain how you would handle date and time data in SQL.
// Write a query to convert string data to date format and extract the year part.
// Convert numeric data to string and concatenate it with other string columns.
// Error Handling:

// Write a query to handle division by zero errors gracefully.
// Explain how to use TRY...CATCH blocks in SQL.
// Demonstrate how to log errors during data manipulation.
// Transactions and Concurrency:

// Explain how to implement a transaction in SQL.
// Write a query to demonstrate the use of COMMIT and ROLLBACK.
// Discuss isolation levels and write a query to illustrate their impact on data consistency.
// Normalization and Schema Design:

// Explain the different normal forms and provide examples of tables in each form.
// Write a query to de - normalize a highly normalized set of tables.
// Describe how to design a schema for a library management system.
// Stored Procedures and Functions:

// Write a stored procedure to update employee records based on certain conditions.
// Create a user - defined function to calculate the annual bonus for employees.
// Explain how to handle input and output parameters in stored procedures.
// Indexing and Partitioning:

// Write a query to create an index on a frequently searched column.
// Explain the difference between clustered and non - clustered indexes.
// Describe how to partition a large table based on a date column.
// Temporary Tables and CTEs:

// Explain the difference between temporary tables and table variables.
// Write a query using a CTE to improve readability and maintainability of complex queries.
// Use temporary tables to store intermediate results in a complex data transformation process.
// Views and Materialized Views:

// Write a query to create a view that simplifies access to a complex join of multiple tables.
// Explain the advantages and disadvantages of using materialized views.
//     Describe how to refresh a materialized view.
//     Security and Permissions:

//         Write a query to grant SELECT permission on a table to a specific user.
//     Explain how to use roles to manage permissions in a database.
// Describe how to implement row - level security in SQL.
// Data Import / Export:

// Write a query to export data from a table to a CSV file.
// Explain how to use SQL Server Integration Services(SSIS) or similar tools for data import.
//     Describe how to handle data transformations during the import/export process.
// Reporting and Analytics:

// Write a query to generate a monthly sales report.
// Explain how to use pivot tables to summarize data.
// Describe how to create a rolling average for sales data over the last 12 months.
// Advanced Subqueries:

// Write a query to find employees whose salary is above the average salary of their department, using correlated subqueries.
// Use a subquery to fetch the most recent order for each customer.
// Explain how to use EXISTS and NOT EXISTS in subqueries.
// Data Quality and Cleaning:

// Write a query to identify and remove duplicate records in a table.
// Explain how to handle NULL values in your data.
// Describe how to validate data integrity during data import.