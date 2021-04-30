import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import areasReducer from "./common/Navigation/areasSlice";
import recipeListReducer from "./features/recipeList/recipeListSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { areas: areasReducer, recipeList: recipeListReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);

export default store;
