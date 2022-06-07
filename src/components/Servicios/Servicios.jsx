import React from "react";
import * as Content from "./Content2";
import agricultura from "../../images/LOGOTIPOS_FINPEI_99.png";
import crypto from "../../images/LOGOTIPOS_FINPEI_100.png";
import stocks from "../../images/LOGOTIPOS_FINPEI_101.png";
import startups from "../../images/LOGOTIPOS_FINPEI_102.png";
import comerc from "../../images/LOGOTIPOS_FINPEI_103.png";

const Servicios = () => {
  return (
    <Content.Wrapper id="servicios">
        <Content.Title>SERVICIOS</Content.Title>
        <Content.Container>
        <Content.Item>
        <Content.IconStyled src={agricultura}/>
        <Content.Description agric>Agricultura</Content.Description>
        </Content.Item>
        <Content.Item>
        <Content.IconStyled src={crypto}/>
        <Content.Description>Crypto</Content.Description>
        </Content.Item>
        <Content.Item>
        <Content.IconStyled src={stocks}/>
        <Content.Description>Stocks</Content.Description>
        </Content.Item>
        <Content.Item>
        <Content.IconStyled src={startups}/>
        <Content.Description>Startups</Content.Description>
        </Content.Item>
        <Content.Item>
        <Content.IconStyled src={comerc}/>
        <Content.Description>Comercio exterior</Content.Description>
        </Content.Item>
        </Content.Container>
    </Content.Wrapper>
  );
};

export default Servicios;
