import React from "react";
import { Tile, Title, List, Key, Value, Recipe } from "./styled";
import Section from "../Section";
import { useSelector } from "react-redux";
import { getRecipeById } from "../../features/myRecipes/myRecipesSlice";
import { useParams } from "react-router-dom";

const MyMealRecipeSubpage = () => {
  const { id } = useParams();
  const myRecipe = useSelector((state) => getRecipeById(state, id));
  const ing = myRecipe.ingredients;
  const meas = myRecipe.measures;

  const IngredientsAndMeasuresArray = Object.entries(
    Object.fromEntries(ing.map((_, i) => [ing[i], meas[i]]))
  );

  return (
    <Section list={false}>
      <Tile>
        <Title>{myRecipe.name}</Title>
        <List details>
          <Key>Category:</Key>
          <Value>{myRecipe.category}</Value>
          <Key>Area:</Key>
          <Value>{myRecipe.area}</Value>
        </List>
        <List>
          {IngredientsAndMeasuresArray.map(([key, value]) => (
            <React.Fragment key={key}>
              <Key>{key}</Key>
              <Value>{value}</Value>
            </React.Fragment>
          ))}
        </List>
        <Recipe>{myRecipe.description}</Recipe>
      </Tile>
    </Section>
  );
};

export default MyMealRecipeSubpage;
