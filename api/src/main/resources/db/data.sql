insert into USERS (id, first_name, last_name, user_number, password)
values (1, 'Edvinas', 'Staupas', '1234', '{bcrypt}$2a$12$Kaw0R6WQ4I/vWA7vayUGyeGmwVfqcdPZf59ZGRszT3jH2iscyOHD.');
insert into ROLE (id, name)
values (1, 'MEMBER'),
       (2, 'ADMIN'),
       (3, 'LIBRARIAN');
insert into USERS_ROLES
values (1, 1),
       (1, 3),
       (1, 2);
insert into AUTHOR (id, isbn, name)
values (1, 9781782924142, 'J. K. Rowling'),
       (2, 9781782924143, 'Suzanne Collins');
insert into BOOK (id, isbn, author_id, title, published_at)
values (1, 9780439064873, 1, 'Harry Potter and the Chamber of Secrets', CURRENT_DATE),
       (2, 9780439064874, 1, 'Harry Potter and the Goblet of Fire', CURRENT_DATE),
       (3, 9780439064875, 1, 'Harry Potter and the Half Blood Prince', '2020-10-25'),
       (4, 9780439064876, 1, 'Harry Potter and the Deathly Hallows', '2020-10-25'),
       (5, 9780439064877, 2, 'The Hunger Games', '2020-10-25'),
       (6, 9780439064878, 2, 'The Hunger Games Catching Fire', '2020-10-25');
insert into LIBRARY (id, name)
values (1, 'LNB');
insert into COPY (id, book_id, library_id, is_taken, is_reserved)
values (1, 1, 1, false, false);
insert into COPY (id, book_id, library_id, is_taken, is_reserved, taken_by_user_id, due_at)
values (2, 5, 1, true, false, 1, CURRENT_DATE);
insert into COPY (id, book_id, library_id, is_taken, is_reserved, taken_by_user_id, due_at)
values (3, 6, 1, true, false, 1, '2021-12-15');
insert into COPY (id, book_id, library_id, is_taken, is_reserved, taken_by_user_id, due_at)
values (4, 4, 1, true, true, 1, '2021-12-02');
