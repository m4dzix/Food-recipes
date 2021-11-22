import { createSlice } from "@reduxjs/toolkit";

const myRecipeSlice = createSlice({
  name: "myRecipe",
  initialState: {
    ingredients: [{ ingredientValue: "", id: 1 }],
    measures: [{ measureValue: "", id: 1 }],
  },
  reducers: {
    addIngredient: ( state , { payload }) => {
      state.ingredients.push(payload);
      state.measures.push(payload);
    },
    changeIngredientInputValue: (ingredients, {payload}) =>{ ingredients.ingredientValue =  payload},
    changeMeasureInputValue: (measures, { payload }) =>{  measures.measureValue = payload}
  },
});

export const { addIngredient, changeIngredientInputValue, addMeasure, changeMeasureInputValue } = myRecipeSlice.actions;
export const selectState = (state) => state.myRecipe;
export const selectIngredients = (state) =>
selectState(state).ingredients;
export const selectMeasures = (state) =>
selectState(state).measures;

export default myRecipeSlice.reducer;
