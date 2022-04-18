import styled from "styled-components";

export const Nav = styled.div`
  grid-area: 7 / 1 / 8 / 6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  text-align: center;
  display: block;
  width: 25%;
  text-decoration: none;
  color: ##818181;
  transition: 0.7s;
  &:hover {
    color: #000000;
  }
`;

export const Effect = styled.div`
  width: 80%;
  height: 2px;
  bottom: 30px;
  background: #000000;
  box-shadow: 0 1px 0 white;
  position: absolute;
`;
