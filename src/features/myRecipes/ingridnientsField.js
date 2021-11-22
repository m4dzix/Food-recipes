import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  changeIngredientInputValue,
  selectIngredients,
  changeMeasureInputValue,
  selectMeasures,
} from "./myRecipesSlice";
import { Label, Input, IngredientField } from "./styled";
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
      <IngredientField>
        Ingredients
        <Label>
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
      </IngredientField>
      <IngredientField measure={true}>
        Measures
        <Label>
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
      </IngredientField>
      <button
        onClick={() => {
          onButtonClick();
        }}
      >
        Add Ingredient
      </button>
    </>
  );
};

export default Ingredients
