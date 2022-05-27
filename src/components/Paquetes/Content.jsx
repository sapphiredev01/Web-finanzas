import styled from "styled-components";
import Img from "../../images/business.jpg";

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
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  height: 100%;
  margin-top: 3rem;
  margin-left: 2rem;
  width: auto;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 11 / 13;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 0;
    width: 100%;
    place-items: center;
  }
`;

export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 3 / 13;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
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
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const Div1 = styled.div`
  grid-area: 3 / 1 / 7 / 6;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;

  @media ${device.tablet} {
    grid-area: 3 / 1 / 7 / 13;
    padding-left: 0;
    padding: 0.8rem;
    padding-top: 0;
    margin: 2rem;
  }
`;

export const Div2 = styled.div`
  grid-area: 11 / 1 / 7 / 6;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;

  @media ${device.tablet} {
    grid-area: 8 / 1 / 11 / 13;
    padding-left: 0;
    padding: 0.8rem;
    padding-top: 0;
    margin: 2rem;
  }
`;

export const Div3 = styled.div`
  grid-area: 3 / 6 / 11 / 13;
  box-shadow: 0px 3px 6px #00000029;
  background-image: url(${Img});
  background-size: cover;

  @media ${device.tablet} {
    display: none;
  }
`;
