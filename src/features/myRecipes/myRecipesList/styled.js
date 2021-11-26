import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  text-shadow: 2px 2px 3px black;
  color: teal;
  font-weight: bold;
  background-color: whitesmoke;
  margin-bottom: 0;
  padding: 50px 30px 25px;
`;
export const List = styled.ul`
  margin-top: 0;
  background-color: whitesmoke;
  background-position: fixed;
  list-style: none;
  padding: 25px 30px 50px;
  height: 65vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  font-size: 30px;
  font-weight: bold;
  padding: 15px;
  width: fit-content;
  transition: 0.5s ease;
  padding-bottom: 2px;
  background-image: linear-gradient(teal, teal);
  background-position: left bottom;
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: 0.5s;
  &:hover {
    background-size: 100% 3px;
    font-size: 32px;
  }
`;
