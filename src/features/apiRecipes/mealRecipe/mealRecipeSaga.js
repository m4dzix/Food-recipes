import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMealRecipe,
  fetchMealRecipeSuccess,
  fetchMealRecipeError,
} from "./mealRecipeSlice";
import { getMealRecipe } from "./mealRecipeApi";

function* fetchMealRecipeHandler({ payload: id }) {
  try {
    const mealRecipe = yield call(getMealRecipe, id);
    yield put(fetchMealRecipeSuccess(mealRecipe));
  } catch (error) {
    yield put(fetchMealRecipeError);
  }
}

export function* watchFetchMealRecipe() {
  yield takeLatest(fetchMealRecipe.type, fetchMealRecipeHandler);
}
