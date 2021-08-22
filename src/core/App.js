import React from "react";
import {
  toRecipeListByArea,
  toRecipeListByCategory,
  toRecipe,
} from "../routes";
import TopBar from "./TopBar/index.js";
import Background from "../common/Background/index";
import RecipeListByArea from "../features/recipeListByArea/index";
import RecipeListByCategory from "../features/recipeListByCategory/index";
import { HashRouter, Switch, Route } from "react-router-dom";
import MealRecipe from "../features/mealRecipe";

function App() {
  return (
    <HashRouter>
      <Background />
      <TopBar />
      <Switch>
        <Route path={toRecipeListByArea(":id")}>
          <RecipeListByArea />
        </Route>
        <Route path={toRecipeListByCategory(":id")}>
          <RecipeListByCategory />
        </Route>
        <Route path={toRecipe(":id")}>
          <MealRecipe />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
