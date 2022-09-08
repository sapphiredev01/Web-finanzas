import React from "react";
import { Container, Wrapper, Separator } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";
import Fade from 'react-reveal/Fade';

const Paquetes = () => {
  return (
    <Container id="perfil">
      <Fade>
      <Wrapper>
        <Title>Perfil</Title>
        <S.ContainerCards>
          <S.ImageContainer>
            <S.Image movil />
          </S.ImageContainer>
          <S.Card1>
            <S.CardTitle>Starter</S.CardTitle>
            <S.Description>
              <li>Capital menor: $10,000 USD - $50,000 USD</li>
              <li>Horizonte de inversión de 6 a 12 meses</li>
            </S.Description>
          </S.Card1>
          <S.Card2>
            <S.CardTitle>Advanced</S.CardTitle>
            <S.Description>
              <li>Mayor capital: $50,000 USD en adelante</li>
              <li>Horizonte de inversión de 1 a 5 años</li>
            </S.Description>
          </S.Card2>
          <S.ImageContainer>
            <S.Image desktop />
          </S.ImageContainer>
        </S.ContainerCards>
      </Wrapper>
      </Fade>
      <Separator/>
        <br/>
    </Container>
  );
};

export default Paquetes;
