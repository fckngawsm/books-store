import { combineReducers } from "redux";
import { booksReducer } from "./Books/book-reducer";
export const rootReducer = combineReducers({
    books: booksReducer
})
