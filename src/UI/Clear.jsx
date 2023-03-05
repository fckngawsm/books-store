import React from "react";
import styled from "styled-components";
import { ReactComponent as Remove } from "../images/icon-remove.svg";
const WrapperImage = styled.div`
  cursor: pointer;
  padding-bottom: 5px;
`;
function Clear({ onClear }) {
  return (
    <WrapperImage>
      <Remove onClick={onClear} />
    </WrapperImage>
  );
}

export default Clear;
