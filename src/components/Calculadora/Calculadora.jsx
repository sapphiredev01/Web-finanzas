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
        <Content.Div1 />
        <Content.Div2 />
      </Content.Content>
    </Container>
  );
}