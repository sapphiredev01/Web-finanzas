import styled from "styled-components";

const size = {
  tablet: "768px",
};

const device = {
  tablet: `(max-width: ${size.tablet})`,
};

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 11 / 13;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 0;
    margin-top: 4rem;
    width: 90%;
  }
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
    align-items: center;
    margin-top: 4rem;
    width: 100%;
    justify-content: center;
    margin-left: 2rem;
  }
`;

export const Right = styled.div`
  grid-area: 1 / 3 / 6 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: 4rem;

  @media ${device.tablet} {
    grid-area: 4 / 1 / 6 / 5;
    margin-top: -3rem;
    margin-bottom: 2rem;
    width: 100%;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  width: 400px;
  height: 150px;
  margin-left: 20%;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0%;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    justify-self: center;
    padding-top: 20rem;
    margin-bottom: -2rem;
  }
`;

export const Text = styled.div`
  text-align: justify;
  text-justify: inter-word;
  font-size: 16px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-left: 10%;
  width: 100%;
  padding-top: 2%;
  @media ${device.tablet} {
    margin-left: 0%;
    font-size: 1rem;
    text-align: justify;
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
    margin-right: 1rem;
  }
`;
