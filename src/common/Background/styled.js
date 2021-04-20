import styled from "styled-components";

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
  transition: 1s;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(60%);
`;
export const ImageSmall = styled.div`
  height: 100vh;
  transition: 1s;
  background-image: url(${(props) => props.backgroundImage});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  border-left: 5px solid whitesmoke;
  filter: brightness(60%); ;
`;

export const Title = styled.h1`
  font-size: 150px;
  position: fixed;
  top: 30%;
  margin-left: 70px;
  color: whitesmoke;
  text-shadow: 1px 0px 15px #111;
  letter-spacing: 5px;
  line-height: 1.1;
`;
