database creation:
create database library_management;

tables creation:
create table books(book_id serial primary key, title varchar(100), author varchar(100), publication_year int, genre text[], availability_status boolean);

create table members(member_id serial primary key, name varchar(100), email varchar(100), phone_no int[], address text);

create table loans(loan_id serial primary key, member_id int references members(member_id), book_id int references books(book_id), loan_date date, due_date date, return_date date);

-- Trigger 
create table logs(logs_id serial primary key, transaction_type varchar(100), member_id int, book_id int, transaction_date timestamp default current_timestamp);

__________________________________________________

Normalization:
tables creation:
create table books(book_id serial primary key, title varchar(100) not null, author varchar(100) not null, publication_year int not null, availability_status boolean);

create table books_genre(book_id int references books(book_id), genre text not null, primary key(book_id, genre));

create table members(member_id serial primary key, name varchar(100) not null, email varchar(100) not null, address text);

create table members_phone_no(member_id int references members(member_id), phone_no int not null, primary key(member_id, phone_no));

create table loans(loan_id serial primary key, member_id int references members(member_id), book_id int references books(book_id), loan_date date not null, due_date date not null, return_date date);

-- Trigger 
create table logs(logs_id serial primary key, transaction_type varchar(100) not null, member_id int, book_id int, transaction_date timestamp default current_timestamp);
__________________________________________________

Indexing:

Books:
-- Noraml indexing cause sequence is ensured
create index book_search on books(book_id);
-- Gist cause sometimes no one knows the title perfectly so nearest neighbour search
create index book_search_title on books using gist (title gist_trgm_ops); 
-- Hash fastest for retriving author cause no one can make mistakes there
create index book_search_author on books using hash (author);
create index book_search_genre on books_genre using gist (genre);

Members:
-- Noraml indexing cause sequence is ensured
create index member_search on members(member_id);
-- Hash fastest for retriving member cause no one can make mistakes there
create index member_search_name on members using hash (name);
create index member_search_email on members using hash (email);
create index member_search_phone_no on members_phone_no using hash (phone_no);

Loans:
-- Noraml indexing cause sequence is ensured
create index loan_search on loans(loan_id);
create index loan_search_member on loans(member_id);
create index loan_search_book on loans(book_id);
___________________________________________________

Store Procedures:

create procedure borrowing_book(user_book_id int, user_member_id int)
as $$
declare
availability Boolean;
begin
select availability_status into availability
from books
where book_id = user_book_id;
if availability then
insert into loans(member_id, book_id, loan_date, due_date) values (user_member_id, user_book_id, current_date, current_date + interval '7 days');
update books
set availability_status = False
where book_id = user_book_id;
else 
raise notice 'Book Not Available';
end if;
end;
$$ language plpgsql;


create procedure retuning_book(user_book_id int, user_member_id int)
as $$
begin
update loans
set return_date = current_date
WHERE book_id = user_book_id AND member_id = user_member_id;
update books
set availability_status = True
where book_id = user_book_id;
end;
$$ language plpgsql;

_______________________________________________________________________________________

Trigger Function:
create function library_log_trigger()
returns trigger as $$
begin
if tg_op = 'insert' then
insert into logs(transaction_type, member_id, book_id, transaction_date) values ('insert', new.member_id, new.book_id, new.transaction_date);
elsif tg_op = 'update' then
insert into logs(transaction_type, member_id, book_id, transaction_date) values ('update', new.member_id, new.book_id, new.transaction_date);
end if;
return null;
end;
$$ language plpgsql;

Trigger:
create trigger library_log
after update or insert
on loans
for each row
execute function library_log_trigger();

_________________________________________________________________________________________________