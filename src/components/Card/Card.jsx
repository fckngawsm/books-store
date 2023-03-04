import React from "react";
import styled from "styled-components";
import like from "../../images/like.svg";
import cart from "../../images/cart.svg";

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

const CardImage = styled.img`
  width: 230px;
  height: 270px;
`;

const CardInfromation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 55px;
  margin-top: 15px;
`;

const CardGenre = styled.h3`
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const CardName = styled.h4`
  font-size: 16px;
  height: auto;
  overflow: hidden;
  margin: 0;
`;

const CardAuthor = styled.h5`
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const CardPurchase = styled.div`
  margin-top: 20px;
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

const CardPrice = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.2px;
  color: #000000;
  font-weight: 600;
`;

const CardFavourite = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin-right: 15px;
`;

const CardCart = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

function Card({ genre, title, authors, img }) {
  return (
    <Wraper>
      <CardImage src={img} alt="book" />
      <CardInfromation>
        <CardGenre>{genre}</CardGenre>
        <CardName>{title}</CardName>
        <CardAuthor>{authors}</CardAuthor>
        <CardPurchase>
          <CardPrice>20$</CardPrice>
          <div>
            <CardFavourite src={`${like}`} />
            <CardCart src={`${cart}`} />
          </div>
        </CardPurchase>
      </CardInfromation>
    </Wraper>
  );
}

export default Card;
