import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserCopiesLibrarian from '../../../components/UserCopiesLibrarian';
import { useSelector } from 'react-redux';

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
            <UserCopiesLibrarian userNumber={userNumber} />
        </>
    );
};

export default UserCopiesLibrarianPage;
