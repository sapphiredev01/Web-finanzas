import React from "react";
import styled from "styled-components";
import {
  BsFillPeopleFill,
  MdOutlineWatchLater,
  FaLock,
  ImMap,
} from "react-icons/all";

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

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  color: #ffffff;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Item = styled.div`
  margin: 0 2rem;
  font-size: 6rem;

  @media ${device.tablet} {
    font-size: 3rem;
    margin: 0 1rem;
  }
`;

const Description = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  margin-top: -18px;

  @media ${device.tablet} {
    font-size: 10px;
    margin-top: -5px;
  }
`;

const ServiceBar = () => {
  return (
    <Container>
      <Item>
        <BsFillPeopleFill />
        <Description>SOPORTE Y ATENCIÓN 24/7</Description>
      </Item>
      <Item>
        <MdOutlineWatchLater />
        <Description>Experiencia en los mercados financieros</Description>
      </Item>
      <Item>
        <FaLock />
        <Description>Privacidad y respaldo en tus inversiones</Description>
      </Item>
      <Item>
        <ImMap />
        <Description>CLIENTES EN TODO EL PAIS</Description>
      </Item>
    </Container>
  );
};

export default ServiceBar;
