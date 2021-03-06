import React, { useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";
import imgBearBull from "../../images/bear_bull.png";
import Chart from "./Chart";
import Form from "./Form";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';

const Inversion = () => {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };
  
  const [data, setData] = useState([]);
  const submitFormHandler = (data) => {
    setData(data);
  };

  return (
    <Container id="inversion">
      <Fade>
      <Wrapper style={{marginBottom: "4rem"}} {...props}>
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
      </Fade>
    </Container>
  );
};

export default Inversion;
