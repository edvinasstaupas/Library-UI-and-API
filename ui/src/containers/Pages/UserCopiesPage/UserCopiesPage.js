import UserCopies from '../../../components/UserCopies';
import {useEffect, useState} from "react";
import {fetchCopiesByUser, fetchCopiesByUserLibrarian} from "../../../api/apiEndpoints";
import handleError from "../../../components/errors";
import {setLoading} from "../../../state/Books/BooksActions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const UserCopiesPage = () => {

    const [copies, setCopies] = useState([]);
    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user == null) {
            history.push("/login");
        }
        fetchCopiesByUser()
            .then(({ data }) => {
                setCopies(data);
            })
            .catch((error) => history.push(handleError(error.response)))
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch, history, user])

    return (
        <>
            <UserCopies copies={copies} />
        </>
    );
};

export default UserCopiesPage;
