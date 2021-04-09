import styled from "styled-components";
import italyLandscape from "../../assets/italyLandscape.jpg";
import italyFood from "../../assets/italyFood.jpg";

export const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
`;
export const ImageBig = styled.div`
  height: 100vh;
  background-image: url(${italyFood});
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(60%);
`;
export const ImageSmall = styled.div`
  height: 100vh;
  background-image: url(${italyLandscape});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(60%);
`;
