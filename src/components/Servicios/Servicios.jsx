import React from "react";
import styled from "styled-components";
import ServiceBar from "./ServiceBar";

const Pararelogram = styled.div`
  grid-area: 2 / 2 / 13 / 13;
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 3rem;
`;

const Text = styled.div`
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  margin: 2rem 1rem;
  margin-bottom: 3rem;
`;

const Servicios = () => {
  return (
    <Pararelogram>
      <Wrapper>
        <Title>SERVICIOS</Title>
        <Text>
          Somos un equipo experimentado de operadores dedicado a buscar y
          detectar las mejores oportunidades de inversiones en los mercados
          financieros de acciones americanas y mercado de divisas.
        </Text>
        <ServiceBar />
      </Wrapper>
    </Pararelogram>
  );
};

export default Servicios;
