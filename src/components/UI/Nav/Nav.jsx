import React from 'react';
import { Wrapper, Stepper, Step, Title } from "./NavElements";

const Nav = () => {
  return (
    <Wrapper>
      <Stepper>
        <Step>
          <Title>INICIO</Title>
        </Step>
        <Step>
          <Title>NOSOTROS</Title>
        </Step>
        <Step>
          <Title>SERVICIOS</Title>
        </Step>
        <Step>
          <Title>PAQUETES</Title>
        </Step>
        <Step>
          <Title>CALCULADORA</Title>
        </Step>
        <Step>
          <Title>CONTACTO</Title>
        </Step>
      </Stepper>
    </Wrapper>
  );
}

export default Nav;
