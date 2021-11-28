import { LOGIN, LOGOUT } from './UserModel';

export const setLogin = (user) => ({
    type: LOGIN,
    user,
});

export const logout = () => ({
    type: LOGOUT,
});
