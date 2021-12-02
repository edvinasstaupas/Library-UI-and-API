import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import NewBooksPage from './NewBooksPage/NewBooksPage';
import UserCopiesPage from './UserCopies/UserCopiesPage';
import BookCopiesPage from './BookCopiesPage/BookCopiesPage';
import LoginPage from './LoginPage/LoginPage';
import AllBooksPage from './AllBooksPage/AllBooksPage';
import Error404Page from './Error404Page/Error404Page';
import RegisterPage from "./RegisterPage/RegisterPage";
import RegisterFinish from "./RegisterPage/RegisterFinish";
import LibrarianPage from "./LibrarianPage/LibrarianPage";

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
            <Route path="/user/{userNumber}/copies">
                <UserCopiesPage />
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
        </Switch>
    </>
);
export default Page;
