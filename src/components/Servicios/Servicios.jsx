import React from "react";
import * as Content from "./Content";
import Container from "../UI/Containers/Containers";

const Servicios = () => {
  return (
    <Container id="servicios" grid>
      <Content.Wrapper>
        <Content.Title>SERVICIOS</Content.Title>
        <Content.Content />
      </Content.Wrapper>
    </Container>
  );
};

export default Servicios;
