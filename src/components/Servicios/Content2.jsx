import styled from "styled-components";
const size = {
  tablet: "768px",
};

const device = {
  tablet: `(max-width: ${size.tablet})`,
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
    margin-top: 11rem;
    margin-bottom: -4rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(15, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const IconAgricultura = styled.img`
  grid-area: 1 / 1 / 3 / 3;
  width: 150%;

  @media ${device.tablet} {
    grid-area: 1 / 2 / 4 / 4;
    margin-top: -3rem;
  }
`;
export const IconCrypto = styled.img`
  grid-area: 1 / 3 / 3 / 5;
  width: 150%;

  @media ${device.tablet} {
    grid-area: 4 / 2 / 7 / 4;
    margin-top: -3rem;
  }
`;
export const IconStocks = styled.img`
  grid-area: 1 / 5 / 3 / 7;
  width: 150%;

  @media ${device.tablet} {
    grid-area: 7 / 2 / 10 / 4;
    margin-top: -3rem;
  }
`;
export const IconStartup = styled.img`
  grid-area: 1 / 7 / 3 / 9;
  width: 150%;

  @media ${device.tablet} {
    grid-area: 10 / 2 / 13 / 4;
    margin-top: -3rem;
  }
`;
export const IconComercio = styled.img`
  grid-area: 1 / 9 / 3 / 11;
  width: 150%;

  @media ${device.tablet} {
    grid-area: 13 / 2 / 16 / 4;
    margin-top: -3rem;
  }
`;

export const DescAgricultura = styled.h3`
  grid-area: 3 / 1 / 4 / 3;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 40%;
  margin-top: -30%;
  @media ${device.tablet} {
    grid-area: 2 / 4 / 3 / 5;
    margin-top: -1rem;
    font-size: 1.1rem;
  }
`;
export const DescCrypto = styled.h3`
  grid-area: 3 / 3 / 4 / 5;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 55%;
  margin-top: -30%;
  @media ${device.tablet} {
    grid-area: 5 / 4 / 6 / 5;
    margin-top: -1rem;
    font-size: 1.1rem;
  }
`;
export const DescStocks = styled.h3`
  grid-area: 3 / 5 / 4 / 7;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 55%;
  margin-top: -30%;
  @media ${device.tablet} {
    grid-area: 8 / 4 / 9 / 5;
    margin-top: -1rem;
    font-size: 1.1rem;
  }
`;
export const DescStartup = styled.h3`
  grid-area: 3 / 7 / 4 / 9;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 50%;
  margin-top: -30%;
  @media ${device.tablet} {
    grid-area: 11 / 4 / 12 / 5;
    margin-top: -1rem;
    font-size: 1.1rem;
  }
`;
export const DescComercio = styled.h3`
  grid-area: 3 / 9 / 4 / 11;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 50%;
  margin-top: -30%;
  @media ${device.tablet} {
    grid-area: 14 / 4 / 15 / 5;
    margin-top: -2rem;
    font-size: 1.1rem;
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

export const Title = styled.h1`
  text-align: center;
  color: #034e80;
  font-size: 3rem;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;
