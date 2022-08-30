import React from "react";
import { Container, Wrapper, Separator } from "../UI/Containers/Containers";
import * as S from "./Styles";
import { Title, Text, NiceTitle, PreTitle } from "../UI/Typography/Typography";
import ImgVer from "../../images/bw2.png";
import ImgHor from "../../images/hands.png";
import iconGraph from "../../images/grafica.png";
import iconTrophy from "../../images/trophy.png";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';

export default function Nosotros() {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

  return (
    <Container id="nosotros">
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
          <S.boton>Contáctanos</S.boton>
          </S.ContentInfo>
          </>
        ) : (
          <>
          <S.ContentInfo>
          <PreTitle>Acerca de nosotros</PreTitle>
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
          <S.boton>Contáctanos</S.boton>
          </S.ContentInfo>
          <S.ContentImages>
            <S.ImageVer src={ImgVer} />
            <S.ImageHor src={ImgHor} />
          </S.ContentImages>
          </>
        )}
        </S.WrapperFlex>
      </Wrapper>
      </Fade>
    </Container>
  );
}
