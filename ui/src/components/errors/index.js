const handleError = (error) => {
    switch (error.status) {
        case 401:
            return '/login';
        case 404:
            return '/404';
        case 403:
            return '/aaa';
        default:
            return '/';
    }
};
export default handleError;
