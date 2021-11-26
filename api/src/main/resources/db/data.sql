insert into USERS (id, first_name, last_name, user_number, password) values ( 1, 'Edvinas', 'Staupas' , '1234', '{bcrypt}$2a$12$Kaw0R6WQ4I/vWA7vayUGyeGmwVfqcdPZf59ZGRszT3jH2iscyOHD.');
insert into ROLE (id, name) values (1, 'MEMBER');
insert into ROLE (id, name) values (2, 'ADMIN');
insert into USERS_ROLES values ( 1, 1 );
insert into USERS_ROLES values ( 1, 2 );
insert into AUTHOR (id, isbn, name)
values (1, 9781782924142, 'J. K. Rowling');
insert into BOOK (id, isbn, author_id, title, published_at)
values (1, 9780439064873, 1, 'Harry Potter and the Chamber of Secrets', CURRENT_DATE),
       (2, 9780439064874, 1, 'Harry Potter and the Chamber of Secrets (2)', CURRENT_DATE);
insert into LIBRARY (id, name) values ( 1, 'LNB' );
insert into COPY (id, book_id, library_id, is_taken) values ( 1, 1, 1, false );
insert into COPY (id, book_id, library_id, is_taken, taken_by_user_id, due_at) values ( 2, 1, 1, true, 1 , CURRENT_DATE);
insert into COPY (id, book_id, library_id, is_taken, taken_by_user_id, due_at) values ( 3, 2, 1, true, 1 , '2021-12-15');
