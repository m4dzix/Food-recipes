import React from "react";
import { Wrapper, Image, Title } from "./styled";

const Tile = ({ title, image }) => {
  return (
    <Wrapper>
      <Image url={image}></Image>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Tile;
