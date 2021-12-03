import { RESET_BOOKS, SEARCH, SEARCHED } from './BooksModel';

const booksReducer = (state = { bookList: [], searched: false }, action) => {
    switch (action.type) {
        case SEARCH:
            return action.bookList;
        case SEARCHED:
            return action.searched;
        case RESET_BOOKS:
            return booksDefaultState;
        default:
            return state;
    }
};

const booksDefaultState = { bookList: [], searched: false };

export default booksReducer;
