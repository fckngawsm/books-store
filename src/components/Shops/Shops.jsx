import React from "react";
import Button from "../Button/Button";
import CardShops from "../CardShops/CardShops";
import { List } from "../List/List";
import Title from "../Title/Title";

function Shops() {
  return (
    <>
      <Title>STORES ALL OVER THE WORLD</Title>
      <List>
        <CardShops
          title="livraria lello"
          site="https://www.livrarialello.pt/"
          adresss=" R. das Carmelitas 144, 4050-161 Porto, Portugal"
          phone="+351 22 200 2037"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Livraria_Lello_%26_Irm%C3%A3o_IMG_0111_%2832779925915%29.jpg/800px-Livraria_Lello_%26_Irm%C3%A3o_IMG_0111_%2832779925915%29.jpg"
        />
        <CardShops
          title="Cărturești Carusel"
          site="https://lh3.googleusercontent.com/p/AF1QipNW0J-NaA4rpLPeWE9zUfDY84TEfx82aJwp-xQE=s680-w680-h510"
          adresss="Strada Lipscani 55, București 030033, Romania"
          phone="+40 728 828 922"
          img="https://lh3.googleusercontent.com/p/AF1QipNW0J-NaA4rpLPeWE9zUfDY84TEfx82aJwp-xQE=s680-w680-h510"
        />
        <CardShops
          title="Polare"
          site="https://www.azureazure.com/wp-content/uploads/2013/08/Polare-Maastricht.jpg"
          adresss="Binnenstad Dominicanerkerkstraat 1 6211 CP Maastricht"
          phone="(+31) 043 410 00 10"
          img='"https://www.azureazure.com/wp-content/uploads/2013/08/Polare-Maastricht.jpg"'
        />
        <CardShops
          title="Librairie Avant-Garde"
          site="https://site.douban.com/bookshop/"
          adresss="南京鼓楼区广州路173号 古南都饭店对面"
          phone="025-83711455"
          img="https://media.cnn.com/api/v1/images/stellar/prod/130828134135-nanjing-book-shop-15.jpg?q=w_2591,h_1657,x_0,y_0,c_fill/w_1280"
        />
      </List>
      <Button
        border={"black"}
        color={"black"}
        bgHover={"black"}
        colorHover={"white"}
      >
        Смотреть все
      </Button>
    </>
  );
}

export default Shops;
