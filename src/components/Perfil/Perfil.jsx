import React from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";

const Paquetes = () => {
  return (
    <Container id="perfil">
      <Wrapper>
        <Title>Perfil</Title>
        <S.WrapperFlex>
          <S.Image movil />
          <S.CardContainer>
            <S.Card>
              <h1 style={{ color: "var(--blue)" }}>Starter</h1>
              <S.Description>
                <li>Capital menor: $5,000 USD - $25,000 USD</li>
                <li>Horizonte de inversión de 6 a 12 meses</li>
              </S.Description>
            </S.Card>
            <S.Card>
              <h1 style={{ color: "var(--blue)" }}>Advanced</h1>
              <S.Description>
                <li>Mayor capital: $25,000 USD en adelante</li>
                <li>Horizonte de inversión de 1 a 5 años</li>
              </S.Description>
            </S.Card>
          </S.CardContainer>
          <S.Image desktop />
        </S.WrapperFlex>
      </Wrapper>
    </Container>
  );
};

export default Paquetes;
