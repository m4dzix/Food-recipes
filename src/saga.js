import { all } from "redux-saga/effects";
import { watchFetchAreas } from "./common/Navigation/areasSaga";
import { watchFetchRecipeList } from "./features/recipeList/recipeListSaga";
import { watchFetchMealRecipe } from "./features/mealRecipe/mealRecipeSaga";

export default function* saga() {
  yield all([
    watchFetchAreas(),
    watchFetchRecipeList(),
    watchFetchMealRecipe(),
  ]);
}
