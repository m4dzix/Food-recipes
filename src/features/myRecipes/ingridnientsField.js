import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngridient, selectIngridients } from "./myRecipesSlice";
import { Label, Input, IngridientField } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

const Field = () => {
  const [ingridient, setIngridient] = useState("");
  const [measure, setMeasure] = useState("");
  const ingridientsList = useSelector(selectIngridients);
  const dispatch = useDispatch();

  const onButtonClick = () =>
    dispatch(
      addIngridient({
        id: nanoid(),
      })
    );

  return (
    <>
      <IngridientField>
        Ingridients
        <Label>
          {ingridientsList.map(({ id }) => (
            <Input
              key={id}
              name="ingridient"
              value={ingridient}
              onChange={(event) => setIngridient(event.target.value)}
            />
          ))}
        </Label>
      </IngridientField>
      <IngridientField measure={true}>
        Measures
        <Label>
          {ingridientsList.map(({ id }) => (
            <Input
              key={id}
              name="measure"
              value={measure}
              onChange={(event) => setMeasure(event.target.value)}
            />
          ))}
        </Label>
      </IngridientField>
      <button
        onClick={() => {
          onButtonClick();
        }}
      >
        Add ingridient
      </button>
    </>
  );
};

export default Field;
