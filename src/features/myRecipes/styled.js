import styled from "styled-components";

export const Form = styled.form`
  padding: 30px;
  display: grid;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: nowrap;
`;
export const Label = styled.label`
  font-size: 25px;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 10px;
`;
export const Input = styled.input`
  padding: 5px;
  font-size: 20px;
`;
export const Textarea = styled.textarea`
  padding: 5px;
  resize: vertical;
`;
export const Legend = styled.legend`
  font-size: 35px;
  padding: 10px 50px;
  text-align: center;
`;
export const IngridientField = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
