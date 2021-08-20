import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRecipeListByCategory,
  fetchRecipeListByCategorySuccess,
  fetchRecipeListByCategoryError,
} from "./recipeListByCategorySlice";
import { getRecipeListByCategory } from "./recipeListByCategoryApi";

function* fetchRecipeListByCategoryHandler({ payload: area }) {
  console.log(area);
  try {
    const recipeListByCategory = yield call(getRecipeListByCategory, area);
    yield put(fetchRecipeListByCategorySuccess(recipeListByCategory));
  } catch (error) {
    yield put(fetchRecipeListByCategoryError);
  }
}

export function* watchFetchRecipeListByCategory() {
  yield takeLatest(
    fetchRecipeListByCategory.type,
    fetchRecipeListByCategoryHandler
  );
}
