import styled, { css } from "styled-components";

export const Tile = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "ingridiens details"
    "recipe recipe";
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-gap: 20px;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    grid-template-areas:
      "title "
      "details"
      "ingridiens"
      "recipe";
    grid-template-rows: auto minmax(auto, 220px) auto auto auto;
    grid-template-columns: none;
    padding: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.middleMobile}px) {
    grid-template-areas:
      "title "
      "details"
      "ingridiens"
      "recipe";
    grid-template-rows: auto minmax(auto, 80px) auto auto auto;
    grid-template-columns: none;
    padding: 10px;
  }
`;
export const Title = styled.h2`
  grid-area: title;
  justify-self: center;
  font-size: 50px;
  color: teal;
  text-shadow: 0px 0px 2px black;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.middleMobile}px) {
    font-size: 35px;
  }
`;
export const Ingredients = styled.div`
  grid-area: ingridiens;
  padding: 10px;
`;
export const List = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(auto-fill, minmax(auto, 30px));
  grid-gap: 7px;
  font-size: 20px;
  list-style: none;
  text-transform: capitalize;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
    grid-template-rows: repeat(auto-fill, 20px);
  }
  ${({ details }) =>
    details &&
    css`
      grid-area: details;
      font-weight: bold;
      align-items: top;
      font-size: 30px;
      grid-template-rows: repeat(auto-fill, 50px);
      @media (max-width: ${({ theme }) =>
          theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
        grid-template-rows: repeat(auto-fill, 20px);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
        font-size: 15px;
        grid-template-rows: repeat(auto-fill, 20px);
      }
    `};
`;
export const Subtitle = styled.h3`
  margin: 25px 0px;
  color: ${({ theme }) => theme.colors.teal};
  font-size: 25px;
  text-shadow: 0px 0px 0.5px ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    font-size: 15px;
  }
`;
export const Key = styled.dt`
  display: inline;
`;
export const Value = styled.dd`
  display: inline;
  margin-left: 40px;
`;
export const Recipe = styled.div`
  grid-area: recipe;
  font-size: 23px;
  padding: 10px;
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
  }
`;
