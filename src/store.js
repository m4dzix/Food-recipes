import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import areasReducer from "./common/Navigation/areasSlice";
import recipeListReducerByArea from "./features/recipeListByArea/recipeListByAreaSlice";
import recipeListByCategoryReducer from "./features/recipeListByCategory/recipeListByCategorySlice";
import mealRecipeReducer from "./features/mealRecipe/mealRecipeSlice";
import myRecipeReducer from "./features/myRecipes/myRecipesSlice";
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
