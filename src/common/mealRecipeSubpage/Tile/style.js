import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "title "
    "image details"
    "ingridiens recipe";
  grid-template-rows: auto 420px auto;
  grid-template-columns: 600px auto;
  grid-gap: 20px;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  background-color: whitesmoke;
`;
export const Title = styled.h2`
  grid-area: "title";
  justify-self: center;
  font-size: 50px;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const Image = styled.div`
  grid-area: "image";
  background: url("${({ url }) => url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const List = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(auto-fill, minmax(auto, 30px));
  grid-gap: 7px;
  font-size: 20px;
  grid-area: "ingridiens";
  list-style: none;
  text-transform: capitalize;
  ${({ details }) =>
    details &&
    css`
      grid-area: "details";
      font-size: 30px;
      font-weight: bold;
      align-items: top;
      grid-template-rows: repeat(auto-fill, 50px);
    `};
`;
export const Key = styled.dt`
  display: inline;
`;
export const Value = styled.dd`
  display: inline;
`;
export const Recipe = styled.div`
  grid-area: "recipe";
  font-size: 23px;
  padding: 10px;
  text-align: justify;
`;
