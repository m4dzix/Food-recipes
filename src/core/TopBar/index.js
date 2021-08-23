import React from "react";
import LogoIMG from "../../assets/logo.png";
import { StyledTopBar, Logo } from "./styled";
import { Link } from "react-router-dom";
import { toHomepage } from "../../routes";
import Navigation from "../../common/Navigation/index";

const TopBar = () => {
  return (
    <StyledTopBar>
      <Link to={toHomepage}>
        <Logo src={LogoIMG} />
      </Link>
      <Navigation />
    </StyledTopBar>
  );
};

export default TopBar;
