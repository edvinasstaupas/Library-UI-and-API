import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserCopies from '../../../components/UserCopies';
import LibrarianSecurity from "../../../components/Librarian/LibrarianSecurity";
import * as React from "react";

const UserCopiesLibrarianPage = () => {
    const userNumber = useParams();

    const state = useSelector((state) => state.user);
    const history = useHistory();

    useEffect(() => {
        if (state.loggedInUser == null) history.push('/');
        else if (!state.loggedInUser.roles.includes('ROLE_LIBRARIAN'))
            history.push('/');
    }, [state, history]);

    return (
        <>
            <LibrarianSecurity/>
            <UserCopies userNumber={userNumber} />
        </>
    );
};

export default UserCopiesLibrarianPage;
