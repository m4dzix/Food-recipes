import { createSlice } from "@reduxjs/toolkit";

const recipeListByAreaSlice = createSlice({
  name: "recipeListByArea",
  initialState: {
    status: "initial",
  },
  reducers: {
    fetchRecipeListByArea: () => ({ status: "loading" }),
    fetchRecipeListByAreaSuccess: (state, { payload: reply }) => {
      state.status = "success";
      state.recipeListByArea = reply;
    },
    fetchRecipeListByAreaError: () => ({
      status: "error",
    }),
  },
});

export const {
  fetchRecipeListByArea,
  fetchRecipeListByAreaSuccess,
  fetchRecipeListByAreaError,
} = recipeListByAreaSlice.actions;

export const selectRecipeListByAreaState = (state) => state.recipeListByArea;
export const selectRecipeListByArea = (state) =>
  selectRecipeListByAreaState(state).recipeListByArea;
export const selectRecipeListByAreaStatus = (state) =>
  selectRecipeListByAreaState(state).status;

export default recipeListByAreaSlice.reducer;
