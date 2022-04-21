import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 7 / 1 / 8 / 6;
`;

export const Stepper = styled.ol`
  display: flex;
  flex-wrap: wrap;
`;

export const Step = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  &:after {
    --size: 1rem;
    content: "";
    position: relative;
    z-index: 1;
    display: block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    margin: auto;
    background: #000;
  }
  &:not(:last-of-type) {
    border-right: #000;
    border-right-width: 1px;
    border-right-style: solid;
  }
`;
