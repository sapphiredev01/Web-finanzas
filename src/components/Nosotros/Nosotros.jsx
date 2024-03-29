import React from "react";
import { Container, Wrapper, Separator } from "../UI/Containers/Containers";
import * as S from "./Styles";
import { Title, Text, NiceTitle, PreTitle } from "../UI/Typography/Typography";
import ImgVer from "../../images/bw2.png";
import ImgHor from "../../images/hands.png";
import iconGraph from "../../images/grafica.png";
import iconTrophy from "../../images/trophy.png";
import iconVision from "../../images/Vision.png";
import iconMision from "../../images/mision.png";
import iconValores from "../../images/valores.png";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";

export default function Nosotros() {
  const isDesktop = useDesktop();

  const props = {
    auto: !isDesktop,
  };

  return (
    <Container id="nosotros" style={{marginTop:"3rem"}}>
      <Fade>
      <Wrapper {...props}>
        <S.WrapperFlex>
        { isDesktop ? (
          <>
          <S.ContentImages>
            <S.ImageVer src={ImgVer} />
            <S.ImageHor src={ImgHor} />
          </S.ContentImages>
          <S.ContentInfo>
            <PreTitle>Acerca de nosotros</PreTitle>
            <NiceTitle>Somos tu mejor opción para invertir</NiceTitle>
            <S.Description >
              En <b>FINPEI</b> facilitamos el acercamiento a proyectos
              comerciales, mercados financieros y criptográficos. Participando
              en el desarrollo de proyectos de éxito
            </S.Description>
            <S.WrapperFlex>
            <S.ContainerInfo>
             <S.Icon src={iconGraph} />
             <S.Info>Grupo financiero con diferentes ramas de negocio.</S.Info>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.Icon src={iconTrophy} />
              <S.Info>Hacemos crecer tu capital a mediano y largo plazo.</S.Info>
            </S.ContainerInfo>
          </S.WrapperFlex>
          </S.ContentInfo>
          </>
        ) : (
          <>
          <S.ContentInfo>
           <Title style={{textAlign:"center"}}>Acerca de nosotros</Title>
            <NiceTitle>Somos tu mejor opción para invertir</NiceTitle>
            <Text style={{textAlign:"justify"}}>
              En <b>FINPEI</b> facilitamos el acercamiento a proyectos
              comerciales, mercados financieros y criptográficos. Participando
              en el desarrollo de proyectos de éxito
            </Text>
            <S.WrapperFlex>
            <S.ContainerInfo>
             <S.Icon src={iconGraph} />
             <S.Info>Grupo financiero con diferentes ramas de negocio.</S.Info>
            </S.ContainerInfo>
            <S.ContainerInfo>
              <S.Icon src={iconTrophy} />
              <S.Info>Hacemos crecer tu capital a mediano y largo plazo.</S.Info>
            </S.ContainerInfo>
          </S.WrapperFlex>
          </S.ContentInfo>
          <S.ContentImages>
            <S.ImageVer src={ImgVer} />
            <S.ImageHor src={ImgHor} />
          </S.ContentImages>
          </>
        )}
        </S.WrapperFlex>
        <S.WrapperFlex>
          <S.ContainerIdeo>
            <S.Icon2 src={iconMision} />
            <S.IdeoText><b>Misión</b></S.IdeoText>
            <S.IdeoText info>Crear más oportunidades de crecimiento en diversos mercados que brindan seguridad y estabilidad en nuestros proyectos.</S.IdeoText>
          </S.ContainerIdeo>
          <S.ContainerIdeo>
            <S.Icon2 src={iconVision} />
            <S.IdeoText><b>Visión</b></S.IdeoText>
            <S.IdeoText info>Ser lideres en diversificación global a nivel nacional.</S.IdeoText>
          </S.ContainerIdeo>
          <S.ContainerIdeo>
            <S.Icon2 src={iconValores} />
            <S.IdeoText><b>Valores</b></S.IdeoText>
            <S.IdeoText info>Las empresas con las que colaboramos siempre actúan con ética, confianza, honestidad y trabajo en equipo para brindar seguridad a nuestros clientes y a nosotros.</S.IdeoText>
          </S.ContainerIdeo>
        </S.WrapperFlex>
      </Wrapper>
      </Fade>
      <Separator />
        <br/>
    </Container>
  );
}

