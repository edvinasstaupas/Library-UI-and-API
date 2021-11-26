import HTTP from '.';

const fetchCopiesByUser = () => {
    const path = '/user/copies';
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
    return HTTP.post("/book/find", {
        title: searchDto.title,
        author: searchDto.author
    })
};

const takeCopyByCopyId = (copyId) => {
    const copy = {id: copyId}
    return HTTP.post('copy/take', copy)
};

const fetchBooks = () => {
    const path = 'book';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const login = (loginData) => HTTP.post("/login", loginData)

export {fetchCopiesByUser, fetchBooks, fetchCopiesByBook, takeCopyByCopyId, login, fetchBooksBySearch};

// ./
