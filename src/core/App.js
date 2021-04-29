import React from "react";
import { Main } from "../common/Main/index.js";
import TopBar from "./TopBar/index.js";
import Background from "../common/Background/index";

function App() {
  return (
    <>
      <Background />
      <Main>
        <TopBar />
      </Main>
    </>
  );
}

export default App;
