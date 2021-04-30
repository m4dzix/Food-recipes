import styled from "styled-components";

export const Wrapper = styled.article`
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  background-color: whitesmoke;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: 334px auto;
  height: 100%;
  @media (max-width: 812px) and (orientation: landscape) {
    grid-template-rows: 234px auto;
  }
`;
export const Image = styled.div`
  border-radius: 5px;
  background-color: silver;
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
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 30px;
  }
`;
