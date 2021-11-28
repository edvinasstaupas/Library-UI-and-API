import axios from 'axios';
import store from '../state/store';

const HTTP = axios.create({
    baseURL: '/api/',
});

HTTP.interceptors.request.use((config) => {
    if (store.getState().user.jwt) {
        config.headers.authorization = 'Bearer ' + store.getState().user.jwt;
    }

    return config;
});
/*

HTTP.interceptors.response.use(response => response, error => {
    //console.log(error.response)
    if (error.response.status === 401) {
//        history.push("/login")
        console.log("AAAAAAAAAAAAAAA");
    }
    return error;
});*/

export default HTTP;
