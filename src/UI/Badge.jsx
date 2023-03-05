import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: fit-content;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Item = styled.h2`
  font-size: 14px;
  color: black;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

function Badge({ children, onClick }) {
  return (
    <Wrapper>
      <Item onClick={onClick}>{children}</Item>
    </Wrapper>
  );
}

export default Badge;
