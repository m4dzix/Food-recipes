import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  background-color: #1118;
  padding: 50px;
  @media (max-width: 400px) {
    padding: 10px;
  }
  ${({ list }) =>
    list &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(324px, 1fr));
      grid-gap: 24px;
      align-items: center;
      justify-content: center;
      @media (max-width: 830px) and (orientation: landscape) {
        grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      }
      @media (max-width: 430px) and (orientation: portrait) {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        padding: 10px;
      }
    `}
`;
