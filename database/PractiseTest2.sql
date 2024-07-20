Practise Test 2:
1. Retrieve the employee_name and salary columns from the employees table.
select employee_name, salary from employees;

2. Retrieve the names of all employees from the employees table who were hired after January 1, 2020.
select employee_name from employees
where employee_hired > '2020-01-01';

3. Retrieve all columns from the employees table and sort the results by the salary in descending order.
select * from employees
order by salary desc;

4. Retrieve the second set of 10 rows from the employees table (i.e., rows 11-20).
select * from employees
limit 10 offset 10;

5. Calculate the total number of employees in the employees table.
select count(employee_name) as total_employee from employees;

6. Retrieve all projects and the names of the employees assigned to them. The projects table has a project_id and project_name column, and the assignments table has employee_id and project_id columns.
select projects.project_id, projects.project_name, employees.employee_name 
from projects 
inner join assignments on projects.project_id = assignments.project_id 
inner join employees on assignments.employee_id = employees.employee_id;

7. Retrieve all employees and their assigned projects, including employees without any projects.
select employees.employee_name, projects.project_name 
from employees 
left join assignments on employees.employee_id = assignments.employee_id 
left join projects on assignments.project_id = projects.project_id;

8. Retrieve all projects and the names of the employees assigned to them, including projects without any assigned employees.
select projects.project_name, employees.employee_name 
from projects 
right join assignments on projects.project_id = assignments.project_id 
right join employees on assignments.employee_id = employees.employee_id;

9. Retrieve all employees and their assigned projects, including those without assignments and projects without employees.
select employees.employee_name, projects.project_name 
from employees 
full outer join assignments on employees.employee_id = assignments.employee_id 
full outer join projects on assignments.project_id = projects.project_id;

10. Retrieve the names of employees who work in the same department. The employees table has a department_id column.
select e1.employee_name as employee, e2.employee_name as colleague 
from employees e1 
join employees e2 on e1.department_id = e2.department_id 
where e1.employee_id <> e2.employee_id;

11. Retrieve the names of employees who earn more than the highest salary in the sales department.
select employee_name, salary 
from employees 
where salary > (select max(salary) from employees where department = 'sales');


12. Retrieve the average salary of employees in each department.
select avg(salary) as avg_salary 
from employees
group by department_id;

13. Retrieve the departments where the average salary is less than 40,000.
select department_id, department_name from employees 
group by department_id
having avg(salary) < 40000;

14. Retrieve the email addresses of all employees from the employees table and all contacts from the contacts table. Both tables have an email column.
select email_address from employees 
union 
select contact from contacts;

15. Retrieve the employee_name and salary of each employee, with a new column indicating their bonus as follows:
10% of salary if salary > 100,000
5% of salary if salary is between 50,000 and 100,000
2% of salary if salary < 50,000
select employee_name, salary, 
case
when salary > 100000 then (salary * 0.10)
when salary between 50000 and 100000 then (salary * 0.05)
else (salary * 0.02)
end as bonus
from employees;
