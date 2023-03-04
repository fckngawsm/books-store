import React from "react";
import styled from "styled-components";

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
`;

const CardSite = styled.a`
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  margin-top: 15px;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const CardName = styled.h2`
  font-size: 16px;
  height: auto;
  overflow: hidden;
  margin: 10px 0 0 0;
  text-transform: uppercase;
`;

const CardAdress = styled.h3`
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const CardPhone = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.2px;
  color: #000000;
  font-weight: 600;
`;

function CardShops({ title, adresss, site, phone, img }) {
  return (
    <Wraper>
      <CardImage src={img} alt="shops" />
      <CardInfromation>
        <CardName>{title}</CardName>
        <CardAdress>{adresss}</CardAdress>
        <CardSite href={site}>WebSite</CardSite>
        <CardPhone>{phone}</CardPhone>
      </CardInfromation>
    </Wraper>
  );
}

export default CardShops;
