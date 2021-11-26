import { call, select, takeEvery } from "redux-saga/effects";
import { selectMyRecipes } from "./myRecipesSlice";
import { saveInLocalStorage } from "./saveInLocalStorage";

function* localStorageHandler() {
  const recipe = yield select(selectMyRecipes);
  yield call(saveInLocalStorage, recipe);
}

export function* recipeSaga() {
  yield takeEvery("*", localStorageHandler);
}
