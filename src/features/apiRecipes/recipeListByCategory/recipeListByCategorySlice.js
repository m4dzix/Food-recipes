import { createSlice } from "@reduxjs/toolkit";

const recipeListByCategorySlice = createSlice({
  name: "recipeListByCategory",
  initialState: {
    status: "initial",
  },
  reducers: {
    fetchRecipeListByCategory: () => ({ status: "loading" }),
    fetchRecipeListByCategorySuccess: (state, { payload: reply }) => {
      state.status = "success";
      state.recipeListByCategory = reply;
    },
    fetchrecipeListByCategoryError: () => ({
      status: "error",
    }),
  },
});

export const {
  fetchRecipeListByCategory,
  fetchRecipeListByCategorySuccess,
  fetchRecipeListByCategoryError,
} = recipeListByCategorySlice.actions;

export const selectRecipeListByCategoryState = (state) =>
  state.recipeListByCategory;
export const selectRecipeListByCategory = (state) =>
  selectRecipeListByCategoryState(state).recipeListByCategory;
export const selectRecipeListByCategoryStatus = (state) =>
  selectRecipeListByCategoryState(state).status;

export default recipeListByCategorySlice.reducer;
