import React from "react";
import styled from "styled-components";
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
const ShopTitle = styled.h3`
  font-size: 15px;
  margin: 0 0 20px 0;
  color: black;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
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

const ShopImage = styled.img`
  width: 270px;
  height: 270px;
`;

const ShopInfromation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 55px;
`;

const ShopAdress = styled.h4`
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  margin-top: 15px;
  width: 230px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const ShopSite = styled.a`
  font-size: 16px;
  height: auto;
  overflow: hidden;
  margin: 0;
  color: #878787;
  text-transform: uppercase;
`;

const ShopPhone = styled.h5`
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
`;

function Shops() {
  return (
    <Section>
      <Title>Магазины по всему миру</Title>
      <SectionItems>
        <Wraper>
          <ShopTitle>livraria lello</ShopTitle>
          <ShopImage
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Livraria_Lello_%26_Irm%C3%A3o_IMG_0111_%2832779925915%29.jpg/800px-Livraria_Lello_%26_Irm%C3%A3o_IMG_0111_%2832779925915%29.jpg"
            }
            alt=""
          />
          <ShopInfromation>
            <ShopAdress>
              R. das Carmelitas 144, 4050-161 Porto, Portugal{" "}
            </ShopAdress>
            <ShopSite href="https://www.livrarialello.pt/">WebSite</ShopSite>
            <ShopPhone>+351 22 200 2037</ShopPhone>
          </ShopInfromation>
        </Wraper>
        <Wraper>
          <ShopTitle>Cărturești Carusel</ShopTitle>
          <ShopImage
            src={
              "https://lh3.googleusercontent.com/p/AF1QipNW0J-NaA4rpLPeWE9zUfDY84TEfx82aJwp-xQE=s680-w680-h510"
            }
            alt=""
          />
          <ShopInfromation>
            <ShopAdress>
              Strada Lipscani 55, București 030033, Romania
            </ShopAdress>
            <ShopSite href="http://carturesticarusel.ro/">WebSite</ShopSite>
            <ShopPhone>+40 728 828 922</ShopPhone>
          </ShopInfromation>
        </Wraper>
        <Wraper>
          <ShopTitle>Polare, Maastricht</ShopTitle>
          <ShopImage
            src={
              "https://www.azureazure.com/wp-content/uploads/2013/08/Polare-Maastricht.jpg"
            }
            alt=""
          />
          <ShopInfromation>
            <ShopAdress>
              Binnenstad Dominicanerkerkstraat 1 6211 CP Maastricht
            </ShopAdress>
            <ShopSite href="https://libris.nl/dominicanen">WebSite</ShopSite>
            <ShopPhone> (+31) 043 410 00 10</ShopPhone>
          </ShopInfromation>
        </Wraper>
        <Wraper>
          <ShopTitle>Librairie Avant-Garde, Nanjing</ShopTitle>
          <ShopImage
            src={
              "https://media.cnn.com/api/v1/images/stellar/prod/130828134135-nanjing-book-shop-15.jpg?q=w_2591,h_1657,x_0,y_0,c_fill/w_1280"
            }
            alt=""
          />
          <ShopInfromation>
            <ShopAdress>南京鼓楼区广州路173号（古南都饭店对面）</ShopAdress>
            <ShopSite href="https://site.douban.com/bookshop/">
              WebSite
            </ShopSite>
            <ShopPhone>025-83711455</ShopPhone>
          </ShopInfromation>
        </Wraper>
      </SectionItems>
    </Section>
  );
}

export default Shops;
