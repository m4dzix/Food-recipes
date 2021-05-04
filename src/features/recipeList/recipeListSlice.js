import { createSlice } from "@reduxjs/toolkit";

const recipeListSlice = createSlice({
  name: "recipeList",
  initialState: {
    status: "initial",
  },
  reducers: {
    fetchRecipeList: () => ({ status: "loading" }),
    fetchRecipeListSuccess: (state, { payload: reply }) => {
      state.status = "success";
      state.recipeList = reply;
    },
    fetchRecipeListError: () => ({
      status: "error",
    }),
  },
});

export const {
  fetchRecipeList,
  fetchRecipeListSuccess,
  fetchRecipeListError,
} = recipeListSlice.actions;

export const selectRecipeListState = (state) => state.recipeList;
export const selectRecipeList = (state) =>
  selectRecipeListState(state).recipeList;
export const selectRecipeListStatus = (state) =>
  selectRecipeListState(state).status;

export default recipeListSlice.reducer;
