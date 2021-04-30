import React, { useEffect } from "react";
import Section from "../../common/RecipeListSubpage/Section";
import Tile from "../../common/RecipeListSubpage/Tile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchRecipeList,
  selectRecipeList,
  selectRecipeListStatus,
} from "./recipeListSlice";

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
