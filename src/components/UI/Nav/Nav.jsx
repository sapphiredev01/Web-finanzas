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
      <Stepper>
        <ImageStyled src={logo} style={{marginBottom:"2rem"}} />
        <Step>
          <StyledLink to="inicio">
            <Title>INICIO</Title>
          </StyledLink>
        </Step>
        <Step>
          <StyledLink to="vision">
            <Title>VISIÓN</Title>
          </StyledLink>
        </Step>
        <Step>
          <StyledLink to="servicios">
            <Title>SERVICIOS</Title>
          </StyledLink>
        </Step>
        <Step>
          <StyledLink to="perfil">
            <Title>PERFIL</Title>
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
