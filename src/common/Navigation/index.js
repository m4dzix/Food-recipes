import React from "react";
import LogoIMG from "../../assets/logo.png";
import ListOfAreas from "./listOfAreas";
import { Nav, Logo } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <Logo src={LogoIMG}></Logo>
      <ListOfAreas body={""}></ListOfAreas>
    </Nav>
  );
};

export default Navigation;
