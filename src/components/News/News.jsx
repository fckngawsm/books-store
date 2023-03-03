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

const NewsItem = styled.div`
  width: 600px;
  margin-right: 100px;
`;
const NewsWrapper = styled.div`
  width: 1100px;
  display: flex;
  height: 650px;
  margin: 0 auto;
`;

const NewsItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 300px;
`;

const NewsImage = styled.img`
  width: 600px;
  height: 500px;
`;

const NewsTitle = styled.h3`
  font-size: 20px;
  line-height: 1.5;
  margin: 20px 0;
  cursor: pointer;
`;

const NewsDescription = styled.p`
  font-size: 15px;
  line-height: 1.2;
  margin: 0;
`;

const ColumnItem = styled.div`
  width: 400px;
  height: 400px;
`;

const NewsImageSmall = styled.img`
  width: 200px;
  height: 200px;
`;

const NewsTitleSmall = styled.h3`
  font-size: 13px;
  cursor: pointer;
`;
const NewsDescriptionSmall = styled.p`
  font-size: 14px;
`;
function News() {
  return (
    <Section>
      <Title>News</Title>
      <NewsWrapper>
        <NewsItem>
          <NewsImage
            src={
              "https://static01.nyt.com/images/2023/03/03/multimedia/01MARCHBOOKS-promo-zthb/01MARCHBOOKS-promo-zthb-videoLarge.jpg"
            }
          />
          <NewsTitle>14 Books Coming in March</NewsTitle>
          <NewsDescription>
            A haunting horror novel set a century ago in the American West,
            Eleanor Catton’s first novel in a decade, a Ukrainian war diary and
            much more.
          </NewsDescription>
        </NewsItem>
        <NewsItemColumn>
          <ColumnItem>
            <NewsImageSmall
              src={
                "https://static01.nyt.com/images/2023/03/05/books/05PAPERBACK-BURST-COMBO/05PAPERBACK-BURST-COMBO-square640.jpg?quality=75&auto=webp"
              }
            />
            <NewsTitleSmall>14 Books Coming in March</NewsTitleSmall>
            <NewsDescriptionSmall>
              A haunting horror novel set a century ago in the American West,
              Eleanor Catton’s first novel in a decade, a Ukrainian war diary
              and much more.
            </NewsDescriptionSmall>
          </ColumnItem>
          <ColumnItem>
            <NewsImageSmall
              src={
                "https://static01.nyt.com/images/2023/03/05/books/05PAPERBACK-BURST-COMBO/05PAPERBACK-BURST-COMBO-square640.jpg?quality=75&auto=webp"
              }
            />
            <NewsTitleSmall>14 Books Coming in March</NewsTitleSmall>
            <NewsDescriptionSmall>
              A haunting horror novel set a century ago in the American West,
              Eleanor Catton’s first novel in a decade, a Ukrainian war diary
              and much more.
            </NewsDescriptionSmall>
          </ColumnItem>
        </NewsItemColumn>
      </NewsWrapper>
    </Section>
  );
}

export default News;
