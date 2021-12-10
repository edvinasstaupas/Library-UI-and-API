const handleError = (error) => {
    switch (error.status) {
        case 401:
            return '/login';
        case 403:
            return '/aaa';
        case 404:
            return '/404';
        default:
            return '/';
    }
};
export default handleError;
