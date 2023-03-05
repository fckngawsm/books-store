import { combineReducers } from "redux";
import { booksReducer } from "./books/book-reducer";
import { filterReducer } from "./filter/filter-reducer";
export const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});
