import React, { useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";
import imgBearBull from "../../images/bear_bull.png";
import Chart from "./Chart";
import Form from "./Form";

const Inversion = () => {
  const [data, setData] = useState([]);
  const submitFormHandler = (data) => {
    setData(data);
  };

  return (
    <Container id="inversion">
      <Wrapper style={{marginBottom: "2rem"}}>
        <Title>Inversión</Title>
        <S.Img src={imgBearBull} alt="Bear and Bull" />
        <S.Grid>
          <S.Div1>
            <Form onSubmitFormHandler={submitFormHandler} />
          </S.Div1>
          <S.Div2>
            <Chart data={data} />
          </S.Div2>
        </S.Grid>
      </Wrapper>
    </Container>
  );
};

export default Inversion;
