import React, {useState, useEffect} from "react";
import { Container, Wrapper, Separator } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";
import Fade from 'react-reveal/Fade';
import img from "../../images/business4.jpg"

const Paquetes = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1440);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1440);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const props = {
    auto: !isDesktop,
  };

  return (
    <Container id="perfil">
      <Fade>
      <Wrapper {...props}>
        <Title>Perfiles</Title>
        <S.ContainerCards>
          <S.ContainerCard>
            <S.Card src={img}>
              <S.TitleDescription>Starter</S.TitleDescription>
            </S.Card>
            <S.Description>
                <li>Capital menor: $10,000 USD - $50,000 USD</li>
                <li>Horizonte de inversión de 6 a 12 meses</li>
              </S.Description>
          </S.ContainerCard> 
          <S.ContainerCard> 
            <S.Card src={img}>
              <S.TitleDescription>Advanced</S.TitleDescription>
            </S.Card>
            <S.Description>
                <li>Mayor capital: $50,000 USD en adelante</li>
                <li>Horizonte de inversión de 1 a 5 años</li>
              </S.Description>
          </S.ContainerCard>   
        </S.ContainerCards>
      </Wrapper>
      </Fade>
      <Separator/>
        <br/>
    </Container>
  );
};

export default Paquetes;
