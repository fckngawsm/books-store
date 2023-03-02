import React from "react";
import styled from "styled-components";
import book from "../../images/book.png";
import like from "../../images/like.svg";
import cart from "../../images/cart.svg";
const Section = styled.section`
  margin: 90px auto;
  width: 1440px;
`;
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
  letter-spacing: 2px;
  font-weight: 400;
  margin: 0 0 90px 0;
`;
const SectionItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Wraper = styled.div`
  width: 353px;
  height: 500px;
  background-color: #edeff1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NovetlyTitle = styled.h2`
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  margin: 0;
  padding: 3px 9px;
  color: white;
  width: 70px;
  font-weight: 400;
  line-height: 20px;
`;
const BookImage = styled.img`
  width: 230px;
  height: 270px;
`;
const NovetlyInfromation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 55px;
`;
const NovetlyGenre = styled.h3`
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  margin-top: 15px;
  text-transform: uppercase;
  line-height: 1.2;
`;
const NovetlyName = styled.h4`
  font-size: 16px;
  height: auto;
  overflow: hidden;
  margin: 0;
`;
const NovetlyAuthor = styled.h5`
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const NovetlyPurchase = styled.div`
  margin-top: 20px;
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

const NovetlyPrice = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.2px;
  color: #000000;
  font-weight: 600;
`;
const NovetlyFavourite = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin-right: 15px;
`;
const NovetlyCart = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
function Novetly() {
  return (
    <Section>
      <Title>Новинки</Title>
      <SectionItems>
        <Wraper>
          <NovetlyTitle>Новинки</NovetlyTitle>
          <BookImage src={`${book}`} alt="" />
          <NovetlyInfromation>
            <NovetlyGenre>Художественная литература</NovetlyGenre>
            <NovetlyName>Кровавая любовь</NovetlyName>
            <NovetlyAuthor>Пушкин</NovetlyAuthor>
            <NovetlyPurchase>
              <NovetlyPrice>600 руб</NovetlyPrice>
              <div>
                <NovetlyFavourite src={`${like}`} />
                <NovetlyCart src={`${cart}`} />
              </div>
            </NovetlyPurchase>
          </NovetlyInfromation>
        </Wraper>
        <Wraper>
          <NovetlyTitle>Новинки</NovetlyTitle>
          <BookImage src={`${book}`} alt="" />
          <NovetlyInfromation>
            <NovetlyGenre>Художественная литература</NovetlyGenre>
            <NovetlyName>Кровавая любовь</NovetlyName>
            <NovetlyAuthor>Пушкин</NovetlyAuthor>
            <NovetlyPurchase>
              <NovetlyPrice>600 руб</NovetlyPrice>
              <div>
                <NovetlyFavourite src={`${like}`} />
                <NovetlyCart src={`${cart}`} />
              </div>
            </NovetlyPurchase>
          </NovetlyInfromation>
        </Wraper>
        <Wraper>
          <NovetlyTitle>Новинки</NovetlyTitle>
          <BookImage src={`${book}`} alt="" />
          <NovetlyInfromation>
            <NovetlyGenre>Художественная литература</NovetlyGenre>
            <NovetlyName>Кровавая любовь</NovetlyName>
            <NovetlyAuthor>Пушкин</NovetlyAuthor>
            <NovetlyPurchase>
              <NovetlyPrice>600 руб</NovetlyPrice>
              <div>
                <NovetlyFavourite src={`${like}`} />
                <NovetlyCart src={`${cart}`} />
              </div>
            </NovetlyPurchase>
          </NovetlyInfromation>
        </Wraper>
        <Wraper>
          <NovetlyTitle>Новинки</NovetlyTitle>
          <BookImage src={`${book}`} alt="" />
          <NovetlyInfromation>
            <NovetlyGenre>Художественная литература</NovetlyGenre>
            <NovetlyName>Кровавая любовь</NovetlyName>
            <NovetlyAuthor>Пушкин</NovetlyAuthor>
            <NovetlyPurchase>
              <NovetlyPrice>600 руб</NovetlyPrice>
              <div>
                <NovetlyFavourite src={`${like}`} />
                <NovetlyCart src={`${cart}`} />
              </div>
            </NovetlyPurchase>
          </NovetlyInfromation>
        </Wraper>
      </SectionItems>
    </Section>
  );
}

export default Novetly;
