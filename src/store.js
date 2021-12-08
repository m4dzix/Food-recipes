import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import areasReducer from "./common/Navigation/areasSlice";
import recipeListReducerByArea from "./features/apiRecipes/recipeListByArea/recipeListByAreaSlice";
import recipeListByCategoryReducer from "./features/apiRecipes/recipeListByCategory/recipeListByCategorySlice";
import mealRecipeReducer from "./features/apiRecipes/mealRecipe/mealRecipeSlice";
import myRecipeReducer from "./features/myRecipes/myRecipeList/myRecipeListSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    areas: areasReducer,
    recipeListByArea: recipeListReducerByArea,
    mealRecipe: mealRecipeReducer,
    recipeListByCategory: recipeListByCategoryReducer,
    myRecipe: myRecipeReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);

export default store;
