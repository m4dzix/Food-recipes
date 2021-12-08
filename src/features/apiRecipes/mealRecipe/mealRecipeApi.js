import { fetchFromApi } from "../../../fetchFromApi";

export const getMealRecipe = (id) =>
  fetchFromApi({
    path: `/lookup.php?i=${id}`,
  });
