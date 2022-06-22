import React, { useState, useEffect } from 'react'
import * as Content from "./Content";
import background from "../../images/background.jpg";
import backgroundMovile from "../../images/backgroundM.jpg";
import logo from "../../images/LOGOTIPOS_FINPEI_4.png";
import { LinkParticles } from "./Link-Particles";

const Banner = () => {
    return (
     <Content.Container id="banner" grid>
      <LinkParticles/>
      <Content.Logo src={logo}/>
     </Content.Container>
    );
  };
  
  export default Banner;

  /*<Content.Container id="banner" grid>
  <Content.Background src={
    isDesktop ? background: backgroundMovile
  }/>
  <Content.Logo src={logo}/>
</Content.Container>*/