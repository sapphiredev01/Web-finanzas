import React, { useState } from "react";
import { Container } from "../UI/Containers/Containers";
import * as Content from "./Content";
import imgBearBull from "../../images/bear_bull.png";
import Chart from "./Chart";
import Form from "./Form";

const Calculadora = () => {
  const [data, setData] = useState([]);
  const submitFormHandler = (data) => {
    setData(data);
  };

  return (
    <Container id="calculadora">
      <Content.TitleContainer>
        <Content.Title>Calculadora</Content.Title>
      </Content.TitleContainer>
      <Content.DivImage>
        <Content.ImageStyled src={imgBearBull} />
      </Content.DivImage>
      <Form onSubmitFormHandler={submitFormHandler} />
      <Chart data={data} />
    </Container>
  );
};

export default Calculadora;
