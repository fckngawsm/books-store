import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    margin: 20px 50px;
    padding-top: 40px;
    border-top: 1px solid #878787;
`;
const FooterCop = styled.p`
  width: 1920px;
  margin: 0;
  margin-left: auto;
  color: #545454;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
`;
function Footer() {
  return (
    <FooterWrapper>
      <FooterCop>&copy; {new Date().getFullYear()} TOT</FooterCop>
    </FooterWrapper>
  );
}

export default Footer;
