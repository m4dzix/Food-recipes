import React from "react";
import { toRecipe } from "../../../routes";
import { StyledLink, Image, Title } from "./styled";

const Tile = ({ recipe }) => {
  return (
    <StyledLink to={toRecipe(recipe.idMeal)}>
      <Image url={recipe.strMealThumb}></Image>
      <Title>{recipe.strMeal}</Title>
    </StyledLink>
  );
};

export default Tile;
