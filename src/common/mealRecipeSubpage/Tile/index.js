import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Title, Image, List, Key, Value, Recipe } from "./styled";
import { toRecipeListByArea, toRecipeListByCategory } from "../../../routes";

const MealRecipeSubpage = ({ mealRecipe, array }) => (
  <Wrapper>
    <Title>{mealRecipe.strMeal}</Title>
    <Image url={mealRecipe.strMealThumb} />
    <List details>
      <Key>Category:</Key>
      <Value as={Link} to={toRecipeListByCategory(mealRecipe.strCategory)}>
        {mealRecipe.strCategory}
      </Value>
      <Key>Area:</Key>
      <Value as={Link} to={toRecipeListByArea(mealRecipe.strArea)}>
        {mealRecipe.strArea}
      </Value>
      <Key>See on youtube:</Key>
      <Value as={"a"} href={mealRecipe.strYoutube}>
        YOUTUBE
      </Value>
    </List>
    <List>
      {array.map(([key, value]) => (
        <React.Fragment key={key}>
          <Key>{key}</Key>
          <Value>{value}</Value>
        </React.Fragment>
      ))}
    </List>
    <Recipe>{mealRecipe.strInstructions}</Recipe>
  </Wrapper>
);

export default MealRecipeSubpage;
