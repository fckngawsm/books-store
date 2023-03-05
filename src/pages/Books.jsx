import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import {
  selectInfoBook,
  selectVisibleBooksByFormat,
} from "../store/books/book-selectors";
import { LoadingBooks } from "../store/books/book-action";
import { selectFilter } from "../store/filter/filter-selectors";
import { format, genres, volume } from "../utils/categories";
import { addFilter } from "../store/filter/filter-action";
import { FilterPanel } from "../components/FilterPanel/FilterPanel";

const SectionBook = styled.section`
  margin: 40px 50px 0;
  width: 100%;
  display: flex;
`;

const BookNavigation = styled.ul`
  width: 200px;
  padding: 0;
`;

const BookNavTitle = styled.h2`
  font-size: 16px;
  color: black;
  text-transform: uppercase;
`;

const BookTitle = styled.h3`
  font-size: 16px;
  list-style-type: none;
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
`;

const BookItems = styled.li`
  font-size: 13px;
  list-style-type: none;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
`;

const BookList = styled.div`
  width: 100%;
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0 50px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 353px);
    gap: 10px;
    width: 1412px;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

const WraperWithFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

function Books() {
  const dispatch = useDispatch();
  const { error, length, status } = useSelector(selectInfoBook);
  const filter = useSelector(selectFilter);
  const books = useSelector((state) =>
    selectVisibleBooksByFormat(state, filter)
  );
  useEffect(() => {
    if (!length) dispatch(LoadingBooks());
  }, [dispatch, length]);
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <SectionBook>
      <BookNavigation>
        <BookNavTitle>categories</BookNavTitle>
        <BookTitle>Format:</BookTitle>
        {format.map((item, index) => {
          return (
            <BookItems onClick={() => handleAddFilter(item)} key={index}>
              {item}
            </BookItems>
          );
        })}
        <BookTitle>Genre:</BookTitle>
        {genres.map((item, index) => {
          return (
            <BookItems onClick={handleAddFilter} key={index}>
              {item}
            </BookItems>
          );
        })}
        <BookTitle>The volume of the book:</BookTitle>
        {volume.map((item, index) => {
          return (
            <BookItems onClick={handleAddFilter} key={index}>
              {item}
            </BookItems>
          );
        })}
      </BookNavigation>
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "completed" && (
        <WraperWithFilter>
          {filter.length > 0 ? <FilterPanel /> : null}
          <BookList>
            {books.map((book) => {
              return (
                <Card
                  img={book.image_url}
                  key={book.id}
                  genre={book.genres}
                  title={book.title}
                  authors={book.authors}
                />
              );
            })}
          </BookList>
        </WraperWithFilter>
      )}
    </SectionBook>
  );
}

export default Books;
