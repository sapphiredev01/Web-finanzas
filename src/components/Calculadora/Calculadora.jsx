import React, { useState } from "react";
import Container from "../UI/Containers/Containers";
import * as Content from "./Content";
import imgBearBull from "../../images/bear_bull.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.enteredAmount === "" || userInput.enteredTime === "") {
      alert("Por favor ingrese un valor para el monto y el tiempo");
      return;
    }
    if (userInput.enteredAmount <= 0 || userInput.enteredTime <= 0) {
      alert("Por favor ingrese un valor mayor a cero para el monto");
      return;
    }
    console.log(userInput);
    setUserInput({
      enteredAmount: "",
      enteredTime: "",
    });
  };

  const labels = ["Monto", "Tiempo"];
  const data = [userInput.enteredAmount, userInput.enteredTime];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Rendimiento de inversión",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: data,
      },
    ],
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
          <Content.ImageStyled src={imgBearBull} />
        </Content.DivImage>
        <Content.Div1>
          <Content.FormStyled onSubmit={submitHandler}>
            <Content.LabelStyled>Capital</Content.LabelStyled>
            <Content.InputStyled
              value={userInput.enteredAmount}
              type="number"
              onChange={amountInputHandler}
            />
            <Content.LabelStyled>Plazo</Content.LabelStyled>
            <Content.Select
              onChange={timeInputHandler}
              value={userInput.enteredTime}
            >
              <option value="" hidden>
                Seleccione una opción
              </option>
              <option value="3">Tres años</option>
              <option value="5">Cinco años</option>
              <option value="7">Siete años</option>
              <option value="10">Diez años</option>
            </Content.Select>
            <Content.ButtonStyled type="submit">
              Calcular rendimiento
            </Content.ButtonStyled>
          </Content.FormStyled>
        </Content.Div1>
        <Content.Div2>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Rendimiento de inversión",
                },
              },
            }}
          />
        </Content.Div2>
      </Content.Content>
    </Container>
  );
};

export default Calculadora;
