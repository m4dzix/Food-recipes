import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectHideMenuList, toggleHideMenuList } from "./areasSlice";
import { MenuList, BurgerMenuIcon } from "./styled";

const Navigation = () => {
  const dispatch = useDispatch();
  const isHideMenuList = useSelector(selectHideMenuList);

  return (
    <>
      <BurgerMenuIcon
        onClick={() => dispatch(toggleHideMenuList())}
      ></BurgerMenuIcon>
      <MenuList hideMenuList={!isHideMenuList}></MenuList>
    </>
  );
};

export default Navigation;
