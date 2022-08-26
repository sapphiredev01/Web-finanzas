import React from "react";
import * as Content from "./Styles";
import banner from "../../images/carretera.jpg"

const Banner = () => {
  return (
    <Content.Container id="banner">
        <Content.Background src={banner}>
            <Content.Title>
                <h1>Tu lugar seguro</h1>
                <h2>Para invertir</h2>
            </Content.Title>
            <Content.ButtonDiv>
              <Content.boton>Conoce más</Content.boton> 
            </Content.ButtonDiv>
        </Content.Background>
    </Content.Container>
  );
};

export default Banner;

