import React, { useState } from "react";
import * as Content from "./Content";

const Form = ({ onSubmitFormHandler }) => {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  }

  const [userInput, setUserInput] = useState({
    enteredAmount: "",
    enteredPaymentFrequency: "",
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
      alert("Por favor ingrese un valor para el monto y el tiempo");
      return;
    }
    if (userInput.enteredAmount <= 0 || userInput.enteredTime <= 0) {
      alert("Por favor ingrese un valor mayor a cero para el monto");
      return;
    }
    if (userInput.enteredPaymentFrequency === "") {
      alert("Por favor ingrese un valor para el periodo de pago");
      return;
    }
    const data = [
      userInput.enteredAmount,
      userInput.enteredPaymentFrequency,
      userInput.enteredTime,
    ];
    onSubmitFormHandler(data);
    console.log(data);
    setUserInput({
      enteredAmount: "",
      enteredPaymentFrequency: "",
      enteredTime: "",
    });
  };

  return (
    <Content.Div1>
      <Content.FormStyled onSubmit={submitHandler}>
        <Content.LabelStyled>Capital</Content.LabelStyled>
        <Content.InputStyled
          value={userInput.enteredAmount}
          type="number"
          onChange={amountInputHandler}
        />
        <Content.LabelStyled>Pagos</Content.LabelStyled>
        <Content.Select
          onChange={paymentFrequencyInputHandler}
          value={userInput.enteredPaymentFrequency}
          id="paymentFrequency"
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          <option value="0.0146">Mensual</option>
          <option value="0.0557">Trimestral</option>
          <option value="0.1395">Semestral</option>
          <option value="0.3499">Anual</option>
        </Content.Select>
        <Content.LabelStyled>Plazo</Content.LabelStyled>
        <Content.Select
          onChange={timeInputHandler}
          value={userInput.enteredTime}
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          {}
          <option value="6" onSelect={handleHidden}>Seis meses</option>
          <option value="12">Un año</option>
          <option value="3">Tres años</option>
          <option value="5">Cinco años</option>
        </Content.Select>
        <Content.ButtonStyled type="submit">
          Calcular rendimiento
        </Content.ButtonStyled>
      </Content.FormStyled>
    </Content.Div1>
  );
};

export default Form;
