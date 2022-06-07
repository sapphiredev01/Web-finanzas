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

export const Wrapper = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 60%;
  height: 100%;
  left: 20%;

  @media ${device.tablet} {
    left: 0%;
    margin-top: 12rem;
    margin-bottom: 0rem;
  }

`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: space-between;
}

`;

export const Item = styled.div`
  margin: 0 2rem;
  font-size: 6rem;

  @media ${device.tablet} {
    font-size: 3rem;
    margin: 0;
  }
`;

export const Description = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-top:  ${(props) => (props.agric ? "-110px" : "-70px")};
  margin-left: 80%;
  @media ${device.tablet} {
    font-size: 1rem;
    margin-top: 0rem;
    margin-left: 80%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #034e80;
  font-size: 3rem;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const IconStyled = styled.img`
  width: 250%;
  height: auto;
  position: relative;

  @media ${device.tablet} {
    width: 70%;
    margin: -7.5rem;
  }
`;