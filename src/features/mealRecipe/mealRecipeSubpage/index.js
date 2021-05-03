import React, { useEffect } from "react";
import { Section, Wrapper, Title, Item, List, Image, Recipe } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMealRecipe,
  selectMealRecipeStatus,
  fetchMealRecipe,
} from "../mealRecipeSlice";

const MealRecipeSubpage = () => {
  const mealRecipe = useSelector(selectMealRecipe);
  const mealRecipeStatus = useSelector(selectMealRecipeStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealRecipe());
  }, [dispatch]);

  if (mealRecipeStatus === "success") {
    return (
      <Section>
        <Wrapper>
          <Title>{mealRecipe[0].strMeal}</Title>
          <Image url={mealRecipe[0].strMealThumb} />
          <List>
            <Item>{mealRecipe[0].strCategory}</Item>
            <Item>{mealRecipe[0].strArea}</Item>
            <Item>
              <a href={mealRecipe[0].strYoutube}>YOUTUBE</a>
            </Item>
          </List>
          <List ingridiens>
            <Item>{mealRecipe[0].strIngredient1}</Item>
            <Item>{mealRecipe[0].strIngredient1}</Item>
            <Item>{mealRecipe[0].strIngredient1}</Item>
            <Item>{mealRecipe[0].strIngredient1}</Item>
            <Item>{mealRecipe[0].strIngredient1}</Item>
          </List>
          <Recipe>{mealRecipe[0].strInstructions}</Recipe>
        </Wrapper>
      </Section>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default MealRecipeSubpage;
