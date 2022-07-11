import React from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";

const Paquetes = () => {
  return (
    <Container id="perfil">
      <Wrapper>
        <Title>Perfil</Title>
        <S.ContainerCards>
          <S.ImageContainer>
            <S.Image movil />
          </S.ImageContainer>
          <S.Card1>
            <S.CardTitle>Starter</S.CardTitle>
            <S.Description>
              <li>Capital menor: $5,000 USD - $25,000 USD</li>
              <li>Horizonte de inversión de 6 a 12 meses</li>
            </S.Description>
          </S.Card1>
          <S.Card2>
            <S.CardTitle>Advanced</S.CardTitle>
            <S.Description>
              <li>Mayor capital: $25,000 USD en adelante</li>
              <li>Horizonte de inversión de 1 a 5 años</li>
            </S.Description>
          </S.Card2>
          <S.ImageContainer>
            <S.Image desktop />
          </S.ImageContainer>
        </S.ContainerCards>
      </Wrapper>
    </Container>
  );
};

export default Paquetes;
