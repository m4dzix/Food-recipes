import styled, { css } from "styled-components";

export const Section = styled.section`
  background-color: #0009;
  height: 100vh;
  padding: 40px;
`;
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
  background-position: cover;
  background-size: center;
  background-repeat: no-repeat;
`;
export const List = styled.ul`
  grid-area: "details";
  font-size: 40px;
  font-weight: bold;
  list-style: none;
  text-transform: capitalize;
  ${({ ingredients }) =>
    ingredients &&
    css`
      font-size: 20px;
      font-weight: normal;
    `}
`;
export const Item = styled.li`
  padding: 7px;
`;
export const Recipe = styled.div`
  grid-area: "recipe";
  font-size: 20px;
`;
