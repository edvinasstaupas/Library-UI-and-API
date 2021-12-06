import {LOAD_BOOKS, LOADING, RESET_BOOKS, SEARCHED} from './BooksModel';

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOKS:
            return {
                ...state,
                bookList: action.bookList,
                loading: false,
            };
        case SEARCHED:
            return {
                ...state,
                searched: action.searched,
            };
        case LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case RESET_BOOKS:
            return initialState;
        default:
            return state;
    }
};

const initialState = {bookList: [], searched: false, loading: true};

export default booksReducer;
