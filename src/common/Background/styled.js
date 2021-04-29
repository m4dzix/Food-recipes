import styled, { css } from "styled-components";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.div`
  height: 100vh;
  transition: 1s ease;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(60%);
  ${(props) =>
    props.imageSmall &&
    css`
      border-left: 5px solid whitesmoke;
      @media (max-width: 420px) {
        display: none;
      }
    `}
`;

export const Title = styled.h1`
  font-size: 150px;
  position: fixed;
  width: 66vw;
  top: 30%;
  margin-left: 70px;
  color: whitesmoke;
  text-shadow: 1px 0px 15px #111;
  letter-spacing: 5px;
  line-height: 1.1;
  @media (max-width: 1024px) {
    font-size: 120px;
  }
  @media (max-width: 823px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
