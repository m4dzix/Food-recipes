import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
`;
export const Subheader = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;
export const Text = styled.h3`
  font-size: 20px;
`;
export const Button = styled.button`
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.whitesmoke};
  background-color: ${({ theme }) => theme.colors.raisinBlack};
  font-weight: bold;
  font-size: 15px;
`;
