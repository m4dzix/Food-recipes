export const getRecipeList = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const recipeList = await response.json();
  return recipeList.meals;
};
