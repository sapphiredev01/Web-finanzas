import React from "react";
import { Wrapper, Stepper, Step, Title, StyledLink } from "./NavElements";

const Nav = () => {
  return (
    <Wrapper>
      <Stepper>
        <Step>
          <StyledLink to="inicio">
            <Title>INICIO</Title>
          </StyledLink>
        </Step>
        <Step>
          <StyledLink to="nosotros">
            <Title>NOSOTROS</Title>
          </StyledLink>
        </Step>
        <Step>
          <StyledLink to="servicios">
            <Title>SERVICIOS</Title>
          </StyledLink>
        </Step>
        <Step>
          <StyledLink to="paquetes">
            <Title>PAQUETES</Title>
          </StyledLink>
        </Step>
        <Step>
          <Title>CALCULADORA</Title>
        </Step>
        <Step>
          <StyledLink to="contacto">
            <Title>CONTACTO</Title>
          </StyledLink>
        </Step>
      </Stepper>
    </Wrapper>
  );
};

export default Nav;
