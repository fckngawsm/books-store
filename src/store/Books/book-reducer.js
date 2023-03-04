import { SET_BOOKS, SET_ERROR, SET_LOADING } from "./book-constants";

const initialState = {
  list: [],
  error: null,
  status: "idle",
};

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS: {
      return { ...state, status: "completed", list: payload };
    }
    case SET_LOADING: {
      return { ...state, status: "loading", error: "null" };
    }
    case SET_ERROR: {
      return { ...state, status: "rejected", error: payload };
    }
    default: {
      return state;
    }
  }
};
