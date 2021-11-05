import React, { useState } from "react";
import Section from "../../common/Section";
import {
  Form,
  Legend,
  Label,
  Input,
  IngridientField,
  Textarea,
} from "./styled";
const MyRecipes = () => {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [ingridiens, setIngridiens] = useState("");
  const [measure, setMeasure] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Section form={true}>
      <Form onSubmit={onFormSubmit}>
        <fieldset>
          {" "}
          <Legend>My recipe:</Legend>
          <Label>
            Category
            <Input
              type="text"
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </Label>
          <Label>
            Area
            <Input
              type="text"
              name="area"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </Label>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Label>
          <IngridientField>
            <Label>
              Ingridiens
              <Input
                type="text"
                name="ingridient"
                value={ingridiens}
                onChange={(event) => setIngridiens(event.target.value)}
              />
            </Label>
            <Label>
              Measure
              <Input
                type="text"
                name="measure"
                value={measure}
                onChange={(event) => setMeasure(event.target.value)}
              />
            </Label>
          </IngridientField>
          <Label>
            Description
            <Textarea rows="20" />
          </Label>
        </fieldset>
        <button>Add new recipe</button>
      </Form>
    </Section>
  );
};

export default MyRecipes;
