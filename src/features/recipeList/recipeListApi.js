import { fetchFromApi } from "../../fetchFromApi";

export const getRecipeList = (area) =>
  fetchFromApi({
    path: `/filter.php?a=${area}`,
  });
