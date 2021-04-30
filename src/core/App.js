import React from "react";
import { Main } from "../common/Main/index.js";
// import TopBar from "./TopBar/index.js";
// import Background from "../common/Background/index";
import Section from "../common/Section/index";
import Tile from "../common/Tile/index";

function App() {
  return (
    <>
      <Main>
        <Section>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
        </Section>
      </Main>
    </>
  );
}

export default App;
