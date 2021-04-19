import React from "react";
import LogoIMG from "../../assets/logo.png";
import { Nav, List, Link, Logo } from "./styled";
const Navigation = () => (
  <Nav>
    <Logo src={LogoIMG}></Logo>
    <List>
      <li>
        <Link>Itaian</Link>
      </li>
      <li>
        <Link>Mexico</Link>
      </li>
      <li>
        <Link>Asia</Link>
      </li>
      <li>
        <Link>Chinese</Link>
      </li>
    </List>
  </Nav>
);

export default Navigation;
