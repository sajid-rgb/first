import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import booksReducers from "./reducers/bokksReducers";
const combinedReducer = combineReducers({
    books:booksReducers
})
export const store = createStore(combinedReducer,composeWithDevTools())

