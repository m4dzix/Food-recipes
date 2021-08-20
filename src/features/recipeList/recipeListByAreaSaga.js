import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRecipeListByArea,
  fetchRecipeListByAreaSuccess,
  fetchRecipeListByAreaError,
} from "./recipeListByAreaSlice";
import { getRecipeListByArea } from "./recipeListByAreaApi";

function* fetchRecipeListByAreaHandler({ payload: area }) {
  try {
    const recipeList = yield call(getRecipeListByArea, area);
    yield put(fetchRecipeListByAreaSuccess(recipeList));
  } catch (error) {
    yield put(fetchRecipeListByAreaError);
  }
}

export function* watchFetchRecipeListByArea() {
  yield takeLatest(fetchRecipeListByArea.type, fetchRecipeListByAreaHandler);
}
