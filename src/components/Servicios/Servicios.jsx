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
        
        <Content.IconAgricultura src={agricultura}/>
        <Content.DescAgricultura agric>Agricultura</Content.DescAgricultura>
        
        <Content.IconCrypto src={crypto}/>
        <Content.DescCrypto>Crypto</Content.DescCrypto>
       
        <Content.IconStocks src={stocks}/>
        <Content.DescStocks>Stocks</Content.DescStocks>
        
        <Content.IconStartup src={startups}/>
        <Content.DescStartup>Startups</Content.DescStartup>
        
        <Content.IconComercio src={comerc}/>
        <Content.DescComercio>Comercio exterior</Content.DescComercio>
        
        </Content.Container>
    </Content.Wrapper>
  );
};

export default Servicios;
