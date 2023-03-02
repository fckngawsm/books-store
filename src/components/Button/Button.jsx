import styled from "styled-components";
const Button = styled.button`
  display: block;
  width: 222px;
  line-height: 1.2;
  border: solid 1px ${(props) => props.border};
  background-color: transparent;
  letter-spacing: 1px;
  font-size: 10px;
  margin: 65px auto 0;
  color: ${(props) => props.color};
  text-transform: uppercase;
  padding: 20px 30px;
  cursor: pointer;
  transition: 0.5s linear;
  &:hover {
    background-color: ${(props) => props.bgHover};
    color: ${(props) => props.colorHover};
  }
`;

export default Button;
