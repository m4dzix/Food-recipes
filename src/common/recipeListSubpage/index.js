import React, { useEffect } from "react";
import Section from "../Section";
import Error from "../../common/Error/";
import Loader from "../../common/Loading/";
import Tile from "./Tile";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeListSubpage = ({
  fetchRecipeList,
  recipeList,
  recipeListStatus,
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRecipeList(id));
  }, [dispatch, id]);

  if (recipeListStatus === "success") {
    return (
      <Section list={true}>
        {recipeList.map((recipe) => (
          <Tile key={recipe} recipe={recipe}></Tile>
        ))}
      </Section>
    );
  } else if (recipeListStatus === "error") {
    return (
      <Section list={false}>
        <Error />
      </Section>
    );
  } else {
    return (
      <Section list={false}>
        <Loader />
      </Section>
    );
  }
};

export default RecipeListSubpage;
