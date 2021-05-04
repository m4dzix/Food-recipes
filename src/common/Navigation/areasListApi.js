import { fetchFromApi } from "../../fetchFromApi";

export const getAreas = () => fetchFromApi({ path: `/list.php?a=list` });
