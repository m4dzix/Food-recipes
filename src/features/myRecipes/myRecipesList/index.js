import React from "react";
import Section from "../../../common/Section";
import { Title, List, Item } from "./styled";
import { useSelector } from "react-redux";
import { selectMyRecipes } from "../myRecipesSlice";
const MyRecipeList = () => {
  const recipeList = useSelector(selectMyRecipes);
  return (
    <Section myRecipe={"true"}>
      <Title>My recipe list</Title>
      <List>
        {recipeList.map((recipe) => (
          <Item key={recipe.name}>{recipe.name}</Item>
        ))}
      </List>
    </Section>
  );
};

export default MyRecipeList;
