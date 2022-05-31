import React from "react";
import {
  Wrapper,
  Stepper,
  Step,
  Title,
  StyledLink,
  ImageStyled,
} from "./NavElements";
import NavResponsive from "./NavResponsive";
import logo from "../../../images/LOGOTIPOS_FINPEI_28.png";

const Nav = () => {
  return (
    <Wrapper>
      <NavResponsive />
      <Stepper>
        <Step>
          <ImageStyled src={logo}/>
        </Step>
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
          <StyledLink to="calculadora">
            <Title>CALCULADORA</Title>
          </StyledLink>
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
