import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from "../../../common/Section";
import { Form, Label, Input, Textarea, Button } from "./styled";
import Ingredients from "./ingrednientsField";
import {
  selectIngredients,
  selectMeasures,
  addRecipe,
  clearIngredients,
  clearMeasures,
} from "../myRecipesSlice";
import { nanoid } from "@reduxjs/toolkit";

const MyRecipes = () => {
  const [strCategory, setStrCategory] = useState("");
  const [strArea, setStrArea] = useState("");
  const [strMeal, setStrMeal] = useState("");
  const [strInstructions, setStrInstructions] = useState("");
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const measures = useSelector(selectMeasures);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addRecipe({
        id: nanoid(),
        strCategory: `${strCategory
          .charAt(0)
          .toUpperCase()}${strCategory.substring(1)}`,
        strArea: `${strArea.charAt(0).toUpperCase()}${strArea.substring(1)}`,
        strMeal: `${strMeal.charAt(0).toUpperCase()}${strMeal.substring(1)}`,
        ingredients: ingredients.map(
          (ingridient) =>
            `${ingridient.ingredientValue
              .charAt(0)
              .toUpperCase()}${ingridient.ingredientValue.substring(1)}`
        ),
        measures: measures.map(
          (measure) =>
            `${measure.measureValue
              .charAt(0)
              .toUpperCase()}${measure.measureValue.substring(1)}`
        ),
        strInstructions: `${strInstructions
          .charAt(0)
          .toUpperCase()}${strInstructions.substring(1)}`,
      })
    );
    setStrCategory(""),
      setStrArea(""),
      setStrMeal(""),
      dispatch(clearIngredients()),
      dispatch(clearMeasures()),
      setStrInstructions("");
  };
  return (
    <Section myRecipe={"true"}>
      <Form onSubmit={onFormSubmit}>
        <Label>
          Category
          <Input
            type="text"
            name="category"
            value={strCategory}
            onChange={(event) => setStrCategory(event.target.value)}
          />
        </Label>
        <Label>
          Area
          <Input
            type="text"
            name="area"
            value={strArea}
            onChange={(event) => setStrArea(event.target.value)}
          />
        </Label>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={strMeal}
            onChange={(event) => setStrMeal(event.target.value)}
          />
        </Label>
        <Ingredients />
        <Label>
          Description
          <Textarea
            rows="10"
            value={strInstructions}
            onChange={(event) => setStrInstructions(event.target.value)}
          />
        </Label>
        <Button> Add new recipe !</Button>
      </Form>
    </Section>
  );
};

export default MyRecipes;
