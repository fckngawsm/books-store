import { SET_BOOKS, SET_ERROR, SET_LOADING } from "./book-constants";
export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const LoadingBooks =
  () =>
  (dispatch, _, { api, client }) => {
    dispatch(setLoading);
    client
      .get(api.ALL_BOOKS)
      .then(({ data }) => {
        console.log(data)
        dispatch(setBooks(data))
    })
      .catch((err) => dispatch(setError(err)));
  };
