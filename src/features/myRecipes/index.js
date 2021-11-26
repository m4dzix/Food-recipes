import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from "../../common/Section";
import { Form, Label, Input, Textarea, Button } from "./styled";
import Ingredients from "./ingrednientsField";
import {
  selectIngredients,
  selectMeasures,
  addRecipe,
  selectMyRecipes,
} from "./myRecipesSlice";

const MyRecipes = () => {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const measures = useSelector(selectMeasures);
  const myRecipesList = useSelector(selectMyRecipes);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addRecipe({
        category,
        area,
        name,
        ingredients,
        measures,
        description,
      })
    );

    console.log(myRecipesList);
  };
  return (
    <Section form={"true"}>
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
