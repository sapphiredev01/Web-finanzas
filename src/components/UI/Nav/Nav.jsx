import React from "react";
import * as Styles from "./Styles";
import logo from "../../../images/LOGOTIPOS_FINPEI_28.png";

const Nav = () => {
  return (
    <Styles.Wrapper>
      <Styles.Stepper>
        <Styles.StyledLinkLogo to="hero">
        <Styles.ImageStyled src={logo} />
        </Styles.StyledLinkLogo>
        <Styles.Step>
          <Styles.StyledLink to="inicio">
            <Styles.Title>INICIO</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="nosotros">
            <Styles.Title>NOSOTROS</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="servicios" vehiculo="true">
            <Styles.Title>VEHÍCULOS FINANCIEROS</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="perfil">
            <Styles.Title>PERFIL</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="inversion">
            <Styles.Title>INVERSIÓN</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="contacto">
            <Styles.Title>CONTACTO</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
      </Styles.Stepper>
    </Styles.Wrapper>
  );
};

export default Nav;
