import React from "react";
import LogoIMG from "../../assets/logo.png";
import { StyledTopBar, Logo } from "./styled";
import Navigation from "../Navigation/index";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Logo src={LogoIMG} />
      <Navigation />
    </StyledTopBar>
  );
};

export default TopBar;
