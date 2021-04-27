import { useState, useEffect } from "react";
export const useAreaRecipes = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getApi = () => {
      const areas = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

      fetch(areas)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((areas) => {
          const ratesAPI = areas.meals;
          setData({
            meals: ratesAPI,
          });
        })
        .catch((error) => console.error(error));
    };
    setTimeout(getApi, 0);
  }, []);
  return data;
};
