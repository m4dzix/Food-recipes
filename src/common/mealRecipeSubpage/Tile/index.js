import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Title,
  Image,
  Ingredients,
  Subtitle,
  List,
  Key,
  Value,
  Recipe,
} from "./styled";
import { toRecipeListByArea, toRecipeListByCategory } from "../../../routes";

const MealRecipeSubpage = ({ userRecipe, mealRecipe, array }) => (
  <Wrapper myRecipe={userRecipe}>
    <Title>{mealRecipe.strMeal}</Title>
    {userRecipe ? null : <Image url={mealRecipe.strMealThumb} />}
    <List details>
      <Key>Category:</Key>
      {!userRecipe ? (
        <Value>{mealRecipe.strCategory}</Value>
      ) : (
        <Value as={Link} to={toRecipeListByCategory(mealRecipe.strCategory)}>
          {" "}
          {mealRecipe.strCategory}
        </Value>
      )}
      <Key>Area:</Key>
      {userRecipe ? (
        <Value>{mealRecipe.strArea}</Value>
      ) : (
        <Value as={Link} to={toRecipeListByArea(mealRecipe.strArea)}>
          {mealRecipe.strArea}
        </Value>
      )}
      {userRecipe ? null : (
        <>
          <Key>See on youtube:</Key>
          <Value as={"a"} href={mealRecipe.strYoutube}>
            YOUTUBE
          </Value>
        </>
      )}
    </List>
    <Ingredients>
      <Subtitle> Ingredients: </Subtitle>
      <List>
        {array.map(([key, value]) => (
          <React.Fragment key={key}>
            <Key>{key}</Key>
            <Value>{value}</Value>
          </React.Fragment>
        ))}
      </List>
    </Ingredients>
    <Recipe>
      {" "}
      <Subtitle> Recipe: </Subtitle>
      {mealRecipe.strInstructions}
    </Recipe>
  </Wrapper>
);

export default MealRecipeSubpage;
