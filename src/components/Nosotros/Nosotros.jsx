import React from "react";
import Container from "../UI/Containers/Containers";
import * as content from "./Content"

export default function Nosotros() {
  return (
    <Container id="nosotros" grid>
      <content.Content>
        <content.Left>
          <content.Title>Los expertos que necesitas.</content.Title>
          <content.Text>
            Somos un equipo de operadores experimentados, comprometidos con
            buscar y detectar las mejores oportunidades de inversión de mercado,
            condiciones financieras de las acciones y los mercados
            estadounidenses de divisas.
          </content.Text>
        </content.Left>
        <content.Right>
          <content.ImageVer src="../../../public/business4.jpg" />
          <content.ImageHor src="../../../public/business.jpg" />
        </content.Right>
      </content.Content>
    </Container>
  );
};