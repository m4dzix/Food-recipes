import React from "react";
import Section from "../../Section";
import Tile from "../Tile";
import { useSelector } from "react-redux";
import { getRecipeById } from "../../../features/myRecipes/myRecipesSlice";
import { useCreateIngredientsAndMeasuresArray } from "../useCreateIngredientsAndMeasuresArray";
import { useParams } from "react-router-dom";

const MyMealRecipeSubpage = () => {
  const { id } = useParams();
  const myRecipe = useSelector((state) => getRecipeById(state, id));
  const createIngredientsAndMeasuresArray =
    useCreateIngredientsAndMeasuresArray();
  const ingredients = myRecipe.ingredients;
  const measures = myRecipe.measures;
  const IngredientsAndMeasuresArray = createIngredientsAndMeasuresArray(
    ingredients,
    measures
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
