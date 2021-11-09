import styled, { css } from "styled-components";

export const Form = styled.form`
  padding: 30px;
  display: grid;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
`;
export const Label = styled.label`
  font-size: 25px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const Input = styled.input`
  padding: 5px;
  font-size: 20px;
`;
export const Textarea = styled.textarea`
  padding: 5px;
  resize: vertical;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const IngridientField = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  ${({ measure }) =>
    measure &&
    css`
      grid-column-start: 2;
      grid-column-end: 3;
    `}
`;
