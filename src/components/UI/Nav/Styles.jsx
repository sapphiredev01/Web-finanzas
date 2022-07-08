import styled from "styled-components";
import { Link } from "react-scroll";
import device from "../../../utils/Variables";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 15vw;
  height: 100vh;
  display: grid;
  place-items: center;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Stepper = styled.ol`
  padding-left: 1.5rem;
  --size: 1rem;
  --spacing: 0.5rem;
  padding-top: 1rem;
`;

export const Title = styled.p`
  font-weight: 700;
  color: var(--black);
  margin-block-start: 0;
  font-size: clamp(0.8rem, 1vw, 1.1rem);
`;

export const StyledLink = styled(Link).attrs(() => ({
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  offset: -70,
}))`
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    margin-left: 0.7rem;
    transform: scale(1.3);
    opacity: 1;
  }
  &.active {
    opacity: 1;
    transform: scale(1.3);
    margin-left: 0.7rem;
  }
`;

export const Step = styled.li`
  display: flex;
  gap: 1rem;
  padding-bottom: 4rem;
  position: relative;
  &:before {
    --size: 1rem;
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: var(--blue);
  }
  &:not(:last-child):after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(1.5rem);
    width: 2px;
    background-color: var(--blue);
    top: calc(var(--size) + var(--spacing));
    transform: translateX(calc(var(--size) / 2));
    bottom: var(--spacing);
  }
`;

export const StyledLinkLogo = styled(Link).attrs(() => ({
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  offset: -70,
}))``;

export const ImageStyled = styled.img`
  width: 75%;
  height: auto;
  margin-bottom: 2rem;
  cursor: pointer;
  @media ${device.laptopL} {
    width: 110%;
  }
`;
