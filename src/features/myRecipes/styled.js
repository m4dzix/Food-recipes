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
  color: teal;
  font-weight: bold;
  text-shadow: 0.3px 0.3px #222;
  font-size: 25px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  ${({ ingredient }) =>
    ingredient &&
    css`
      grid-column-start: 1;
      grid-column-end: 2;
    `}
  ${({ measure }) =>
    measure &&
    css`
      grid-column-start: 2;
      grid-column-end: 3;
    `}
`;
export const Input = styled.input`
  padding: 5px;
  font-size: 20px;
  margin: 5px;
  border: 2px solid #111;
  border-radius: 5px;
`;
export const Textarea = styled.textarea`
  padding: 5px;
  margin: 5px;
  resize: vertical;
  font-size: 20px;
  grid-column-start: 1;
  grid-column-end: 3;
  border: 2px solid #111;
  border-radius: 5px;
`;
export const Button = styled.button`
  border: 3px solid #111;
  padding: 5px 15px;
  justify-self: end;
  color: white;
  background-color: teal;
  grid-column-start: 2;
  font-size: 20px;
  margin-right: 15px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
