import styled from "styled-components";

const size = {
  tablet: "768px"
};

const device = {
  tablet: `(max-width: ${size.tablet})`
};

export const Content = styled.div`
  grid-area: 2 / 2 / 13 / 13;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media ${device.tablet} {
    margin-bottom: 6rem;
    grid-area: 2 / 1 / 13 / 13;
  }
`;

export const Left = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  padding-left: 6rem;

  @media ${device.tablet} {
    grid-area: 5 / 1 / 10 / 13;
    padding: 0;
    width: 90%;
    margin: 0 auto;
    padding-left: 0%;
  }

  @media (max-width: 620px) {
    grid-area: 4 / 1 / 6 / 13;
    padding-top: 7rem;
  }

  @media (max-width: 500px) {
    grid-area: 3 / 1 / 5 / 13;
    padding-top: 12rem;
  }
`;

export const Title = styled.h1`
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
  @media ${device.tablet} {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const Text = styled.div`
  font-weight: bold;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  @media ${device.tablet} {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Right = styled.div`
  grid-area: 1 / 3 / 6 / 6;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    grid-area: 1 / 1 / 5 / 5;
  }
`;

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  @media ${device.tablet} {
    padding: 0.8rem;
    padding-top: 0;
    margin-right: -30%; 
  }
`;
