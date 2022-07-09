import React from "react";
import * as S from "./Styles";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title, Text } from "../UI/Typography/Typography";

const Servicios = () => {
  return (
    <Container id="servicios">
      <Wrapper>
      <Title>VEHÍCULOS FINANCIEROS</Title>
      <S.Content />
      </Wrapper>
    </Container>
  );
};

export default Servicios;
