import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideMenuList,
  toggleHideMenuList,
  fetchAreas,
  selectAreas,
  selectAreasStatus,
} from "./areasSlice";
import { Link } from "react-router-dom";
import {
  MenuList,
  BurgerMenuIcon,
  List,
  Item,
  StyledNavLink,
  AddRecipeIcon,
} from "./styled";
import { toRecipeListByArea, toAddRecipe, toMyRecipeList } from "../../routes";
import Error from "../Error";

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
      <Link to={toAddRecipe()}>
        <AddRecipeIcon addRecipe={true}></AddRecipeIcon>
      </Link>
      <MenuList hideMenuList={isHideMenuList}>
        {areasState === "success" ? (
          <List>
            <StyledNavLink to={toMyRecipeList()}>
              <Item>My recipes</Item>
            </StyledNavLink>
            {areas.map((area) => (
              <StyledNavLink
                activeClassName="active"
                onClick={() => {
                  dispatch(toggleHideMenuList());
                }}
                key={area.strArea}
                href=""
                to={toRecipeListByArea(area.strArea)}
              >
                <Item>{area.strArea}</Item>
              </StyledNavLink>
            ))}
          </List>
        ) : (
          <Error />
        )}
      </MenuList>
    </>
  );
};

export default Navigation;
