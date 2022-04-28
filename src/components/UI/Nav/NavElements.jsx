import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: 12 / 1 / 13 / 13;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const Stepper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0;
  margin: 0;
`;

export const Title = styled.p`
  font: Helvetica Neue;
  font-weight: 700;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: .8rem;
`;

export const Step = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  &:after {
    --size: .5rem;
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
`;

export const Line = styled.div`
  position: absolute;
  height: 2px;
  width: 84%;
  background: #000;
  bottom: 2px;
  left: 8%;
`; 	  

