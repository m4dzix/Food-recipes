import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  margin-top: 20px;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
export const Link = styled.a`
  color: black;
  font-weight: 200;
  margin-right: 100px;
  font-size: 40px;
  text-shadow: 1px 0px 5px whitesmoke;
  transition: 0.5s;
  &:after {
    display: block;
    /* margin-right: 100px; */
    content: "";
    border-bottom: solid 3px #000;
    transform: scaleX(0);
    transition: transform 1.5s ease-in-out;
    transform-origin: 100% 50%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
`;
