/* eslint-disable react/prop-types */
import React, { useState } from "react";
import * as S from "./Styles";
import { useAlert } from "react-alert";


const Form = ({ onSubmitFormHandler }) => {
  const alert = useAlert();

  const [userInput, setUserInput] = useState({
    enteredAmount: "10000",
    enteredPaymentFrequency: "5.57",
    enteredTime: "6",
  });
  const [timeSelected, setTimeSelected] = useState("Seis meses");

  const [time, setTime] = useState(0);

  const amountInputHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const timeInputHandler = (event) => {
    setTime(event.target.value);
    if(event.target.value === "1"){
      setTimeSelected("Seis meses");
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTime: "6",
        };
      });
    }else if(event.target.value === "2"){
      setTimeSelected("Un año");
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTime: "12",
        };
      });
    }else if(event.target.value === "3"){
      setTimeSelected("Tres años");
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTime: "3",
        };
      });
    }else if(event.target.value === "4"){
      setTimeSelected("Cinco años");
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTime: "5",
        };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.enteredAmount === "" || userInput.enteredTime === "") {
      alert.show("Por favor ingrese un valor para el monto y el tiempo", { type: "error" });
      return;
    }
    if (userInput.enteredAmount <= 0 || userInput.enteredTime <= 0) {
      alert.show("Por favor ingrese un valor mayor a cero para el monto", { type: "error" });
      return;
    }
    if (userInput.enteredPaymentFrequency === "") {
      alert.show("Por favor ingrese un valor para el periodo de pago", { type: "error" });
      return;
    }

    const data = [
      userInput.enteredAmount,
      userInput.enteredPaymentFrequency,
      userInput.enteredTime,
    ];
    onSubmitFormHandler(data);
  };

  return (
      <S.FormStyled onSubmit={submitHandler}>
        <S.LabelStyled>Capital</S.LabelStyled>
        <S.InputRange
          value={userInput.enteredAmount}
          type="range"
          min={10000}
          max={1000000}
          step={1000}
          onChange={amountInputHandler}
        />
        <S.LabelInput>${userInput.enteredAmount}</S.LabelInput>
        <br/>
        <S.LabelStyled>Plazo</S.LabelStyled>
        <S.InputRange
          value={time}
          type="range"
          min={1}
          max={4}
          step={1}
          onChange={timeInputHandler}
        />
        <S.LabelInput>{timeSelected}</S.LabelInput>
        <S.ButtonStyled type="submit">
          Calcular rendimiento
        </S.ButtonStyled>
      </S.FormStyled>
  );
};

export default Form;
