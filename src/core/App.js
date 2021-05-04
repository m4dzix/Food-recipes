import React from "react";
import { toRecipeList, toRecipe } from "../routes";
import TopBar from "./TopBar/index.js";
import Background from "../common/Background/index";
import RecipeList from "../features/recipeList/index";
import { HashRouter, Switch, Route } from "react-router-dom";
import MealRecipe from "../features/mealRecipe";

function App() {
  return (
    <HashRouter>
      <Background />
      <TopBar />
      <Switch>
        <Route path={toRecipeList(":id")}>
          <RecipeList />
        </Route>
        <Route path={toRecipe(":id")}>
          <MealRecipe />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
