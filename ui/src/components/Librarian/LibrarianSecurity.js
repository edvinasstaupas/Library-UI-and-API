import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const CheckLibrarian = () => {
    const history = useHistory();
    const state = useSelector(state => state.user)
    if (state.loggedInUser == null) history.push('/login');
    else if (!state.loggedInUser.roles.includes('ROLE_LIBRARIAN'))
        history.push('/login');
    return <></>
}

export default CheckLibrarian;