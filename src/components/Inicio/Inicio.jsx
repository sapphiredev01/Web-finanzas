import React from "react";
import Container from "../UI/Containers/Containers";
import { Content, Left, Right, Title, Text, Hexagon } from "./Content";
import Hex from "../../images/hexagono.svg";

const Inicio = () => {
  return (
    <Container id="inicio" grid>
      <Content>
        <Left>
          <Title>El crecimiento esta asegurado.</Title>
          <Text>
            Especialistas en financiamiento a la medida para su negocio,
            contamos con experiencia apoyando a las empresas a obtener créditos
            a través de instituciones internacionales.
          </Text>
        </Left>
        <Right>
          <Hexagon src={Hex} />
        </Right>
      </Content>
    </Container>
  );
};

export default Inicio;
