import React from "react";
import * as Content from "./Styles";
import logo from "../../images/LOGOTIPOS_FINPEI_4.png";
import flecha from "../../images/downrow.png";
import { LinkParticles } from "./LinkParticles";

const Banner = () => {
  return (
    <Content.Container id="hero">
      <LinkParticles />
      <Content.Logo src={logo} />
      <Content.StyledLink to="nosotros">
        <Content.RowAnimated src={flecha} />
      </Content.StyledLink>
    </Content.Container>
  );
};

export default Banner;
