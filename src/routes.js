export const toRecipeListByArea = (id) => `/recipe-list-by-area/${id}`;
export const toRecipeListByCategory = (id) => `/recipe-list-by-category/${id}`;
export const toRecipe = (id) => `/recipe/${id}`;
export const toAddRecipe = () => "/toAddRecipe";
export const toMyRecipeList = () => "/myRecipeList";
export const toMyRecipe = ({ id } = { id: ":id" }) => `/myRecipe/${id}`;
export const toHomepage = () => "/";
