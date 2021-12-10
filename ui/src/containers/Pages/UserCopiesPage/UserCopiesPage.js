import UserCopies from '../../../components/UserCopies';
import {useCallback, useEffect, useState} from "react";
import {fetchCopiesByUser} from "../../../api/apiEndpoints";
import handleError from "../../../components/errors";
import {setLoading} from "../../../state/Books/BooksActions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const UserCopiesPage = () => {

    const [copies, setCopies] = useState([]);
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const { isLoading, error, data: copies, execute } = useAsync(fetchCopiesByUser);

    if (error) {
        history.push(handleError(error));
    }

    useEffect(() => {
        if (user == null)
            history.push("/login");
    }, [dispatch, history, user])

    return (
        <>
            <UserCopies copies={copies} />
        </>
    );
};

export default UserCopiesPage;
