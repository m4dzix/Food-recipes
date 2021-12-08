import React from "react";
import Section from "../../Section";
import Tile from "../Tile";
import { useSelector } from "react-redux";
import { getRecipeById } from "../../../features/myRecipes/myRecipesSlice";
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
    <Section myRecipe>
      <Tile
        userRecipe
        mealRecipe={myRecipe}
        array={IngredientsAndMeasuresArray}
      ></Tile>
    </Section>
  );
};

export default MyMealRecipeSubpage;
