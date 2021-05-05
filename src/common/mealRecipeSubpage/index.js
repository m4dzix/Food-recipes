import React, { useEffect } from "react";
import Error from "../../common/Error";
import Loader from "../../common/Loading";
import Section from "../Section";
import Tile from "./Tile";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMealRecipe,
  selectMealRecipeStatus,
  fetchMealRecipe,
} from "../../features/mealRecipe/mealRecipeSlice";
import { useSelectElements, useShowElementsValue } from "./useSelectElement";
import { useParams } from "react-router-dom";

const MealRecipeSubpage = () => {
  const mealRecipe = useSelector(selectMealRecipe);
  const mealRecipeStatus = useSelector(selectMealRecipeStatus);
  const selectElements = useSelectElements();
  const elementsValue = useShowElementsValue();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMealRecipe(id));
  }, [dispatch, id]);

  if (mealRecipeStatus === "success") {
    const ingredients = elementsValue(
      selectElements(mealRecipe, "strIngredient")
    );
    const measures = elementsValue(selectElements(mealRecipe, "strMeasure"));

    const IngredientsAndMeasuresArray = Object.entries(
      Object.fromEntries(
        ingredients.map((_, i) => [ingredients[i], measures[i]])
      )
    );

    return (
      <Section list={false}>
        <Tile
          mealRecipe={mealRecipe}
          array={IngredientsAndMeasuresArray}
        ></Tile>
      </Section>
    );
  } else if (mealRecipeStatus === "success") {
    return <Error />;
  } else {
    return <Loader />;
  }
};

export default MealRecipeSubpage;
