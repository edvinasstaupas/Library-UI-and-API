import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import NewBooksPage from './NewBooksPage/NewBooksPage';
import UserCopiesPage from './UserCopies/UserCopiesPage';

const Page = () => (
    <>
        <Switch>
            <Route exact path="/">
                <SearchPage />
            </Route>
            <Route path="/newBooks">
                <NewBooksPage />
            </Route>
            <Route path="/user/copies">
                <UserCopiesPage />
            </Route>
        </Switch>
    </>
);
export default Page;
