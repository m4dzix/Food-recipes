import React, { useEffect } from "react";
import Section from "./RecipeListSubpage/Section";
import Tile from "./RecipeListSubpage/Tile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchRecipeList,
  selectRecipeList,
  selectRecipeListStatus,
} from "./recipeListSlice";
import { toRecipe } from "../../routes";

const RecipeList = () => {
  const recipeList = useSelector(selectRecipeList);
  const recipeListStatus = useSelector(selectRecipeListStatus);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRecipeList(id));
  }, [dispatch, id]);

  return (
    <Section>
      {recipeListStatus === "success" ? (
        recipeList.map((recipe) => (
          <Tile
            key={recipe.id}
            path={toRecipe(recipe.idMeal)}
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
