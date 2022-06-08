import React, { useState, useEffect } from 'react'
import * as Content from "./Content";
import background from "../../images/background.jpg";
import backgroundMovile from "../../images/backgroundM.jpg";
import logo from "../../images/LOGOTIPOS_FINPEI_4.png";

const Banner = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

    return (
      <Content.Container id="banner" grid>
        <Content.Background src={
          isDesktop ? background: backgroundMovile
        }/>
        <Content.Logo src={logo}/>
      </Content.Container>
    );
  };
  
  export default Banner;
