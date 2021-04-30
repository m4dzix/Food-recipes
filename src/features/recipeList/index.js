import React, { useEffect } from "react";
import Section from "../../common/RecipeListSubpage/Section";
import Tile from "../../common/RecipeListSubpage/Tile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipeList,
  selectRecipeList,
  selectRecipeListStatus,
} from "./recipeListSlice";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipeList = useSelector(selectRecipeList);
  const recipeListStatus = useSelector(selectRecipeListStatus);
  if (recipeListStatus === "success") {
    console.log(recipeList);
  }
  useEffect(() => {
    dispatch(fetchRecipeList());
  }, [dispatch]);

  return (
    <Section>
      {recipeListStatus === "success" ? (
        recipeList.map((recipe) => (
          <Tile
            key={recipe.id}
            image={recipe.strMealThumb}
            title={recipe.strMeal}
          ></Tile>
        ))
      ) : (
        <div></div>
      )}
    </Section>
  );
};

export default RecipeList;
