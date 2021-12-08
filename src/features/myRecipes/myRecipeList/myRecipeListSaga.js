import { call, select, takeEvery } from "redux-saga/effects";
import { selectMyRecipes } from "./myRecipeListSlice";
import { saveInLocalStorage } from "./saveInLocalStorage";

function* localStorageHandler() {
  const recipe = yield select(selectMyRecipes);
  yield call(saveInLocalStorage, recipe);
}

export function* recipeSaga() {
  yield takeEvery("*", localStorageHandler);
}
