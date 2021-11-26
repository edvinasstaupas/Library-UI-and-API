import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import NewBooksPage from './NewBooksPage/NewBooksPage';
import UserCopiesPage from './UserCopies/UserCopiesPage';
import BookCopiesPage from "./BookCopiesPage/BookCopiesPage";
import Error404Page from "./Error404Page/Error404Page";
import LoginPage from "./LoginPage/LoginPage";

const Page = () => (
    <>
        <Switch>
            {/*<Route exact path="/">
                <SearchPage />
            </Route>*/}
            <Route exact path="/">
                <LoginPage />
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
                <LoginPage/>
            </Route>
        </Switch>
    </>
);
export default Page;
