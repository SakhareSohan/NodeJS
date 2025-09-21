Postgres test 1:
1. Retrieve all columns from the employees table.
 select * from employees;

2. Retrieve the names of all employees from the employees table who have a salary greater than 50,000.
 select employees_name from employees
where salary > 50000;

3.Retrieve all columns from the employees table and sort the results by the hire_date in ascending order.
select * from employees
order by hire_date;

4. Retrieve the first 10 rows from the employees table.
select * from employees
limit 10 offset 0;

5. Calculate the average salary of all employees in the employees table. 
 select avg(salary) as avg_salary from employees;

6. Retrieve all employees and their department names. The employees table has a department_id column and the departments table has department_id and department_name columns.
select employee_name, department_name
from employees
inner join department
on employees.department_id = department.department_id;

7. Retrieve all departments and their respective employees, including departments with no employees.
 select depatment_id, department_name, employee_name
from departments 
left join employees 
on department.department_id = employees.department_id;

8. Retrieve all employees and their respective departments, including employees without a department.
select employee_name, department_name
from employees 
right join departments 
on employees.department_id = departments.department_id;

9. Retrieve all employees and their departments, including those employees without a department and those departments without employees.
select employee_name, department_name
from employees 
full join departments 
on employees.department_id = departments.department_id;

11. Retrieve the names of employees who earn more than the average salary.
select employess_name from employees
where (select avg(salary) from employees) < salary;

12. Retrieve the number of employees in each department.
select count(employee_name) from employees
group by department_id;

13. Retrieve the departments with more than 10 employees.
select count(employee_name) from employees
group by department_id
having sum(employee_name) > 10;
