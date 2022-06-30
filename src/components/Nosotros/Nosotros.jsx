import React from "react";
import Container from "../UI/Containers/Containers";
import * as content from "./Content";
import ImgVer from "../../images/business4.jpg";
import ImgHor from "../../images/business1.jpg";

export default function Nosotros() {
  return (
    <Container id="vision" grid>
      <content.Content>
        <content.Left>
          <content.Title>VISIÓN</content.Title>
          <content.Text>
            En <b>FINPEI</b> facilitamos el acercamiento a proyectos
            comerciales, mercados financieros y criptográficos. Participando en
            el desarrollo de proyectos de éxito
          </content.Text>
          <content.Text>
            <b>Misión:</b> Crear más oportunidades de crecimiento en diversos
            mercados que brindan seguridad y estabilidad en nuestros proyectos
          </content.Text>
          <content.Text>
            <b>Visión:</b> Ser lideres en diversificación global a nivel
            nacional
          </content.Text>
          <content.Text>
            <b>Valores:</b> Las empresas con las que colaboramos siempre actúan
            con ética, confianza, honestidad y trabajo en equipo para brindar
            seguridad a nuestros clientes y a nosotros
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
