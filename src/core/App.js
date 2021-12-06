import React from "react";
import {
  toRecipeListByArea,
  toRecipeListByCategory,
  toRecipe,
  toAddRecipe,
  toMyRecipeList,
  toMyRecipe,
} from "../routes";
import TopBar from "./TopBar/index.js";
import Background from "../common/Background/index";
import RecipeListByArea from "../features/recipeListByArea/index";
import RecipeListByCategory from "../features/recipeListByCategory/index";
import { HashRouter, Switch, Route } from "react-router-dom";
import MealRecipe from "../features/mealRecipe/index";
import MyRecipes from "../features/myRecipes/addNewRecipeForm";
import MyRecipeList from "../features/myRecipes/myRecipesList";
import MyMealRecipeSubpage from "../common/myMealRecipeSubpage";

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
        <Route path={toAddRecipe()}>
          <MyRecipes />
        </Route>
        <Route path={toMyRecipeList(":id")}>
          <MyRecipeList />
        </Route>
        <Route path={toMyRecipe()}>
          <MyMealRecipeSubpage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
