import React from "react";
import styled from "styled-components";
const SliderInfo = styled.div`
  height: 700px;
  background-image: url("https://mf.b37mrtl.ru/rbthmedia/images/2021.05/original/609eae6585600a01c42a6017.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const SliderItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const SliderTitle = styled.h2`
  width: 470px;
  font-size: 50px;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const SliderDescription = styled.p`
  width: 470px;
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
`;

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
  transition: .5s linear;
  &:hover {
    background-color: #fff;
    color:black
  }
`;
export default function Slider() {
  return (
    <SliderInfo>
      <SliderItem>
        <SliderTitle>Неделя Булгакова</SliderTitle>
        <SliderDescription>
          Как Михаил Афанасьевич Булгаков боролся с Советской властью?
        </SliderDescription>
        <SliderButton>Подробнее</SliderButton>
      </SliderItem>
    </SliderInfo>
  );
}
