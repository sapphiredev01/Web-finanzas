import styled from 'styled-components';

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  margin-top: 2rem;
  padding: 0;
  height: 100%;
  width: auto;
  background-color: #fffeee;
`;

export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 3 / 12;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 1 / 13;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font: Helvetica Neue;
  font-size: 3em;
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