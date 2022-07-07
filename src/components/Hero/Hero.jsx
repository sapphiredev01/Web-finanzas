import React from "react";
import * as Content from "./Styles";
import logo from "../../images/LOGOTIPOS_FINPEI_4.png";
import { LinkParticles } from "./LinkParticles";

const Banner = () => {
  return (
    <Content.Container id="hero">
      <LinkParticles />
      <Content.Logo src={logo} />
    </Content.Container>
  );
};

export default Banner;
