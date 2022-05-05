import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const Content = styled.div`
  grid-area: 2 / 2 / 13 / 13;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Left = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  padding-bottom: 3rem;

  @media ${device.tablet} {
    grid-area: 3 / 1 / 6 / 5;
   
  }
`;

export const Title = styled.h1`
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
`;

export const Text = styled.div`
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export const Right = styled.div`
  grid-area: 1 / 3 / 6 / 5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    grid-area: 1 / 2 / 3 / 4;
  }
`;

export const Hexagon = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;

  @media ${device.tablet} {
    padding: 0%;
  }
`;
