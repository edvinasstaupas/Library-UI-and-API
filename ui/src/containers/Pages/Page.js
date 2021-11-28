import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import NewBooksPage from './NewBooksPage/NewBooksPage';
import UserCopiesPage from './UserCopies/UserCopiesPage';
import BookCopiesPage from './BookCopiesPage/BookCopiesPage';
import LoginPage from './LoginPage/LoginPage';
import AllBooksPage from './AllBooksPage/AllBooksPage';
import Error404Page from './Error404Page/Error404Page';

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
            <Route path="/book/:id/copies">
                <BookCopiesPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/404">
                <Error404Page />
            </Route>
        </Switch>
    </>
);
export default Page;
