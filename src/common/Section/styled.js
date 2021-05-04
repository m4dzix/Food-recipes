import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  background-color: #1118;
  padding: 50px;
  min-height: 100vh;
  ${({ list }) =>
    list &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
      grid-template-rows: auto 1fr;
      grid-gap: 24px;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
      }
    `}
`;
