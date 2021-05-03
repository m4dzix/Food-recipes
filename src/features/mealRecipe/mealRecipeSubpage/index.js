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
          <Title>{mealRecipe.strMeal}</Title>
          <Image url={mealRecipe.strMealThumb} />
          <List>
            <Item>{mealRecipe.strCategory}</Item>
            <Item>{mealRecipe.strArea}</Item>
            <Item>
              <a href={mealRecipe.strYoutube}>YOUTUBE</a>
            </Item>
          </List>
          <List ingridiens>
            <Item>{mealRecipe.strIngredient1}</Item>
            <Item>{mealRecipe.strIngredient1}</Item>
            <Item>{mealRecipe.strIngredient1}</Item>
            <Item>{mealRecipe.strIngredient1}</Item>
            <Item>{mealRecipe.strIngredient1}</Item>
          </List>
          <Recipe>{mealRecipe.strInstructions}</Recipe>
        </Wrapper>
      </Section>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default MealRecipeSubpage;
