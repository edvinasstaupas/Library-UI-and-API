import HTTP from '.';

const fetchCopiesByUser = (id) => {
    const path = '/user/' + id + '/copies';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const getUserId = () => {
    return HTTP.get('user/currentUser').finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

export { fetchCopiesByUser, getUserId };
