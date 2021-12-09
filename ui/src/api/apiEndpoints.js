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

const fetchBooksBySearch = (pageableArguments, searchData) => {
    const searchDto = {
        title: searchData.title,
        author: searchData.author,
        page: pageableArguments.page,
        size: pageableArguments.size,
    };
    return HTTP.post('/book/find', searchDto);
};

const reserveCopyByCopyId = (copyId) => {
    const copy = { id: copyId };
    return HTTP.post('copy/reserve', copy);
};

const takeCopyByCopyId = (copyId) => {
    const copy = { id: copyId };
    return HTTP.post('copy/take', copy);
};

const returnCopyByCopyId = (copyId) => {
    const copy = { id: copyId };
    return HTTP.post('copy/return', copy);
};

const fetchBooks = (pageableArguments) => {
    const path = 'book';
    return HTTP.get(path, {
        params: {
            page: pageableArguments.page,
            size: pageableArguments.size,
        },
    }).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const fetchBooksNoPagination = () => {
    const path = 'book/all';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const fetchBooksNew = (pageableArguments) => {
    const path = 'book/new';
    return HTTP.get(path, {
        params: {
            page: pageableArguments.page,
            size: pageableArguments.size,
        },
    }).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

const createBookApi = (createBookDto) => {
    const book = {
        isbn: createBookDto.isbn,
        title: createBookDto.title,
        author: createBookDto.author,
        publishedAt: createBookDto.publishedAt,
    };
    return HTTP.post('book', book);
};
const createCopyApi = (createCopyDto) => {
    const copy = {
        book: createCopyDto.book,
        library: createCopyDto.library,
    };
    return HTTP.post('copy', copy);
};

const login = (loginData) => HTTP.post('login', loginData);

const register = (registerData) => HTTP.post('register', registerData);

const fetchAuthors = () => {
    const path = '/author';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};
const fetchLibraries = () => {
    const path = '/library';
    return HTTP.get(path).finally(
        (response) =>
            new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 100);
            })
    );
};

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
    fetchAuthors,
    createBookApi,
    createCopyApi,
    fetchBooksNoPagination,
    fetchLibraries,
};
