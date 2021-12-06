import HTTP from '.';

const fetchCopiesByUser = () => {
    const path = '/copy/user';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const fetchCopiesByUserLibrarian = (userNumber) => {
    const path = '/copy/user/' + userNumber;
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const fetchCopiesByBook = (id) => {
    const path = '/book/' + id + '/copies';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const fetchBooksBySearch = (searchDto) => {
    return HTTP.post('/book/find', {
        searchDto: {
            title: searchDto.title,
            author: searchDto.author,
        }
    });
};

const reserveCopyByCopyId = (copyId) => {
    const copy = {id: copyId};
    return HTTP.post('copy/reserve', copy);
};

const takeCopyByCopyId = (copyId) => {
    const copy = {id: copyId};
    return HTTP.post('copy/take', copy);
};

const returnCopyByCopyId = (copyId) => {
    const copy = {id: copyId};
    return HTTP.post('copy/return', copy);
};

const fetchBooks = (pageableArguments) => {
    const path = 'book?page=' + pageableArguments.page +'&size=' + pageableArguments.size;
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const fetchBooksNew = () => {
    const path = 'book/new';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const login = (loginData) => HTTP.post('login', loginData);

const register = (registerData) => HTTP.post('register', registerData);

export {
    fetchCopiesByUser,
    fetchBooks,
    fetchCopiesByBook,
    reserveCopyByCopyId,
    login,
    fetchBooksBySearch,
    fetchBooksNew,
    register,
    fetchCopiesByUserLibrarian,
    takeCopyByCopyId,
    returnCopyByCopyId,
};
