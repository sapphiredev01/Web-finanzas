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
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Left = styled.div`
  grid-area: 2 / 1 / 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;

  @media ${device.tablet} {
    grid-area: 1 / 1 / 4 / 5;
  }
`;

export const Right = styled.div`
  grid-area: 1 / 3 / 6 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media ${device.tablet} {
    grid-area: 4 / 1 / 6 / 5;
    margin-top: 45%;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font: bold 50px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  width: 400px;
  height: 150px;
  margin-left: 20%;

  @media ${device.tablet} {
    margin-left: 0%;
    font: bold 40px Helvetica;
    width: auto;
    text-align: center;
  }
`;

export const Text = styled.div`
  text-align: justify;
  text-justify: inter-word;
  font: bold 16px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-left: 40%;
  width: 100%;

  @media ${device.tablet} {
    margin-left: 0%;
    width: 80%;

  }
`;

export const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 13rem;
  margin-right: 20%;
`;

export const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 16rem;
  position: relative;
  margin-bottom: -5%;
  @media ${device.tablet} {
    margin-bottom: -30%;
    margin-right: 5%;
  }
`;
