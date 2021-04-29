export const getAreas = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const areas = await response.json();
  return areas.meals;
};
