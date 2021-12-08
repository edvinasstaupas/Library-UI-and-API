import {LOADING} from './BooksModel';

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        default:
            return state;
    }
};

const initialState = {loading: true};

export default booksReducer;
