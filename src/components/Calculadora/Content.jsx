import styled from "styled-components";

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 0;
  padding: 0;
  height: 100%;
  margin-left: 2rem;
  margin-bottom: 2rem;
  width: auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin-left: 0;
    margin-bottom: 0;
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 3 / 12;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 1 / 1;
    justify-content: center;
    align-items: center;
  }
`;
export const Title = styled.h1`
  font: Helvetica Neue;
  text-align: start;
  color: #034e80;
  letter-spacing: 0px;
  opacity: 1;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 6 / 1 / 11 / 5;
  background-color: var(--blue);
  padding-left: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    grid-area: 2 / 1 / 2 / 4;
    padding-left: 0;
  }
`;
export const Div2 = styled.div`
  grid-area: 6 / 5 / 11 / 13;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    grid-area: 3 / 1 / 4 / 4;
    padding-left: 0;
  }
`;
