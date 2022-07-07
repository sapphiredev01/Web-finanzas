import React from "react";
import * as Styles from "./Styles";
import { Link } from "react-scroll";
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
          <Styles.StyledLink to="vision">
            <Styles.Title>VISIÓN</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="servicios">
            <Styles.Title>SERVICIOS</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="perfil">
            <Styles.Title>PERFIL</Styles.Title>
          </Styles.StyledLink>
        </Styles.Step>
        <Styles.Step>
          <Styles.StyledLink to="calculadora">
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
