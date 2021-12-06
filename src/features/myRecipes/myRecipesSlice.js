import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "./saveInLocalStorage";

const myRecipeSlice = createSlice({
  name: "myRecipe",
  initialState: {
    recipes: getFromLocalStorage(),
    ingredients: [{ ingredientValue: "", id: 0 }],
    measures: [{ measureValue: "", id: 0 }],
  },
  reducers: {
    addRecipe: (state, { payload }) => {
      state.recipes.push(payload);
    },
    addIngredient: (state, { payload }) => {
      state.ingredients.push(payload);
    },
    addMeasure: (state, { payload }) => {
      state.measures.push(payload);
    },
    changeIngredientInputValue: ({ ingredients }, { payload }) => {
      ingredients[payload[1]].ingredientValue = payload[0];
    },
    changeMeasureInputValue: ({ measures }, { payload }) => {
      measures[payload[1]].measureValue = payload[0];
    },
    clearIngredients: (state) => {
      state.ingredients = [{ ingredientValue: "", id: 0 }];
    },
    clearMeasures: (state) => {
      state.measures = [{ measureValue: "", id: 0 }];
    },
    removeRecipe: ({ recipes }, { payload }) => {
      const index = recipes.findIndex((recipe) => recipe.name === payload);
      recipes.splice(index, 1);
    },
  },
});

export const {
  addRecipe,
  addIngredient,
  changeIngredientInputValue,
  addMeasure,
  changeMeasureInputValue,
  clearIngredients,
  clearMeasures,
  removeRecipe,
} = myRecipeSlice.actions;
export const selectState = (state) => state.myRecipe;
export const selectMyRecipes = (state) => selectState(state).recipes;
export const selectIngredients = (state) => selectState(state).ingredients;
export const selectMeasures = (state) => selectState(state).measures;

export default myRecipeSlice.reducer;
