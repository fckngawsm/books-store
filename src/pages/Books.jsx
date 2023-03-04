import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import { selectAllBooks } from "../store/Books/book-selectors";
import { LoadingBooks } from "../store/Books/book-action";

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
  }
`;

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  useEffect(() => {
    dispatch(LoadingBooks());
  }, [dispatch]);

  console.log(books);
  return (
    <SectionBook>
      <BookNavigation>
        <BookNavTitle>categories</BookNavTitle>
        <BookTitle>Format:</BookTitle>
        <BookItems>Paperback</BookItems>
        <BookItems>Hardcover</BookItems>
        <BookTitle>Genre:</BookTitle>
        <BookItems>Young Adult</BookItems>
        <BookItems>Fiction</BookItems>
        <BookItems>Science Fiction</BookItems>
        <BookItems>Dystopia</BookItems>
        <BookItems>Fantasy</BookItems>
        <BookItems>Classics</BookItems>
        <BookItems>Academic</BookItems>
        <BookItems>School</BookItems>
        <BookItems>Romance</BookItems>
        <BookItems>Historical</BookItems>
        <BookItems>Humor</BookItems>
        <BookItems>Thriller</BookItems>
        <BookTitle>The volume of the book:</BookTitle>
        <BookItems>A voluminous book </BookItems>
        <BookItems>Short book</BookItems>
      </BookNavigation>
      <BookList>
        {books.map((book) => {
          return (
            <Card
              img={book.image_url}
              key={book.id}
              genre={book.genre}
              title={book.title}
              authors={book.authors}
            />
          );
        })}
      </BookList>
    </SectionBook>
  );
}

export default Books;
