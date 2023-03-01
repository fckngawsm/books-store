import styled from "styled-components";
const SliderButton = styled.button`
  width: 222px;
  line-height: 1.2;
  border: solid 1px #fff;
  background-color: transparent;
  margin-top: 65px;
  font-size: 10px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding: 20px 30px;
  cursor: pointer;
  transition: 0.5s linear;
  &:hover {
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
  }
`

export default SliderButton;
