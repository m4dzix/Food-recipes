import React from "react";
import { useSelector } from "react-redux";
import RecipeListSubpage from "../../../common/RecipeListSubpage/index";
import {
  fetchRecipeListByArea,
  selectRecipeListByArea,
  selectRecipeListByAreaStatus,
} from "./recipeListByAreaSlice";

const RecipeListByArea = () => {
  const recipeListByArea = useSelector(selectRecipeListByArea);
  const recipeListByAreaStatus = useSelector(selectRecipeListByAreaStatus);
  return (
    <RecipeListSubpage
      recipeList={recipeListByArea}
      recipeListStatus={recipeListByAreaStatus}
      fetchRecipeList={fetchRecipeListByArea}
    />
  );
};

<RecipeListSubpage />;

export default RecipeListByArea;
