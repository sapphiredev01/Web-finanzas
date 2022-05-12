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
        <Content.DivImage>
          <Content.ImageStyled src="../../../public/bear_bull.png" />
        </Content.DivImage>
        <Content.Div1>
          <Content.FormStyled>
            <Content.LabelStyled>Capital</Content.LabelStyled>
            <Content.InputStyled />
            <Content.LabelStyled>Plazo</Content.LabelStyled>
            <Content.InputStyled />
            <Content.ButtonStyled>Calcular rendimiento</Content.ButtonStyled>
          </Content.FormStyled>
        </Content.Div1>
        <Content.Div2></Content.Div2>
      </Content.Content>
    </Container>
  );
}
