import React from "react";

import { Wrapper, Title, Image, List, Key, Value, Recipe } from "./style";

const MealRecipeSubpage = ({ mealRecipe, array }) => {
  return (
    <Wrapper>
      <Title>{mealRecipe.strMeal}</Title>
      <Image url={mealRecipe.strMealThumb} />
      <List details>
        <Key>Category:</Key>
        <Value>{mealRecipe.strCategory}</Value>
        <Key>Area:</Key>
        <Value>{mealRecipe.strArea}</Value>
        <Key>See on youtube:</Key>
        <Value>
          <a href={mealRecipe.strYoutube}>YOUTUBE</a>
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
};

export default MealRecipeSubpage;
