import React from "react";
import { Main } from "../common/Main/index.js";
import TopBar from "./TopBar/index.js";
import Background from "../common/Background/index";
import RecipeList from "../features/recipeList/index";

function App() {
  return (
    <>
      <Background />
      <Main>
        <TopBar />
        <RecipeList />
      </Main>
    </>
  );
}

export default App;
