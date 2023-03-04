export const selectInfoBook = (state) => ({
  status: state.books.status,
  error: state.books.error,
  length: state.books.list.length,
});
export const selectAllBooks = (state) => state.books.list;
