non-Normalized:
create table student(student_id serial primary key, name varchar(100) not null, email varchar(100) not null, phone_numbers int[] not null);

create table course(course_id serial primary key, name varchar(100) not null, description text(100) not null, prerequisites int[] references courses(course_id) not null);

create table enrollments(student_enrolled int references student(student_id), course_id INT REFERENCES course(course_id), enrollment_date date not null, grade int not null, primary key(student_enrolled, course_id));

create table instructor(instructor_id serial primary key, name varchar(100) not null, email varchar(100) not null, office_number int not null);

create table department(department_id serial not null, name varchar(100) not null, head varchar(100) not null);


1NF:
create table student(student_id serial primary key, name varchar(100) not null, email varchar(100) not null);

create table student_phone_number(student_phone_numer serial primary key, student_id references student(student_id), phone_numbers int not null);

create table course(course_id serial primary key, name varchar(100) not null, description text(100) not null);

create table course_prerequisites(course_prerequisites serial primary key, course_id references course(course_id), prerequisites int references course(course_id))

-- There is a sort of non dependency on grade or date 
create table enrollments(student_enrolled int references student(student_id), course_id INT REFERENCES course(course_id), enrollment_date date not null, primary key(student_enrolled, course_id));

create table student_grade(student_id int refernces student(student_id), grade int not null, primary key(student_id, grade));

create table instructor(instructor_id serial primary key, name varchar(100) not null, email varchar(100) not null, office_number int not null);

create table department(department_id serial not null, name varchar(100) not null, head varchar(100) not null);


2NF:
Doesn't change anything cause everything is connected.

3NF:
Doesn't change anything cause everything is connected.

