import React from "react";
import Container from "../UI/Containers/Containers";
import * as Content from "./Content";

export default function Calculadora() {
  return (
    <Container id="calculadora" grid>
      <Content.Content>
        <Content.TitleContainer>
          <Content.Title>
            <h1>Calculadora</h1>
          </Content.Title>
        </Content.TitleContainer>
        <Content.Div1>
          <h2 style={{ color: "#034e80" }}>Anual Tasa Fija</h2>
          <p style={{ fontWeight: "bold" }}>
            Diseñado para inversores que quieren cubrir sus responsabilidades
            mensuales de manera inteligente, como pagar su casa, comprar un
            terreno, pagar colegiaturas o incrementar sus ingresos mensuales
          </p>
        </Content.Div1>
        <Content.Div2>
          <h2 style={{ color: "#034e80" }}>Anual Tasa Compuesta</h2>
          <p style={{ fontWeight: "bold" }}>
            Aquellas personas que consideran el ahorro como parte vital de sus
            vidas financieras, querrán tomar un paso más grande, al no solamente
            ahorrar, sino también hacer que sus ahorros produzcan más capital,
            asegurar su futuro, e incluso vivir un retiro inmejorable.
          </p>
        </Content.Div2>
      </Content.Content>
    </Container>
  );
}
