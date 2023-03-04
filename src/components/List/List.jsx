import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

export const List = ({ children}) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};
