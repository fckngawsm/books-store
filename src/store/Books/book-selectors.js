export const selectInfoBook = (state) => ({
  status: state.books.status,
  error: state.books.error,
  length: state.books.list.length,
});
// export const selectAllBooks = (state) => state.books.list;

export const selectVisibleBooks = (state, filters = []) => {
  if (filters.length === 0) return state.books.list;
  return state.books.list.filter((book) => {
    const bookFilter = [].concat(
      book.format,
      ...book.genres.split(", "),
      book.authors
    );
    return filters.every((filter) => bookFilter.includes(filter));
  });
};
