import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
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
  margin-left: 100px;
`;
function Books() {
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
        <Card />
      </BookList>
    </SectionBook>
  );
}

export default Books;
