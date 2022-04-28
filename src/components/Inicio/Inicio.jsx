import React from 'react';
import Container from "../UI/Containers/Containers";
import Media from "../UI/Media/index";
import { Content, Left, Right, Title, Text, Hexagon } from './Content';
import Nav from "../UI/Nav/Nav";

const Inicio = () => {
  return (
    <Container grid>
      <Media />
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
          <Hexagon src='../../../public/images/hexagono.svg' />
        </Right>
      </Content>
      <Nav />
    </Container>
  );
};

export default Inicio;
