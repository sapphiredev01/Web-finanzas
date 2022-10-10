import React, { useState } from "react";
import { Container, Wrapper, Separator } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import * as S from "./Styles";
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

  const [intereses, setIntereses] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <Container id="inversion">
      <Fade>
      <Wrapper style={{marginBottom: "4rem"}} {...props}>
        <Title>Inversión</Title>
        <S.Grid>
          <S.Div1>
            <Form onSubmitFormHandler={submitFormHandler} />
          </S.Div1>
          <S.Div2>
            <Chart data={data} setIntereses={setIntereses} setTotal={setTotal}/>
          </S.Div2>
          <div/>
          <S.Div3>
            <S.LabelStyled>Rendimiento mensual: 3.33%</S.LabelStyled>
          {
            total > 0 && 
            (
              <>
                <br/>
                <br/>
                <S.LabelStyled>Rendimiento de intereses: ${intereses.toLocaleString("es-mx")}</S.LabelStyled>
                <br/>
                <br/>
                <S.LabelStyled>Intereses + Capital: ${total.toLocaleString("es-mx")}</S.LabelStyled>       
              </>       
            )
          }
          </S.Div3>
        </S.Grid>
      </Wrapper>
      </Fade>
      <Separator />
      <br/>
    </Container>
  );
};

export default Inversion;
