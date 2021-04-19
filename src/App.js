import React from "react";
import Main from "./common/Main/index.js";
import Navigation from "./common/Navigation/index.js";
import Background from "./common/Background/index.js";

function App() {
  return (
    <>
      <Background />
      <Main>
        <Navigation />
      </Main>
    </>
  );
}

export default App;
