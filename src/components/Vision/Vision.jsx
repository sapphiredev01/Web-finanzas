import React from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import * as S from "./Styles";
import { Title, Text } from "../UI/Typography/Typography";
import ImgVer from "../../images/business4.jpg";
import ImgHor from "../../images/business1.jpg";
import { useDesktop } from "../../hooks/useDesktop";

export default function Nosotros() {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

  return (
    <Container id="nosotros">
      <Wrapper {...props}>
        <Title>Nosotros</Title>
        <S.WrapperFlex>
          <S.ContentText>
            <Text>
              En <b>FINPEI</b> facilitamos el acercamiento a proyectos
              comerciales, mercados financieros y criptográficos. Participando
              en el desarrollo de proyectos de éxito
            </Text>
            <Text>
              <b>Misión:</b> Crear más oportunidades de crecimiento en diversos
              mercados que brindan seguridad y estabilidad en nuestros proyectos
            </Text>
            <Text>
              <b>Visión:</b> Ser lideres en diversificación global a nivel
              nacional
            </Text>
            <Text>
              <b>Valores:</b> Las empresas con las que colaboramos siempre
              actúan con ética, confianza, honestidad y trabajo en equipo para
              brindar seguridad a nuestros clientes y a nosotros
            </Text>
          </S.ContentText>
          <S.ContentImages>
            <S.ImageVer src={ImgVer} />
            <S.ImageHor src={ImgHor} />
          </S.ContentImages>
        </S.WrapperFlex>
      </Wrapper>
    </Container>
  );
}
