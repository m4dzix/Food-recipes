import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  addMeasure,
  changeIngredientInputValue,
  selectIngredients,
  changeMeasureInputValue,
  selectMeasures,
} from "../myRecipesSlice";
import { Label, Input, Button } from "./styled";
const Ingredients = () => {
  const ingredientsList = useSelector(selectIngredients);
  const measuresList = useSelector(selectMeasures);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(
      addIngredient({
        ingredientValue: "",
        id: ingredientsList.length,
      })
    ),
      dispatch(
        addMeasure({
          measureValue: "",
          id: ingredientsList.length,
        })
      );
  };
  return (
    <>
      <Label ingredient={true}>
        Ingredients
        {ingredientsList.map(({ id }) => (
          <Input
            key={`ing${id}`}
            name="ingredient"
            type="text"
            onChange={(event) =>
              dispatch(changeIngredientInputValue([event.target.value, id]))
            }
          />
        ))}
      </Label>
      <Label measure={true}>
        Measures
        {measuresList.map(({ id }) => (
          <Input
            key={`mea${id}`}
            name="measure"
            type="text"
            onChange={(event) =>
              dispatch(changeMeasureInputValue([event.target.value, id]))
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

export default Ingredients;
