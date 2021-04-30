import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchRecipeList,
  fetchRecipeListSuccess,
  fetchRecipeListError,
} from "./recipeListSlice";
import { getRecipeList } from "./recipeListApi";

function* fetchRecipeListHandler({ payload: area }) {
  try {
    const recipeList = yield call(getRecipeList, area);
    yield put(fetchRecipeListSuccess(recipeList));
  } catch (error) {
    yield put(fetchRecipeListError);
  }
}

export function* watchFetchRecipeList() {
  yield takeLatest(fetchRecipeList.type, fetchRecipeListHandler);
}
