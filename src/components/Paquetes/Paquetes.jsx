import React from "react";
import Container from "../UI/Containers/Containers";
import Media from "../UI/Media/index";
import { Content, TitleContainer, Title, Div1, Div2, Div3 } from "./Content";
import Nav from "../UI/Nav/Nav";

const Paquetes = () => {
  return (
    <Container grid>
      <Media />
      <Content>
        <TitleContainer>
          <Title>
            <h1>Paquetes</h1>
          </Title>
        </TitleContainer>
        <Div1>
          <h2 style={{color: '#034e80'}}>Anual Tasa Fija</h2>
          <p style={{fontWeight: 'bold'}}>Diseñado para inversores que quieren cubrir sus responsabilidades mensuales de manera inteligente, como pagar su casa, comprar un terreno, pagar colegiaturas o incrementar sus ingresos mensuales</p>
        </Div1>
        <Div2>
          <h2 style={{color: '#034e80'}}>Anual Tasa Compuesta</h2>
          <p style={{fontWeight: 'bold'}}>Aquellas personas que consideran el ahorro como parte vital de sus vidas financieras, querrán tomar un paso más grande, al no solamente ahorrar, sino también hacer que sus ahorros produzcan más capital, asegurar su futuro, e incluso vivir un retiro inmejorable.</p>
        </Div2>
        <Div3 />
      </Content>
      <Nav />
    </Container>
  );
};

export default Paquetes;