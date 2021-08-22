import styled from "styled-components";

export const StyledTopBar = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.galleryTransparent};
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 0px;
  }
`;
export const Logo = styled.img`
  width: 250px;
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileLandscape}) and (orientation: landscape) {
    width: 150px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 200px;
    padding: 5px;
  }
`;
