import React, { useEffect } from "react";
import Section from "../Section";
import { Wrapper, Title, Image, List, Key, Value, Recipe } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMealRecipe,
  selectMealRecipeStatus,
  fetchMealRecipe,
} from "../../features/mealRecipe/mealRecipeSlice";
import { useSelectElements, useShowElementsValue } from "./useSelectElement";
import { useParams } from "react-router-dom";

const MealRecipeSubpage = () => {
  const mealRecipe = useSelector(selectMealRecipe);
  const mealRecipeStatus = useSelector(selectMealRecipeStatus);
  const selectElements = useSelectElements();
  const elementsValue = useShowElementsValue();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMealRecipe(id));
  }, [dispatch, id]);

  if (mealRecipeStatus === "success") {
    const ingredients = elementsValue(
      selectElements(mealRecipe, "strIngredient")
    );
    const measures = elementsValue(selectElements(mealRecipe, "strMeasure"));

    const IngredientsAndMeasuresArray = Object.entries(
      Object.fromEntries(
        ingredients.map((_, i) => [ingredients[i], measures[i]])
      )
    );

    return (
      <Section list={false}>
        <Wrapper>
          <Title>{mealRecipe.strMeal}</Title>
          <Image url={mealRecipe.strMealThumb} />
          <List details>
            <Key>Category:</Key>
            <Value>{mealRecipe.strCategory}</Value>
            <Key>Area:</Key>
            <Value>{mealRecipe.strArea}</Value>
            <Key>See on youtube:</Key>
            <Value>
              <a href={mealRecipe.strYoutube}>YOUTUBE</a>
            </Value>
          </List>
          <List>
            {IngredientsAndMeasuresArray.map(([key, value]) => (
              <React.Fragment key={key}>
                <Key>{key}</Key>
                <Value>{value}</Value>
              </React.Fragment>
            ))}
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
