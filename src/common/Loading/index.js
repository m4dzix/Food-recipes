import React from "react";
import { Wrapper, Subheader } from "./styled";
import LoaderIcon from "../../assets/loader.svg";

const Loader = () => (
  <Wrapper>
    <img src={LoaderIcon} alt="Loader" />
    <Subheader>Loading...</Subheader>
  </Wrapper>
);

export default Loader;
