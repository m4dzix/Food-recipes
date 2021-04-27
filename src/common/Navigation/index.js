import React from "react";
import LogoIMG from "../../assets/logo.png";
import ListOfAreas from "./listOfAreas";
import { Nav, Item, Link, Logo } from "./styled";
import { useAreaRecipes } from "../../fetchFromAPI";

const Navigation = () => {
  const areas = useAreaRecipes().meals;

  return (
    <Nav>
      <Logo src={LogoIMG}></Logo>
      <ListOfAreas
        body={
          !!areas
            ? areas.map((area) => {
                return (
                  <Item key={area.strCategory}>
                    <Link>{area.strCategory}</Link>
                  </Item>
                );
              })
            : false
        }
      ></ListOfAreas>
    </Nav>
  );
};

export default Navigation;
