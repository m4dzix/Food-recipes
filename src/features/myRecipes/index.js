import React, { useState } from "react";
import Section from "../../common/Section";
import { Form, Label, Input, Textarea, Button } from "./styled";
import Ingredients from "./ingrednientsField";
const MyRecipes = () => {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Section form={true}>
      <Form onSubmit={onFormSubmit}>
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
        <Ingredients />
        <Label>
          Description
          <Textarea rows="10" />
        </Label>
        <Button> Add new recipe !</Button>
      </Form>
    </Section>
  );
};

export default MyRecipes;
