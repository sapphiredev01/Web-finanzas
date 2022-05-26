import React from "react";
import Container from "../UI/Containers/Containers";
import * as content from "./Content"
import ImgVer from "../../images/business4.jpg";
import ImgHor from "../../images/business1.jpg";

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
          <content.ImageVer src={ImgVer} />
          <content.ImageHor src={ImgHor} />
        </content.Right>
      </content.Content>
    </Container>
  );
}