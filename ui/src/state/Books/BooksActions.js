import {RESET, SEARCH, SEARCHED} from './BooksModel';

export const setBookList = (bookList) => ({
    type: SEARCH,
    bookList,
});

export const resetBooks = () => ({
    type: RESET,
});

export const setSearched = (searched) => ({
    type: SEARCHED,
    searched,
});