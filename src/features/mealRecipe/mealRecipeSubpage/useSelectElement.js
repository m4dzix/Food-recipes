export const useSelectElements = () => (elements, key) =>
  Object.entries(elements)
    .map((element) => {
      for (let i = 0; i <= 20; i++) {
        if (element[0] === `${key}${i}`) {
          return element;
        }
      }
    })
    .filter((element) => element !== undefined);

export const useShowElementsWithValue = () => (array) =>
  array.filter(([_, value]) => value);
