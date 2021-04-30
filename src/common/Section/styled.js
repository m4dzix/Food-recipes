import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-template-rows: auto 1fr;
  grid-gap: 24px;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  }
  @media (max-width: 400px) {
    padding: 30px;
  }
`;
