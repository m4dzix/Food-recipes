import React from "react";
import { useSelector } from "react-redux";
import RecipeListSubpage from "../../common/RecipeListSubpage/index";

import {
  fetchRecipeListByCategory,
  selectRecipeListByCategory,
  selectRecipeListByCategoryStatus,
} from "./recipeListByCategorySlice";

const RecipeListByCategory = () => {
  const recipeListByCategory = useSelector(selectRecipeListByCategory);
  const recipeListStatusByCategory = useSelector(
    selectRecipeListByCategoryStatus
  );
  return (
    <RecipeListSubpage
      recipeList={recipeListByCategory}
      recipeListStatus={recipeListStatusByCategory}
      fetchRecipeList={fetchRecipeListByCategory}
    />
  );
};
export default RecipeListByCategory;
