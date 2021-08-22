import styled, { keyframes } from "styled-components";

const rotate = keyframes` 
to {
  transform: rotate(360deg)
}
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
`;
export const Loader = styled.img`
  animation: ${rotate} 1s linear infinite;
`;
export const Subheader = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;
