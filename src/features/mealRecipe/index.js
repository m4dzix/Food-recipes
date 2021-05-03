import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMealRecipe,
  selectMealRecipeStatus,
  fetchMealRecipe,
} from "./mealRecipeSlice";
import Section from "../../common/RecipeListSubpage/Section";

const MealRecipe = () => {
  const mealRecipe = useSelector(selectMealRecipe);
  const mealRecipeStatus = useSelector(selectMealRecipeStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealRecipe());
  }, [dispatch]);

  return <Section></Section>;
};

export default MealRecipe;
