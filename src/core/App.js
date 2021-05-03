import React from "react";
import { toRecipeList } from "../routes";
import TopBar from "./TopBar/index.js";
import Background from "../common/Background/index";
import RecipeList from "../features/recipeList/index";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Background />
      <TopBar />
      <Switch>
        <Route path={toRecipeList(":id")}>
          <RecipeList />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
