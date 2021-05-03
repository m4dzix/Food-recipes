import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import areasReducer from "./common/Navigation/areasSlice";
import recipeListReducer from "./features/recipeList/recipeListSlice";
import mealRecipeReducer from "./features/mealRecipe/mealRecipeSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    areas: areasReducer,
    recipeList: recipeListReducer,
    mealRecipe: mealRecipeReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);

export default store;
