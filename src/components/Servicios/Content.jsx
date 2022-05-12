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

export const Pararelogram = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  background: #034e80;
  width: 85%;
  position: relative;
  left: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);

  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
`;

export const Text = styled.div`
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  margin: 2rem 1rem;
  margin-bottom: 3rem;
`;