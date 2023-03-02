import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const SliderInfo = styled.div`
  height: 700px;
  max-height: 700px auto;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 100%;
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
  backdrop-filter: blur(5px);
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

export default function SliderMain({ slide }) {
  return (
    <SliderInfo img={slide.img}>
      <SliderItem>
        <SliderTitle>{slide.title}</SliderTitle>
        <SliderDescription>{slide.description}</SliderDescription>
        <Button
          border={"white"}
          color={"white"}
          bgHover={"white"}
          colorHover={"black"}
        >
          Смотреть все
        </Button>
      </SliderItem>
    </SliderInfo>
  );
}
