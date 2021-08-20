import { fetchFromApi } from "../../fetchFromApi";

export const getRecipeListByArea = (area) =>
  fetchFromApi({
    path: `/filter.php?a=${area}`,
  });
