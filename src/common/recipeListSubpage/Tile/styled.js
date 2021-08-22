import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  display: grid;
  grid-gap: 16px;
  grid-template-rows: 334px auto;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: 0.5s;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    grid-template-rows: 150px auto;
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) and (orientation: portrait) {
    grid-template-rows: 150px auto;
    padding: 10px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
export const Image = styled.div`
  border-radius: 5px;
  background: url("${({ url }) => url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Title = styled.header`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}px) and (orientation: landscape) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) and (orientation: portrait) {
    font-size: 15px;
  }
`;
