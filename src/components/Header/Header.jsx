import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Header/header.css";

const HeaderWraper = styled.header`
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(Link)`
  margin: 0;
  font-size: 30px;
  line-height: 1.2;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;
const HeaderNavigation = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const HeaderItem = styled(Link)`
  font-weight: 500;
  padding: 0;
  font-size: 14px;
  line-height: 1.2;
  list-style-type: none;
  cursor: pointer;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  position: relative;
  &:after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 1px;
    background-color: black;
    content: "";
    transition: width 0.3s ease-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderWraper>
        <Title to="/">ТОТ</Title>
        <HeaderNavigation>
          <HeaderItem to="/books">Books</HeaderItem>
          <HeaderItem to="/authors">Authors</HeaderItem>
          <HeaderItem to="/magazine">Magazines</HeaderItem>
          <HeaderItem to="/news">News</HeaderItem>
          <HeaderItem to="/about">About us</HeaderItem>
        </HeaderNavigation>
      </HeaderWraper>
    </>
  );
}
