import { buildQueryString } from "./buildQueryString";
const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const fetchFromApi = async ({ path, parameters }) => {
  const allParameters = {
    ...(parameters || {}),
  };
  const response = await fetch(
    `${API_URL}${path}${buildQueryString(allParameters)}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const reply = await response.json();
  return reply.meals;
};
