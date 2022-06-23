import styled from "styled-components";
import { Link } from "react-scroll";

export const MenuBtn = styled.input`
  cursor: pointer;
  align-self: flex-start;
  color: #000000;
  margin-left: 2rem;
  display: none;
`;

export const MenuBtnImg = styled.label`
  font-size: 2.5rem;
  cursor: pointer;
  color: #000000;
  margin-left: 1rem;
  position: absolute;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  position: fixed;
  margin-top: -150%;
  background: var(--blue);
  margin-left: ${(props) => (props.inactive ? "0" : "-200%")};
  transition: all 0.5s;
  border-radius: 0px 30px 30px 0px;
`;

export const Lista = styled.ul`
  list-style: none;
  margin: 1rem;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ListaItem = styled.li`
  border-top: 1px solid #fff;
  padding: 0.4rem;
`;

export const TitleR = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  opacity: 1;
  display: flex;
  margin-block-start: 0;
`;

export const StyledLinkR = styled(Link).attrs(() => ({
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  offset: -70,
}))`
  height: 15px;
  display: block;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
  }
`;
