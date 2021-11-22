import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  changeIngredientInputValue,
  selectIngredients,
  changeMeasureInputValue,
  selectMeasures,
} from "./myRecipesSlice";
import { Label, Input, Button } from "./styled";
const Ingredients = () => {

  const ingredientsList = useSelector(selectIngredients);
  const measuresList = useSelector(selectMeasures);
  const dispatch = useDispatch();

  const onButtonClick = () =>(
      dispatch (addIngredient({
        ingredientValue: "",
        id: ingredientsList.length,
      }),))

  return (
    <>
        <Label ingredient={true}  >
        Ingredients
          {ingredientsList.map(({ id }) => (
            <Input
              key={id}
              name="ingredient"
              type="text"
              onChange={(event) =>
                dispatch(changeIngredientInputValue(event.target.value))
              }
            />
          ))}
        </Label>
        <Label  measure={true}>Measures
          {measuresList.map(({  id }) => (
            <Input
              key={id}
              name="measure"
              type="text"
              onChange={(event) =>
                dispatch(changeMeasureInputValue(event.target.value))
              }
            />
          ))}
        </Label>
      <Button
      type={"button"}
        onClick={() => {
          onButtonClick();
        }}
      >
        Add Ingredient
      </Button>
    </>
  );
};

export default Ingredients
