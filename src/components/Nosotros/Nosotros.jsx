import React from "react";
import styled from "styled-components";
import Container from "../UI/Containers/Containers";

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

const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Left = styled.div`
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

const Right = styled.div`
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

const Title = styled.h1`
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
  }
`;

const Text = styled.div`
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
  }
`;

const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 13rem;
  margin-right: 20%;
  @media ${device.tablet} {
   
  }
`;

const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 16rem;
  position: relative;
  margin-bottom: -5%;
  @media ${device.tablet} {
    margin-bottom: -30%;
  }
`;

const Nosotros = () => {
  return (
    <Container id="nosotros" grid>
      <Content>
        <Left>
          <Title>Los expertos que necesitas.</Title>
          <Text>
            Somos un equipo de operadores experimentados, comprometidos con
            buscar y detectar las mejores oportunidades de inversión de mercado,
            condiciones financieras de las acciones y los mercados
            estadounidenses de divisas.
          </Text>
        </Left>
        <Right>
          <ImageVer src="../../../public/images/business4.jpg" />
          <ImageHor src="../../../public/images/business.jpg" />
        </Right>
      </Content>
    </Container>
  );
};

export default Nosotros;
