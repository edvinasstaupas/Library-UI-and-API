import {LOGIN, LOGOUT} from './UserModel';

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.user;
        case LOGOUT:
            return initialUserState;
        default:
            return state;
    }
};

const initialUserState = {};

export default userReducer;
