import React from "react";
import { StyledSection } from "./styled";

const Section = ({ children, list, myRecipe }) => (
  <StyledSection list={list} myRecipe={myRecipe}>
    {children}
  </StyledSection>
);
export default Section;
