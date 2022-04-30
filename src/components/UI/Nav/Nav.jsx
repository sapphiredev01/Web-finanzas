import React from "react";
import { Wrapper, Stepper, Step, Title } from "./NavElements";

const Nav = () => {
  return (
    <Wrapper>
      <Stepper>
        <Step>
          <a href="#inicio">
            <Title>INICIO</Title>
          </a>
        </Step>
        <Step>
          <a href="#nosotros">
            <Title>NOSOTROS</Title>
          </a>
        </Step>
        <Step>
          <a href="#inicio">
            <Title>SERVICIOS</Title>
          </a>
        </Step>
        <Step>
          <a href="#paquetes">
            <Title>PAQUETES</Title>
          </a>
        </Step>
        <Step>
          <a href="#calculadora">
            <Title>CALCULADORA</Title>
          </a>
        </Step>
        <Step>
          <a href="#contacto">
            <Title>CONTACTO</Title>
          </a>
        </Step>
      </Stepper>
    </Wrapper>
  );
};

export default Nav;
