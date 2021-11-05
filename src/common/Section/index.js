import React from "react";
import { StyledSection } from "./styled";

const Section = ({ children, list, form }) => (
  <StyledSection list={list} form={form}>
    {children}
  </StyledSection>
);
export default Section;
