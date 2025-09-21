
Initial Schema non-NF:

create table books (book_id serial primary key, title varchar(100) not null, author varchar(100) not null, publication_year int not null, genre text[] not null);

create table members(member_id serial primary key, name varchar(100) not null, address text not null, contact bigint[] not null);

create borrowed_books(borrow_id serial primary key, date_of_borrowing date not null, due_date_of_return date not null, books int[] references books(book_id), borrower text[] references member(member_id));

1NF:
book remade:
create table books (book_id serial primary key, title varchar(100) not null, author varchar(100) not null, publication_year int not null);
create table book_genre(book_genre serial primary key, book_id references books(book_id), genre text);

member remade:
create table members(member_id serial primary key, name varchar(100) not null, address text not null);
create table member_contact(member_contact_id serial primary key, member_id references member(member_id), contact int);

borrowed books remade:
create borrowed_books_detail(borrow_id serial primary key, date_of_borrowing date not null, due_date_of_return date not null);
create table borrowed_books(borrowed_books_id serial primary key, borrow_id int references books(borrow_id), member_id int reference member(member_id));

2NF:
book remade:
create table books (book_id serial primary key, title varchar(100) not null, author varchar(100) not null, publication_year int not null);
create table book_genre( book_id references books(book_id), genre text, primary key(book_id, genre));

member remade:
create table members(member_id serial primary key, name varchar(100) not null, address text not null);
create table member_contact(member_id references member(member_id), contact int, primary key(member_id, contact));

borrowed books remade:
create borrowed_books_detail(borrow_id serial primary key, date_of_borrowing date not null, due_date_of_return date not null);
create table borrowed_books(borrowed_books serial primary key, borrow_id int references books(borrow_id), member_id int reference member(member_id));

Final NF:
book remade:
create table books (book_id serial primary key, title varchar(100) not null, author varchar(100) not null, publication_year int not null);
create table book_genre( book_id references books(book_id), genre text, primary key(book_id, genre));

member remade:
create table members(member_id serial primary key, name varchar(100) not null, address text not null);
create table member_contact(member_id references member(member_id), contact int, primary key(member_id, contact));
borrowed books remade:

create borrowed_books_detail(borrow_id serial primary key, date_of_borrowing date not null, due_date_of_return date not null);
create table borrowed_books(borrow_id int references books(borrow_id), member_id int reference member(member_id), primary key(borrow_id, member_id));


