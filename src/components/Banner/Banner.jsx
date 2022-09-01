import React from "react";
import * as Content from "./Styles";
import banner from "../../images/banner.png"
import Fade from 'react-reveal/Fade';


const Banner = () => {
  return (
    <Fade>
    <Content.Container id="banner">
        <Content.Background src={banner}>
            <Content.Title>
                <h1>Tu lugar seguro</h1>
                <h2>Para invertir</h2>
            </Content.Title>
            <Content.ButtonDiv>
              <Content.boton><Content.StyledLink to="inicio">Conoce más</Content.StyledLink></Content.boton> 
            </Content.ButtonDiv>
        </Content.Background>
    </Content.Container>
    </Fade>
  );
};

export default Banner;

