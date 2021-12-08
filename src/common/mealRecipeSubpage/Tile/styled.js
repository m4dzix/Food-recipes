import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "image details"
    "ingridiens recipe";
  grid-template-rows: auto minmax(320px, 420px) auto;
  grid-template-columns: minmax(500px, 600px) auto;
  grid-gap: 20px;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  ${({ myRecipe }) =>
    myRecipe &&
    css`
      grid-template-areas:
        "title title"
        "ingridiens details"
        "recipe recipe";
      grid-template-rows: auto;
      grid-template-columns: auto;
    `}
  @media (max-width: 430px) {
    grid-template-areas:
      "title "
      "image"
      "details"
      "ingridiens"
      "recipe";
    grid-template-rows: auto minmax(auto, 320px) auto auto auto;
    grid-template-columns: none;
    padding: 10px;
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    grid-template-areas:
      "title "
      "image"
      "details"
      "ingridiens"
      "recipe";
    grid-template-rows: auto minmax(auto, 220px) auto auto auto;
    grid-template-columns: none;
    padding: 10px;
    ${({ MyRecipe }) =>
      MyRecipe &&
      css`
        grid-template-rows: auto minmax(auto, 80px) auto auto auto;
      `}
  }
`;
export const Title = styled.h2`
  grid-area: title;
  justify-self: center;
  font-size: 50px;
  color: teal;
  text-shadow: 0px 0px 1px black;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.middleMobile}px) {
    font-size: 35px;
  }
`;
export const Image = styled.div`
  grid-area: image;
  max-width: 600px;
  max-height: 420px;
  background: url("${({ url }) => url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}px) {
    font-size: 15px;
    grid-template-rows: repeat(auto-fill, 20px);
  }
  ${({ details }) =>
    details &&
    css`
      grid-area: details;
      font-size: 30px;
      font-weight: bold;
      align-items: top;
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
