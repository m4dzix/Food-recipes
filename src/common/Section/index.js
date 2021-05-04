import React from "react";
import { StyledSection } from "./styled";

const Section = ({ children, list }) => (
  <StyledSection list={list}> {children}</StyledSection>
);

export default Section;
