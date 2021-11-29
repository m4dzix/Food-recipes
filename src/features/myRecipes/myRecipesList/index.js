import React from "react";
import Section from "../../../common/Section";
import { Title, List, Item, Name, Options, Button } from "./styled";
import { useSelector } from "react-redux";
import { selectMyRecipes } from "../myRecipesSlice";
const MyRecipeList = () => {
  const recipeList = useSelector(selectMyRecipes);
  return (
    <Section myRecipe={"true"}>
      <Title>My recipe list</Title>
      <List>
        {recipeList.map((recipe) => (
          <Item key={recipe.name}>
            <Name>{recipe.name}</Name>
            <Options>
              <Button>
                Go to recipe
                <span as="img" alt="aria-label">
                  {" "}
                  ➡️{" "}
                </span>
              </Button>
              <Button>
                Delete{" "}
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
