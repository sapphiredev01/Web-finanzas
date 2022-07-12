/* eslint-disable react/prop-types */
import React, { useState } from "react";
import * as S from "./Styles";
import { useAlert } from "react-alert";


const Form = ({ onSubmitFormHandler }) => {
  const alert = useAlert();

  const [userInput, setUserInput] = useState({
    enteredAmount: "",
    enteredPaymentFrequency: "",
    enteredTime: "",
  });

  const [time, setTime] = useState([
    {
      value: "6",
      title: "Seis meses",
    },
    {
      value: "12",
      title: "Un año",
    },
    {
      value: "3",
      title: "Tres años",
    },
    {
      value: "5",
      title: "Cinco años",
    },
  ]);

  const paymentFrequencyHandler = (e) => {
    const itExists = time.find((option) => option.value === "6");
    if (!itExists) {
      setTime([
        {
          value: "6",
          title: "Seis meses",
        },
        ...time,
      ]);
    }
    if (e.target.value === "34.99") {
      setTime(() => time.filter((option) => option.value !== "6"));
    }
  };

  const amountInputHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const paymentFrequencyInputHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredPaymentFrequency: event.target.value,
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
    setUserInput({
      enteredAmount: "",
      enteredPaymentFrequency: "",
      enteredTime: "",
    });
  };

  return (
      <S.FormStyled onSubmit={submitHandler}>
        <S.LabelStyled>Capital</S.LabelStyled>
        <S.InputStyled
          value={userInput.enteredAmount}
          type="text"
          onChange={amountInputHandler}
        />
        <S.LabelStyled>Aportación</S.LabelStyled>
        <S.Select
          onChange={(e) => {
            paymentFrequencyHandler(e);
            paymentFrequencyInputHandler(e);
          }}
          value={userInput.enteredPaymentFrequency}
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          <option value="1.46">Mensual</option>
          <option value="5.57">Trimestral</option>
          <option value="13.95">Semestral</option>
          <option value="34.99">Anual</option>
        </S.Select>
        <S.LabelStyled>Plazo</S.LabelStyled>
        <S.Select
          onChange={timeInputHandler}
          value={userInput.enteredTime}
          id="time"
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          {time.map((obj, index) => (
            <option key={index} value={obj.value}>
              {obj.title}
            </option>
          ))}
        </S.Select>
        <S.ButtonStyled type="submit">
          Calcular rendimiento
        </S.ButtonStyled>
      </S.FormStyled>
  );
};

export default Form;
