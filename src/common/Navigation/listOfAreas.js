import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const ListOfAreas = ({ body }) => {
  return <List>{body}</List>;
};

export default ListOfAreas;
