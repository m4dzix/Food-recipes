import { fetchFromApi } from "../../../fetchFromApi";

export const getRecipeListByCategory = (area) =>
  fetchFromApi({
    path: `filter.php?c=${area}`,
  });
