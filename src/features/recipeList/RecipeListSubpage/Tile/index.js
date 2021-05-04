import React from "react";
import { StyledLink, Image, Title } from "./styled";

const Tile = ({ path, title, image }) => {
  return (
    <StyledLink to={path}>
      <Image url={image}></Image>
      <Title>{title}</Title>
    </StyledLink>
  );
};

export default Tile;
