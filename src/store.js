import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import areasReducer from "./common/Navigation/areasSlice";
import { watchFetchAreas } from "./common/Navigation/areasSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { areas: areasReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watchFetchAreas);

export default store;
