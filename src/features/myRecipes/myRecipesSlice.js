import { createSlice } from "@reduxjs/toolkit";

const myRecipeSlice = createSlice({
  name: "myRecipe",
  initialState: {
    ingridients: [{ value: "", id: 1 }],
  },
  reducers: {
    addIngridient: ({ ingridients }, { payload }) => {
      ingridients.push(payload);
    },
  },
});

export const { addIngridient } = myRecipeSlice.actions;
export const selectIngridientsState = (state) => state.myRecipe;
export const selectIngridients = (state) =>
  selectIngridientsState(state).ingridients;

export default myRecipeSlice.reducer;
