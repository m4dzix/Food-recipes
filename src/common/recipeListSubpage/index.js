import React, { useEffect } from "react";
import Section from "../Section";
import Tile from "./Tile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchRecipeList,
  selectRecipeList,
  selectRecipeListStatus,
} from "../../features/recipeList/recipeListSlice";

const RecipeListSubpage = () => {
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
          <Tile key={recipe.id} recipe={recipe}></Tile>
        ))
      ) : (
        <div></div>
      )}
    </Section>
  );
};

export default RecipeListSubpage;
