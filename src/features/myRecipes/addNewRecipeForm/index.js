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
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const measures = useSelector(selectMeasures);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addRecipe({
        id: nanoid(),
        category: `${category.charAt(0).toUpperCase()}${category.substring(1)}`,
        area: `${area.charAt(0).toUpperCase()}${area.substring(1)}`,
        name: `${name.charAt(0).toUpperCase()}${name.substring(1)}`,
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
        description: `${description
          .charAt(0)
          .toUpperCase()}${description.substring(1)}`,
      })
    );
    setCategory(""),
      setArea(""),
      setName(""),
      dispatch(clearIngredients()),
      dispatch(clearMeasures()),
      setDescription("");
  };
  return (
    <Section myRecipe={"true"}>
      <Form onSubmit={onFormSubmit}>
        <Label>
          Category
          <Input
            type="text"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </Label>
        <Label>
          Area
          <Input
            type="text"
            name="area"
            value={area}
            onChange={(event) => setArea(event.target.value)}
          />
        </Label>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
        <Ingredients />
        <Label>
          Description
          <Textarea
            rows="10"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Label>
        <Button> Add new recipe !</Button>
      </Form>
    </Section>
  );
};

export default MyRecipes;
