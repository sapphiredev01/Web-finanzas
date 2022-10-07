/* eslint-disable react/prop-types */
import React, { useState } from "react";
import * as S from "./Styles";
import { useAlert } from "react-alert";
import { useDesktop } from "../../hooks/useDesktop";


const Form = ({ onSubmitFormHandler }) => {
  const alert = useAlert();
  const isDesktop = useDesktop();

  const [userInput, setUserInput] = useState({
    enteredAmount: "10000",
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

    const data = [
      userInput.enteredAmount,
      userInput.enteredTime,
    ];
    onSubmitFormHandler(data);
  };

  const incraseRange = () => {
    if (userInput.enteredAmount < 10000000) {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredAmount: ((userInput.enteredAmount*1) + 10000).toString(),
        };
      });
    }
  }

  const decreaseRange = () => {
    if (userInput.enteredAmount > 10000) {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredAmount: ((userInput.enteredAmount*1) - 10000).toString(),
        };
      });
    }
  }

  return (
      <S.FormStyled onSubmit={submitHandler}>
        <S.LabelStyled>Capital</S.LabelStyled>

        {
          !isDesktop ? (
            <S.RangesDiv>
              <S.RangeButton type="button" onClick={decreaseRange}>-</S.RangeButton>
              <S.InputRange
                value={userInput.enteredAmount}
                type="range"
                min={10000}
                max={10000000}
                step={10000}
                onChange={amountInputHandler}
              />
              <S.RangeButton type="button" onClick={incraseRange}>+</S.RangeButton>
            </S.RangesDiv>
          ) : (
            <S.InputRange
              value={userInput.enteredAmount}
              type="range"
              min={10000}
              max={10000000}
              step={10000}
              onChange={amountInputHandler}
            />
          )
        }
       
        <S.LabelInput>${Number(userInput.enteredAmount).toLocaleString("es-mx")}</S.LabelInput>
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
        <S.ButtonStyled type="submit" onSubmit={submitHandler}>
          Calcular rendimiento
        </S.ButtonStyled>
      </S.FormStyled>
  );
};

export default Form;
