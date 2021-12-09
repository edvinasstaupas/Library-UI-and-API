import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import NewBooksPage from './NewBooksPage/NewBooksPage';
import UserCopiesPage from './UserCopiesPage/UserCopiesPage';
import BookCopiesPage from './BookCopiesPage/BookCopiesPage';
import LoginPage from './LoginPage/LoginPage';
import AllBooksPage from './AllBooksPage/AllBooksPage';
import Error404Page from './Error404Page/Error404Page';
import RegisterPage from './RegisterPage/RegisterPage';
import LibrarianPage from './LibrarianPage/LibrarianPage';
import UserCopiesLibrarianPage from './LibrarianPages/UserCopiesLibrarianPage';
import LibrarianUserSearch from './LibrarianPages/LibrarianUserSearch';
import LibrarianAddBook from './LibrarianPages/LibrarianAddBook';
import LibrarianAddCopy from './LibrarianPages/LibrarianAddCopy';

const Page = () => (
    <>
        <Switch>
            <Route exact path="/">
                <AllBooksPage />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
            <Route path="/newBooks">
                <NewBooksPage />
            </Route>
            <Route path="/user/copies">
                <UserCopiesPage />
            </Route>
            <Route path="/user/:userNumber/copies">
                <UserCopiesLibrarianPage />
            </Route>
            <Route path="/book/:id/copies">
                <BookCopiesPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
            <Route exact path="/404">
                <Error404Page />
            </Route>
            <Route exact path="/librarian">
                <LibrarianPage />
            </Route>
            <Route exact path="/librarian/addBook">
                <LibrarianAddBook />
            </Route>
            <Route exact path="/librarian/addCopy">
                <LibrarianAddCopy />
            </Route>
            <Route exact path="/librarian/copies">
                <LibrarianUserSearch />
            </Route>
            <Route path="">
                <Error404Page />
            </Route>
        </Switch>
    </>
);
export default Page;
