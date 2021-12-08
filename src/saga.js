import { all } from "redux-saga/effects";
import { watchFetchAreas } from "./common/Navigation/areasSaga";
import { watchFetchRecipeListByArea } from "./features/apiRecipes/recipeListByArea/recipeListByAreaSaga";
import { watchFetchMealRecipe } from "./features/apiRecipes/mealRecipe/mealRecipeSaga";
import { watchFetchRecipeListByCategory } from "./features/apiRecipes/recipeListByCategory/recipeListByCategorySaga";
import { recipeSaga } from "./features/myRecipes/myRecipeList/myRecipeListSaga";
export default function* saga() {
  yield all([
    watchFetchAreas(),
    watchFetchRecipeListByArea(),
    watchFetchRecipeListByCategory(),
    watchFetchMealRecipe(),
    recipeSaga(),
  ]);
}
