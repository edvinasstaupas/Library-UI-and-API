insert into AUTHOR (id, isbn, first_name, last_name)
values (1, 9781782924142, 'J. K.', 'Rowling');
insert into BOOK (id, isbn, author_id, title, published_at)
values (1, 9780439064873, 1, 'Harry Potter and the Chamber of Secrets', CURRENT_DATE);
insert into LIBRARY (id, name) values ( 1, 'LNB' );
insert into COPY (id, book_id, library_id, is_taken) values ( 1, 1, 1, false );