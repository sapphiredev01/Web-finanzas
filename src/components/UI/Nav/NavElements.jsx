import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 1 / 1 / 13 / 2;
  position: fixed;
`;

export const Stepper = styled.ol`
  padding-left: 1.5rem;
  --size: 1rem;
  --spacing: 0.5rem;
  padding-top: 1rem;
`;

export const Title = styled.p`
  font: Helvetica Neue;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 0.8rem;
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
    background-color: black;
  }
  &:not(:last-child):after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(1.5rem);
    width: 2px;
    background-color: black;
    top: calc(var(--size) + var(--spacing));
    transform: translateX(calc(var(--size) / 2));
    bottom: var(--spacing);
  }
`;
