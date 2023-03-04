import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { List } from "../List/List";
import Title from "../Title/Title";

function Novetly() {
  return (
    <>
      <Title>New</Title>
      <List>
        <Card title={"title"} genre="genre" authors="authors" />
        <Card title={"title"} genre="genre" authors="authors" />
        <Card title={"title"} genre="genre" authors="authors" />
        <Card title={"title"} genre="genre" authors="authors" />
      </List>
      <Button
        border={"black"}
        color={"black"}
        bgHover={"black"}
        colorHover={"white"}
      >
        View all
      </Button>
    </>
  );
}

export default Novetly;
