import React, { useState } from "react";
import Container from "../UI/Containers/Containers";
import * as Content from "./Content";
import BarChart from "./BarChart";

const Calculadora = () => {
  const [userInput, setUserInput] = useState({
    enteredAmount: "",
    enteredTime: "",
  });

  const amountInputHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const timeInputHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTime: event.target.value,
      };
    }
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(userInput);
  };

  return (
    <Container id="calculadora" grid>
      <Content.Content>
        <Content.TitleContainer>
          <Content.Title>
            <h1>Calculadora</h1>
          </Content.Title>
        </Content.TitleContainer>
        <Content.DivImage>
          <Content.ImageStyled src="../../../public/bear_bull.png" />
        </Content.DivImage>
        <Content.Div1>
          <Content.FormStyled onSubmit={submitHandler} >
            <Content.LabelStyled>Capital</Content.LabelStyled>
            <Content.InputStyled type="number" onChange={amountInputHandler} />
            <Content.LabelStyled>Plazo</Content.LabelStyled>
            <Content.Select onChange={timeInputHandler} >
              <option value="" hidden>
                Seleccione una opción
              </option>
              <option value="1">Un año</option>
              <option value="2">Tres años</option>
              <option value="3">10 años</option>
            </Content.Select>
            <Content.ButtonStyled type="submit" >
              Calcular rendimiento
            </Content.ButtonStyled>
          </Content.FormStyled>
        </Content.Div1>
        <Content.Div2>
          <BarChart />
        </Content.Div2>
      </Content.Content>
    </Container>
  );
};

export default Calculadora;
