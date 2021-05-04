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
    fetchMealRecipeSuccess: (state, { payload: reply }) => {
      state.status = "success";
      state.mealRecipe = reply[0];
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
