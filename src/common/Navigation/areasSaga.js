import { call, put, takeEvery } from "redux-saga/effects";
import { getAreas } from "./fetchFromAPI";
import { fetchAreas, fetchAreasError, fetchAreasSuccess } from "./areasSlice";

function* fetchAreasHandler() {
  try {
    const areas = yield call(getAreas);
    yield put(fetchAreasSuccess(areas));
  } catch (error) {
    yield put(fetchAreasError());
  }
}

export function* watchFetchAreas() {
  yield takeEvery(fetchAreas.type, fetchAreasHandler);
}
