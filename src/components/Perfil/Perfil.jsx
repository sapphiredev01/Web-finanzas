import React from "react";
import { Container } from "../UI/Containers/Containers";
import {
  Content,
  TitleContainer,
  Title,
  Div1,
  Div2,
  Div3,
  Desc,
} from "./Content";

const Paquetes = () => {
  return (
    <Container id="perfil">
      <Title>Perfil</Title>
      <Div1>
        <h2 style={{ color: "var(--blue)" }}>Starter</h2>
        <Desc>
          <li>Capital menor: $5,000 USD - $25,000 USD</li>
          <li>Horizonte de inversión de 6 a 12 meses</li>
        </Desc>
      </Div1>
      <Div2>
        <h2 style={{ color: "var(--blue)" }}>Advanced</h2>
        <Desc>
          <li>Mayor capital: $25,000 USD en adelante</li>
          <li>Horizonte de inversión de 1 a 5 años</li>
        </Desc>
      </Div2>
      <Div3 />
    </Container>
  );
};

export default Paquetes;
