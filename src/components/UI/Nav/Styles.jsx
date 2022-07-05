import styled from "styled-components";
import { Link } from "react-scroll";
import device from "../../../utils/Variables";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 12vw;
  height: 100vh;
  display: flex;
  align-items: center;

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
  color: #000000;
  opacity: 1;
  display: flex;
  margin-block-start: 0;
  font-size: 0.8rem;
`;

export const StyledLink = styled(Link).attrs(() => ({
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  offset: -70,
}))`
  height: 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid var(--blue);
  }
  &.active {
    border-bottom: 3px solid var(--blue);
    transition: 0.2s ease-in-out;
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

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
`;
