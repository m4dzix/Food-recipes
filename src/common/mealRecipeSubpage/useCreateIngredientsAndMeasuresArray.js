export const useCreateIngredientsAndMeasuresArray =
  () => (ingredients, measures) =>
    Object.entries(
      Object.fromEntries(
        ingredients.map((_, i) => [ingredients[i], measures[i]])
      )
    );
