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
import RecipeListByArea from "../features/apiRecipes/recipeListByArea/index";
import RecipeListByCategory from "../features/apiRecipes/recipeListByCategory/index";
import { HashRouter, Switch, Route } from "react-router-dom";
import MealRecipe from "../features/apiRecipes/mealRecipe/index";
import MyRecipes from "../features/myRecipes/myRecipeList/addNewRecipeForm";
import MyRecipeList from "../features/myRecipes/myRecipeList";
import MyMealRecipe from "../features/myRecipes/index";

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
          <MyMealRecipe />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
