import {SEARCH} from './BooksModel';

export const setBooks = (books) => ({
    type: SEARCH,
    books,
});