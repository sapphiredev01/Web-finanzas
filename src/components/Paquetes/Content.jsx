import styled from "styled-components";

export const Content = styled.div`
  grid-area: 2 / 1 / 7 / 6;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Title = styled.h1`
  font: Helvetica Neue;
  text-align: start;
  color: #034e80;
  letter-spacing: 0px;
  opacity: 1;
  text-transform: uppercase;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 3 / 5;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: blue;
`;

export const Div2 = styled.div`
  grid-area: 3 / 1 / 5 / 5;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: red;
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 5 / 13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
