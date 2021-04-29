import styled, { css } from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular";

export const MenuList = styled.nav`
  width: 30vw;
  height: 100vh;
  background-color: #aaa;
  position: fixed;
  z-index: 1;
  right: -30vw;
  top: 0px;
  transition: 1s;
  overflow: scroll;
  ${({ hideMenuList }) =>
    hideMenuList &&
    css`
      right: 0px;
    `}
`;
export const BurgerMenuIcon = styled(Menu)`
  position: fixed;
  z-index: 2;
  right: 20px;
  top: 20px;
  color: black;
  box-shadow: 0px 3px 10px #111;
  height: 80px;
  cursor: pointer;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 40px;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  font-weight: 200;
  margin-top: 20px;
  font-size: 40px;
  color: whitesmoke;
  text-shadow: 1px 0px 15px #111;
  transition: 0.5s ease;

  &:hover {
    font-weight: bold;
  }
`;
export const Link = styled.a`
  text-decoration: none;
`;
