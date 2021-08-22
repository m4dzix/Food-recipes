import styled, { css } from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const MenuList = styled.section`
  width: 30vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  filter: sepia(100%);
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
  @media (max-width: ${({ theme }) =>
    theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    width: 100vw;
    right: -100vw;
    ${({ hideMenuList }) =>
      hideMenuList &&
      css`
        right: 0px;
      `}
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
    width: 100vw;
    right: -100vw;
    ${({ hideMenuList }) =>
      hideMenuList &&
      css`
        right: 0px;
      `}
  }
`;
export const BurgerMenuIcon = styled(Menu)`
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 20px;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0px 3px 10px #111;
  height: 50px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}px) {
    height: 30px;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px;
  list-style: none;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Item = styled.li`
  position: relative;
  font-weight: 200;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 500;
  transition: 0.5s ease;
  opacity: 1;
  &:hover {
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    font-size: 25px;
  }
`;
export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  &.${activeClassName} {
    text-decoration: underline;
  }
`;
