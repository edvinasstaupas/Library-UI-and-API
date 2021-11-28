import {SEARCH} from './BooksModel';

const booksReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH:
            return action.books;
        default:
            return state;
    }
};

export default booksReducer;
