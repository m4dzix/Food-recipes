const localStorageKey = "recipe";

export const saveInLocalStorage = (recipe) =>
  localStorage.setItem(localStorageKey, JSON.stringify(recipe));

export const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey) || []);
