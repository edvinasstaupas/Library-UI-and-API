import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import UserCopies from '../../../components/UserCopies';
import LibrarianSecurity from '../../../components/Librarian/LibrarianSecurity';
import * as React from 'react';
import {fetchCopiesByUserLibrarian} from "../../../api/apiEndpoints";
import handleError from "../../../components/errors";
import {setLoading} from "../../../state/Books/BooksActions";

const UserCopiesLibrarianPage = () => {
    const userNumber = useParams();

    const state = useSelector((state) => state.user);
    const [copies, setCopies] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCopiesByUserLibrarian(userNumber.userNumber)
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => history.push(handleError(error.response)))
            .finally(() => dispatch(setLoading(false)));
    }, [state, history, userNumber, dispatch]);

    return (
        <>
            <LibrarianSecurity />
            <UserCopies copies={copies}/>
        </>
    );
};

export default UserCopiesLibrarianPage;
