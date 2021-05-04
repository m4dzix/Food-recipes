import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideMenuList,
  toggleHideMenuList,
  fetchAreas,
  selectAreas,
  selectAreasStatus,
} from "./areasSlice";
import { MenuList, BurgerMenuIcon, List, Item, StyledNavLink } from "./styled";
import { toRecipeList } from "../../routes";

const Navigation = () => {
  const dispatch = useDispatch();
  const isHideMenuList = useSelector(selectHideMenuList);
  const areas = useSelector(selectAreas);
  const areasState = useSelector(selectAreasStatus);

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  return (
    <>
      <BurgerMenuIcon
        onClick={() => {
          dispatch(toggleHideMenuList());
        }}
      ></BurgerMenuIcon>
      <MenuList hideMenuList={isHideMenuList}>
        {areasState === "success" ? (
          <List>
            {areas.map((area) => (
              <StyledNavLink
                activeClassName="active"
                onClick={() => {
                  dispatch(toggleHideMenuList());
                }}
                key={area.strArea}
                href=""
                to={toRecipeList(area.strArea)}
              >
                <Item>{area.strArea}</Item>
              </StyledNavLink>
            ))}
          </List>
        ) : (
          <div></div>
        )}
      </MenuList>
    </>
  );
};

export default Navigation;
