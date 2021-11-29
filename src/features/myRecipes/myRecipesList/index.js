import React from "react";
import Section from "../../../common/Section";
import { Title, List, Item, Name, Options, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectMyRecipes, removeRecipe } from "../myRecipesSlice";

const MyRecipeList = () => {
  const recipeList = useSelector(selectMyRecipes);
  const dispatch = useDispatch();
  return (
    <Section myRecipe={"true"}>
      <Title>My recipe list</Title>
      <List>
        {recipeList.map(({ name }) => (
          <Item key={name}>
            <Name>{name}</Name>
            <Options>
              <Button>
                Go to recipe
                <span as="img" alt="aria-label">
                  {" "}
                  ➡️{" "}
                </span>
              </Button>
              <Button
                onClick={() => {
                  dispatch(removeRecipe(name));
                }}
              >
                Delete
                <span as="img" alt="aria-label">
                  {" "}
                  🚫{" "}
                </span>
              </Button>
            </Options>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default MyRecipeList;
