import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './User/UserReducer';
import booksReducer from './Books/BooksReducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Bendras Redux store
 */

const rootReducer = combineReducers({
    user: userReducer,
    books: booksReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const constructStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__() //<== reikalingas irankis REDUX DevTools
    );

    composedEnhancer();

    return store;
};

const store = constructStore();

export default store;
