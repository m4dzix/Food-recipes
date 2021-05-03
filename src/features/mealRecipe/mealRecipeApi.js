export const getMealRecipe = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const mealRecipe = await response.json();

  return mealRecipe.meals;
};
