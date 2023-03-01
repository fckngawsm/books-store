import React from "react";
import styled from "styled-components";
import Slider from "../Slider/Slider";
const HeaderWraper = styled.header`
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  line-height: 1.2;
  cursor: pointer;
`;
const HeaderNavigation = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const HeaderItem = styled.li`
  font-weight: 500;
  padding: 0;
  font-size: 14px;
  line-height: 1.2;
  list-style-type: none;
  cursor: pointer;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  position: relative;
  &:after{
    display: block;
	position: absolute;
	left: 0;
	width: 0;
	height: 1px;
	background-color: black;
	content: "";
	transition: width 0.3s ease-out;
  }
  &:hover::after{
    width: 100%;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderWraper>
        <Title>ТОТ</Title>
        <HeaderNavigation>
          <HeaderItem>Книги</HeaderItem>
          <HeaderItem>Авторы</HeaderItem>
          <HeaderItem>Журналы</HeaderItem>
          <HeaderItem>Новости</HeaderItem>
          <HeaderItem>О нас</HeaderItem>
        </HeaderNavigation>
      </HeaderWraper>
      <Slider />
    </>
  );
}
