import { createSlice } from "@reduxjs/toolkit";

const mealRecipeSlice = createSlice({
  name: "mealRecipe",
  initialState: {
    status: "initial",
  },
  reducers: {
    fetchMealRecipe: () => ({
      status: "loading",
    }),
    fetchMealRecipeSuccess: (state, { payload: mealRecipe }) => {
      state.status = "success";
      state.mealRecipe = mealRecipe;
    },
    fetchMealRecipeError: () => ({
      status: "error",
    }),
  },
});

export const {
  fetchMealRecipe,
  fetchMealRecipeSuccess,
  fetchMealRecipeError,
} = mealRecipeSlice.actions;

export const selectMealRecipeState = (state) => state.mealRecipe;
export const selectMealRecipe = (state) =>
  selectMealRecipeState(state).mealRecipe;
export const selectMealRecipeStatus = (state) =>
  selectMealRecipeState(state).status;

export default mealRecipeSlice.reducer;
