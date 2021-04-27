import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-top: 20px;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 8%;
  height: 6%;
`;
export const Item = styled.li`
  position: relative;
  color: black;
  font-weight: 200;
  margin-right: 100px;
  font-size: 40px;
  text-shadow: 1px 0px 5px whitesmoke;
  transition: 0.5s;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: whitesmoke;
    transition: width 0.5s ease;
    -webkit-transition: width 0.5s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    background: whitesmoke;
  }
`;
export const Link = styled.a`
  text-decoration: none;
`;
