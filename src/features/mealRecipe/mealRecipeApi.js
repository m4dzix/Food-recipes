export const getMealRecipe = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const mealRecipe = await response.json();

  return mealRecipe.meals;
};
