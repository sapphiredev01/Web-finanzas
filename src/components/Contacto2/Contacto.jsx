import React, { useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import * as S from "./Styles";
import cel from "../../images/telefono.png";
import mail from "../../images/correo.png";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';
import { NiceTitle, Title } from "../UI/Typography/Typography";
const Contacto = () => {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container id="contacto">
      <Fade>
      <Wrapper {...props}>
        <Title style={{textAlign:"center"}}>Información de contacto</Title>
        <NiceTitle style={{textAlign:"center"}}>Contáctanos para conocer mas información</NiceTitle>
        <br/>
        <S.WrapperFlex>
          <S.infoContent onClick={() => openInNewTab('https://wa.me/message/WXW4WNFS6LNPB1')}>
            <S.contactoIcon src={cel} alt="telefono" />
            <S.contactoTitle>WhatsApp</S.contactoTitle>
            <S.Info>+52 (56) 1885 5555</S.Info>
          </S.infoContent>
          <S.infoContent onClick={() => openInNewTab("mailto:contacto@finpei.com.mx?Subject=Interesado%20en%20asesoria%20Finpei")}>
            <S.contactoIcon src={mail} alt="email" />
            <S.contactoTitle>Mail</S.contactoTitle>
            <S.Info>contacto@finpei.com.mx</S.Info>
          </S.infoContent>
        </S.WrapperFlex>
      </Wrapper>
      </Fade>
    </Container>
  );
};

export default Contacto;
