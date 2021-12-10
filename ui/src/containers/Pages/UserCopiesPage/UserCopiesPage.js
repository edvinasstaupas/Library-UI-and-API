import UserCopies from '../../../components/UserCopies';
import {useCallback, useEffect, useState} from "react";
import {fetchCopiesByUser} from "../../../api/apiEndpoints";
import handleError from "../../../components/errors";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const useAsync = (asyncFn, immediate = true) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const history = useHistory();

    const execute = useCallback(() => {
        setIsLoading(true);
        asyncFn()
            .then(({data}) => {
                    setData(data);
                }
            )
            .catch(({response}) =>
                setError(response)
            )
            .finally(() => {
                setIsLoading(false);
            });
    }, [asyncFn]);
    
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate])
    
    return {
        data,
        isLoading,
        error,
        execute,
    }

}

const UserCopiesPage = () => {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const {isLoading, error, data: copies, execute} = useAsync(fetchCopiesByUser);

    if (error) {
        history.push(handleError(error));
    }

    useEffect(() => {
        if (user == null)
            history.push("/login");
    }, [dispatch, history, user])

    return (
        <>
            <UserCopies copies={copies} update={execute} isLoading={isLoading}/>
        </>
    );
};

export default UserCopiesPage;
