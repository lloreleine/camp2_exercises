// Results Working Around Tables

------------------------------------------------------
Write a query in SQL
to display the full name (first and last name),
and salary for those employees who earn below 6000.

SELECT first_name, last_name, salary FROM employee WHERE salary < 6000;


------------------------------------------------------
Write a query in SQL
to display the first and last_name,
department number and salary
for those employees who earn more than 8000.

SELECT first_name, last_name, department_id, salary FROM employee WHERE salary > 8000;


------------------------------------------------------
Write a query in SQL
to display the first and last name,
and department number for all employees whose last name is "McEwen".

SELECT first_name, last_name, department_id FROM employee WHERE last_name LIKE 'McEwen';


------------------------------------------------------
Write a query in SQL
to display all the information for all employees
without any manager id.

SELECT * FROM employee WHERE manager_id IS NULL;


------------------------------------------------------
Write a query in SQL
to display all the information about the department Marketing.

SELECT * FROM department WHERE name LIKE 'Marketing';


------------------------------------------------------
Write a query in SQL
to display the full name (first and last), hire date,
salary, and department number for those employees
whose first name does not containing the letter M
and make the result set in ascending order by department number.

SELECT first_name, last_name, hire_date, salary, department_id FROM employee
WHERE first_name NOT IN
(SELECT first_name FROM employee WHERE first_name
  LIKE '%m%' OR first_name
  LIKE 'm%' OR first_name
  LIKE '%m' OR first_name
  LIKE 'M%' OR first_name
  LIKE'%M%')
ORDER BY department_id ASC;

------------------------------------------------------
Write a query in SQL
to display all the information of employees
whose salary is in the range of 8000 and 12000
and commission is not null
or department number is except the number 4, 12 and 7
and they have been hired before June 5th, 1987.


SELECT * FROM employee
WHERE salary BETWEEN 8000 AND 12000
OR (hire_date < '2007-06-05' AND department_id NOT IN (4,12,7));


------------------------------------------------------
Write a query in SQL
to display the full name (first and last),
the phone number and email separated by hyphen, and salary,
for those employees whose salary is within the range of 9000 and 17000.
The column headings assign with Full_Name, Contact_Details
and Remuneration respectively.


SELECT first_name ||' '|| last_name AS Full_Name, CONCAT(phone_number, ' - ', email) AS Contact_Details, salary AS Remuneration FROM employee
WHERE salary BETWEEN 9000 AND 17000;


------------------------------------------------------
Write a query in SQL
to display the first and last name, and salary for those employees
whose first name is ending with the letter m.


SELECT first_name ||' '|| last_name AS Full_Name, salary FROM employee
WHERE first_name LIKE '%m';


------------------------------------------------------
Write a query in SQL
to display the full name (first and last) name, and salary,
for all employees whose salary is out of the range 7000 and 15000
and make the result set in ascending order by the full name.


SELECT first_name ||' '|| last_name AS Full_Name, salary FROM employee
WHERE salary BETWEEN 7000 AND 15000
ORDER BY Full_Name ASC;



------------------------------------------------------
Write a query in SQL
to display the full name (first and last), job id and date of hire
for those employees who was hired during November 5th, 2007 and July 5th, 2009.


SELECT first_name ||' '|| last_name AS Full_Name, job_id, hire_date FROM employee
WHERE hire_date BETWEEN '2007-11-05' AND '2009-07-05'
ORDER BY hire_date;



------------------------------------------------------
Write a query in SQL
to display the the full name (first and last name), and department number
for those employees who works either in department 7 or 9.


SELECT first_name ||' '|| last_name AS Full_Name, department_id FROM employee
WHERE department_id IN (7,9);
// WHERE department_id = 7 OR department_id = 9;



------------------------------------------------------
Write a query in SQL
to display the full name (first and last name), salary, and manager number
for those employees who is working under a manager.


SELECT first_name ||' '|| last_name AS Full_Name, salary, manager_id FROM employee
WHERE manager_id IS NOT NULL;



------------------------------------------------------
Write a query in SQL
to display all the information from Employees table for those employees
who was hired before June 21st, 2002.


SELECT * FROM employee
WHERE hire_date < '2002-06-21';



------------------------------------------------------
Write a query in SQL
to display the first and last name, email, salary and manager ID,
for those employees whose managers are hold the ID 21, 4 or 46.


SELECT first_name, last_name, email, salary, manager_id FROM employee
WHERE manager_id IN (21,4,46);



------------------------------------------------------
Write a query in SQL
to display all the information for all employees
who have the letters D, S, or N in their first name
and also arrange the result in descending order by salary.


SELECT * FROM employee
WHERE UPPER(first_name) LIKE '%D%' OR UPPER(first_name) LIKE'%N%' OR UPPER(first_name) LIKE '%S%';



------------------------------------------------------
18 - Write a query in SQL
to display the full name (first name and last name), hire date,
commission percentage, email and telephone separated by '-',
and salary for those employees who earn the salary above 11000
or the seventh digit in their phone number equals 3
and make the result set in a descending order by the first name.


SELECT first_name ||' '|| last_name AS Full_Name, hire_date, email ||' - '|| REPLACE(phone_number,'.',''), salary
FROM employee
WHERE salary > 11000 AND POSITION('3' IN phone_number)=7
ORDER BY first_name DESC;



------------------------------------------------------
19 - Write a query in SQL
to display the first and last name, and department number
for those employees who holds a letter s as a 3rd character in their first name.


SELECT first_name ||' '|| last_name AS Full_Name, department_id FROM employee
WHERE POSITION('s' IN first_name)=3;



------------------------------------------------------
20 - Write a query in SQL
to display the employee ID, first name, job id, and department number
for those employees who is working except the departments 5, 3 and 8.


SELECT id, first_name, job_id, department_id FROM employee
WHERE department_id NOT IN(5,3,8);



------------------------------------------------------
21 - Write a query in SQL
to display the employee Id, first name, job id, and department number
for those employees whose department number equals 3, 4 or 9.


SELECT id, first_name, job_id, department_id FROM employee
WHERE department_id IN(3,4,9);




------------------------------------------------------
22 - Write a query in SQL
to display the ID for those employees who did two or more jobs in the past.


SELECT employee_id FROM job_history
GROUP BY employee_id
HAVING COUNT(employee_id)>1;



------------------------------------------------------
23 - Write a query in SQL
to display job ID, number of employees, sum of salary,
and difference between highest salary and lowest salary for a job.


SELECT job_id, COUNT(1) AS number_of_employee, SUM(salary), max(salary)-min(salary) AS diff_salary
FROM employee
GROUP BY job_id;



------------------------------------------------------
24 - Write a query in SQL
to display job ID for those jobs that were done by two
or more for more than 300 days.


SELECT job_id, COUNT(1)
FROM job_history
WHERE end_date-start_date>300
GROUP BY job_id
HAVING COUNT(1)>1;



------------------------------------------------------
25 - Write a query in SQL
to display the country ID and number of cities in that country we have.


SELECT country_id, COUNT(1) AS Number_of_cities
FROM location
GROUP BY country_id;



------------------------------------------------------
26 - Write a query in SQL
to display the manager ID and number of employees managed by the manager.


SELECT manager_id, COUNT(1) AS Number_of_employee
FROM employee
GROUP BY manager_id;



------------------------------------------------------
27 - Write a query in SQL
to display the details of jobs in descending sequence on job title.


SELECT *
FROM job
ORDER BY title DESC;



------------------------------------------------------
28 - Write a query in SQL
to display the first and last name and date of
joining of the employees who is either Sales Representative or Sales Man.


SELECT first_name, last_name, hire_date, job_id
FROM employee
INNER JOIN job ON (employee.job_id=job.id)
WHERE title='Sales Representative' OR title='Sales Manager';




------------------------------------------------------
29 - Write a query in SQL
to display the average salary of employees for each department who gets a commission percentage.

XXXX

------------------------------------------------------
30 - Write a query in SQL
to display those departments where any manager is managing 4 or more employees.


SELECT department_id, COUNT(1)
FROM employee
GROUP BY department_id
HAVING COUNT(1)>3;



------------------------------------------------------
31 - Write a query in SQL
to display those departments where more than ten employees work who got a commission percentage.

XXXXX



------------------------------------------------------
32 - Write a query in SQL
to display the employee ID and the date on which he ended his previous job.


SELECT employee_id, end_date
FROM job_history;



------------------------------------------------------
33 - Write a query in SQL
to display the details of the employees who have no commission percentage
and salary within the range 7000 to 12000
and works in that department which number is 5.


SELECT *
FROM employee
WHERE (salary BETWEEN 7000 AND 12000) AND department_id=5;



------------------------------------------------------
34 - Write a query in SQL
to display the job ID for those jobs which average salary is above 8000.


SELECT job_id, AVG(salary)
FROM employee
GROUP BY job_id
HAVING AVG(salary)>8000;



------------------------------------------------------
35 - Write a query in SQL
to display job Title, the difference between minimum and maximum salaries
for those jobs which max salary within the range 12000 to 18000.


SELECT title, max_salary-min_salary AS diff_salary
FROM job
WHERE max_salary BETWEEN 12000 AND 18000;



------------------------------------------------------
36 - Write a query in SQL
to display all those employees whose first name or
last name starts with the letter D.


SELECT first_name, last_name
FROM employee
WHERE first_name LIKE 'D%' OR last_name LIKE 'D%';



------------------------------------------------------
37 - Write a query in SQL
to display the details of jobs which minimum salary is greater than 9000.


SELECT *
FROM job
WHERE min_salary >9000;



------------------------------------------------------
38 - Write a query in SQL
to display those employees who joined after 7th September, 1987.


XXXXXXX




\* JOINS */


------------------------------------------------------
01 - Write a query in SQL
to display the first name, last name, department number,
and department name for each employee.


SELECT first_name, last_name, department_id, department.name
FROM employee
INNER JOIN department ON (employee.department_id=department.id);



------------------------------------------------------
02 - Write a query in SQL
to display the first and last name, department, city,
and state province for each employee.


SELECT first_name, last_name, department.name, location.city, location.state
FROM employee
INNER JOIN department ON (employee.department_id=department.id)
INNER JOIN location ON (department.location_id=location.id);




------------------------------------------------------
03 - Write a query in SQL
to display the first name, last name, salary, and job grade for all employees.


SELECT first_name, last_name, salary, job_grade.level
FROM employee
INNER JOIN job_grade ON (employee.salary BETWEEN job_grade.lowest_salary AND job_grade.highest_salary)
ORDER BY salary;



------------------------------------------------------
04 - Write a query in SQL
to display the first name, last name, department number and department name,
for all employees for departments 8 or 4.


SELECT first_name, last_name, department_id, department.name
FROM employee
INNER JOIN department ON (employee.department_id=department.id)
WHERE employee.department_id=8 OR employee.department_id=4;



------------------------------------------------------
05 - Write a query in SQL
to display those employees who contain a letter z to their first name
and also display their last name, department, city, and state province.



SELECT first_name, last_name, department.name, location.city, location.state
FROM employee
INNER JOIN department ON (employee.department_id=department.id)
INNER JOIN location ON (department.location_id=location.id)
WHERE UPPER(employee.first_name) LIKE '%Z%';



------------------------------------------------------
06 - Write a query in SQL
to display all departments including those where does not have any employee.


SELECT name FROM department;



------------------------------------------------------
07 - Write a query in SQL
to display the first and last name and salary
for those employees who earn less than the employee earn whose number is 83.


SELECT first_name ||' '|| last_name AS Full_name, salary
FROM employee
WHERE salary < (SELECT salary FROM employee WHERE id=83);



------------------------------------------------------
08 - Write a query in SQL
to display the first name of all employees including the first name of their manager.


SELECT employee.first_name, manager.first_name
FROM employee AS employee
INNER JOIN employee AS manager ON(employee.manager_id=manager.id);


------------------------------------------------------
09 - Write a query in SQL
to display the department name, city, and state province for each department.


SELECT name, location.city, location.state
FROM department
INNER JOIN location ON (department.location_id=location.id);



------------------------------------------------------
10 - Write a query in SQL
to display the first name, last name, department number and name,
for all employees who have or have not any department.

SELECT first_name, last_name, department_id, department.name
FROM employee
INNER JOIN department ON (employee.department_id=department.id);



------------------------------------------------------
11 - Write a query in SQL
to display the first name of all employees and the first name of their manager
including those who does not working under any manager.


SELECT employee.first_name, manager.first_name
FROM employee AS employee
LEFT JOIN employee AS manager ON(employee.manager_id=manager.id);



------------------------------------------------------
12 - Write a query in SQL
to display the first name, last name,
and department number for those employees who work in the same department
as the employee who hold the last name as Taylor.



SELECT first_name, last_name, department_id
FROM employee
WHERE department_id IN (SELECT department_id FROM employee WHERE last_name='Taylor');



------------------------------------------------------
13 - Write a query in SQL
to display the job title, department name, full name (first and last name ) of employee,
and starting date for all the jobs which started on or after 1st January, 1993
and ending with on or before /*31 August, 1997*/ 31 August, 2005.



SELECT job.title, department.name, first_name ||' '||last_name AS Full_name, job_history.start_date, job_history.end_date
FROM employee
INNER JOIN job ON (employee.job_id=job.id)
INNER JOIN department ON (employee.department_id=department.id)
INNER JOIN job_history ON (employee.job_id=job_history.job_id)
WHERE job_history.start_date > '1993-01-01'
AND job_history.end_date < '2005-08-31';



------------------------------------------------------
14 - Write a query in SQL
to display job title, full name (first and last name ) of employee,
and the difference between maximum salary for the job and salary of the employee.



SELECT job.title, first_name ||' '||last_name AS Full_name,
(job.max_salary-employee.salary) AS diff_salary
FROM employee
INNER JOIN job ON (employee.job_id=job.id);



------------------------------------------------------
15 - Write a query in SQL
to display the name of the department, average salary
and number of employees working in that department who got commission.


SELECT department.name, AVG(salary), COUNT(1) AS number_of_employee
FROM employee
INNER JOIN department ON (employee.department_id=department.id)
GROUP BY department.name;



------------------------------------------------------
16 - Write a query in SQL
to display the full name (first and last name ) of employee,
and job title of those employees who is working in the department which ID is 8.



SELECT first_name ||' '|| last_name AS Full_name, job.title, department_id
FROM employee
INNER JOIN job ON (employee.job_id=job.id)
WHERE department_id=8;



------------------------------------------------------
17 - Write a query in SQL
to display the name of the country, city, and the departments which are running there.


SELECT country.name, location.city, department.name
FROM department
INNER JOIN location ON (department.location_id=location.id)
INNER JOIN country ON (location.country_id=country.id)
WHERE department.manager_id IS NOT NULL;



------------------------------------------------------
18 - Write a query in SQL
to display department name and the full name (first and last name) of the manager.



SELECT name, employee.first_name ||' '|| employee.last_name AS full_name
FROM department
INNER JOIN employee ON (department.manager_id=employee.id);



------------------------------------------------------
19 - Write a query in SQL
to display job title and average salary of employees.


SELECT job.title, AVG(salary)
FROM employee
INNER JOIN job ON (employee.job_id=job.id)
GROUP BY job.title;



------------------------------------------------------
20 - Write a query in SQL
to display the details of jobs which was done by any of the employees
who is presently earning a salary on and above 12000.



SELECT first_name||' '||last_name AS full_name, job.*
FROM employee
INNER JOIN job ON (employee.job_id=job.id)
WHERE salary>12000;



------------------------------------------------------
21 - Write a query in SQL
to display the department name, full name (first and last name) of manager, and their city.
