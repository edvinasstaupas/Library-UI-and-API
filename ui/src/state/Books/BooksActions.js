import { RESET_BOOKS, LOAD_BOOKS, SEARCHED, LOADING } from './BooksModel';

export const setBookList = (bookList) => ({
    type: LOAD_BOOKS,
    bookList,
});

export const resetBooks = () => ({
    type: RESET_BOOKS,
});

export const setSearched = (searched) => ({
    type: SEARCHED,
    searched,
});

export const setLoading = (loading) => ({
    type: LOADING,
    loading,
});
