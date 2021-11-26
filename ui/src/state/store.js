import {combineReducers, createStore} from "redux";
import userReducer from "./User/UserReducer";

/**
 * Bendras Redux store
 */

const rootReducer = combineReducers({
    user: userReducer,
})

const constructStore = () => {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //<== reikalingas irankis REDUX DevTools
    );
}

const store = constructStore()

export default store
