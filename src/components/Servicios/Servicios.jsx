import React from "react";
import ServiceBar from "./ServiceBar";
import * as Content from "./Content";


const Servicios = () => {
  return (
    <Content.Pararelogram id="servicios">
      <Content.Wrapper>
        <Content.Title>SERVICIOS</Content.Title>
        <Content.Text>
          Somos un equipo experimentado de operadores dedicado a buscar y
          detectar las mejores oportunidades de inversiones en los mercados
          financieros de acciones americanas y mercado de divisas.
        </Content.Text>
        <ServiceBar />
      </Content.Wrapper>
    </Content.Pararelogram>
  );
};

export default Servicios;
