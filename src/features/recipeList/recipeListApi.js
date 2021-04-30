export const getRecipeList = async (area) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const recipeList = await response.json();
  return recipeList.meals;
};
