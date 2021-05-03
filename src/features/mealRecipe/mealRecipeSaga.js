import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMealRecipe,
  fetchMealRecipeSuccess,
  fetchMealRecipeError,
} from "./mealRecipeSlice";
import { getMealRecipe } from "./mealRecipeApi";

function* fetchMealRecipeHandler() {
  try {
    const mealRecipe = yield call(getMealRecipe);
    yield put(fetchMealRecipeSuccess(mealRecipe));
  } catch (error) {
    yield put(fetchMealRecipeError);
  }
}

export function* watchFetchMealRecipe() {
  yield takeLatest(fetchMealRecipe.type, fetchMealRecipeHandler);
}
