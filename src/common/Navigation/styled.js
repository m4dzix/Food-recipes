import styled, { css } from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular";

export const MenuList = styled.nav`
  width: 30vw;
  height: 100vh;
  background-color: whitesmoke;
  position: fixed;
  z-index: -1;
  right: -30vw;
  top: 0px;
  transition: 1s;
  ${({ hideMenuList }) =>
    hideMenuList &&
    css`
      right: 0px;
    `}
`;
export const BurgerMenuIcon = styled(Menu)`
  position: fixed;
  right: 20px;
  top: 20px;
  color: black;
  box-shadow: 0px 3px 10px #111;
  height: 80px;
  cursor: pointer;
`;
