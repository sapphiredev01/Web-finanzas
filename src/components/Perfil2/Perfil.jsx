import React from "react";
import { Container, Wrapper, Separator } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";
import Fade from 'react-reveal/Fade';
import img from "../../images/business4.jpg"
import { useDesktop } from "../../hooks/useDesktop";

const Paquetes = () => {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

  return (
    <Container id="perfil">
      <Fade>
      <Wrapper {...props}>
        <Title>Perfiles</Title>
        <S.ContainerCards>
          <S.Card src={img}>
            <S.Description>
              <li>Capital menor: $10,000 USD - $50,000 USD</li>
              <li>Horizonte de inversión de 6 a 12 meses</li>
            </S.Description>
          </S.Card>
          <S.Card src={img}>
            <S.Description>
              <li>Mayor capital: $50,000 USD en adelante</li>
              <li>Horizonte de inversión de 1 a 5 años</li>
            </S.Description>
          </S.Card>
        </S.ContainerCards>
      </Wrapper>
      </Fade>
      <Separator/>
        <br/>
    </Container>
  );
};

export default Paquetes;
