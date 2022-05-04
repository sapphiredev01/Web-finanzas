import React from "react";
import styled from "styled-components";
import Container from "../UI/Containers/Containers";

const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Left = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Middle = styled.div`
  grid-area: 2 / 3 / 4 / 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  right: 40%;
`;

const Right = styled.div`
  grid-area: 1 / 5 / 6 / 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Title = styled.h1`
  text-align: left;
  font: bold 50px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  width: 400px;
  height: 150px;
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
`;

const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 13rem;
  margin-right: 20%;
`;

const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 16rem;
  position: relative;
  margin-bottom: -5%;
`;

const Nosotros = () => {
  return (
    <Container id="nosotros" grid>
      <Content>
        <Middle>
          <Title>Los expertos que necesitas.</Title>
          <Text>
            Somos un equipo de operadores experimentados, comprometidos con
            buscar y detectar las mejores oportunidades de inversión de mercado,
            condiciones financieras de las acciones y los mercados
            estadounidenses de divisas.
          </Text>
        </Middle>
        <Right>
          <ImageVer src="../../../public/images/business4.jpg" />
          <ImageHor src="../../../public/images/business.jpg" />
        </Right>
      </Content>
    </Container>
  );
};

export default Nosotros;
