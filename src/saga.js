import { all } from "redux-saga/effects";
import { watchFetchAreas } from "./common/Navigation/areasSaga";
import { watchFetchRecipeListByArea } from "./features/recipeListByArea/recipeListByAreaSaga";
import { watchFetchMealRecipe } from "./features/mealRecipe/mealRecipeSaga";
import { watchFetchRecipeListByCategory } from "./features/recipeListByCategory/recipeListByCategorySaga";

export default function* saga() {
  yield all([
    watchFetchAreas(),
    watchFetchRecipeListByArea(),
    watchFetchRecipeListByCategory(),
    watchFetchMealRecipe(),
  ]);
}
