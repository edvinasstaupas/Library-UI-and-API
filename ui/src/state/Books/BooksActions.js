import { RESET_BOOKS, SEARCH, SEARCHED } from './BooksModel';

export const setBookList = (bookList) => ({
    type: SEARCH,
    bookList,
});

export const resetBooks = () => ({
    type: RESET_BOOKS,
});

export const setSearched = (searched) => ({
    type: SEARCHED,
    searched,
});
