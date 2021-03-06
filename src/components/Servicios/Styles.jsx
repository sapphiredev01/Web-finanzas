/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import agave from "../../images/agave.png";
import carretera from "../../images/carretera.jpg";
import stocks2 from "../../images/stocks2.jpg";
import stocks3 from "../../images/Stocks3.jpg";
import hodl from "../../images/hodl.jpg";
import arbitrage from "../../images/arbitrage.jpg";
import staking from "../../images/staking.png";
import { Text } from "../UI/Typography/Typography";
import { device } from "../../utils/Variables";
import { fadeInUp, fadeInRight, zoomIn, fadeOut, fadeIn, lightSpeedIn } from "react-animations";
import { useDesktop } from "../../hooks/useDesktop";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  height: 15rem;
  width: 15rem;
  @media (max-width: 768px) {
    height: 10rem;
    width: 10rem;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--blue);
  margin-top: -20%;
  @media (max-width: 880px) {
    font-size: 1rem;
  }
`;

export const Item = ({ src, alt, title }) => {
  return (
    <StyledDiv>
      <StyledImg src={src} alt={alt} />
      <StyledTitle>{title}</StyledTitle>
    </StyledDiv>
  );
};

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/*export const Content = () => {
  const [showAgricultura, setAgricultura] = useState(false);
  const [showCrypto, setCrypto] = useState(false);

  function changeAgricultura(e) {
    e.preventDefault();
    setAgricultura(true);
    setCrypto(false);
  }

  function channgeCrypto(e){
    e.preventDefault
    setAgricultura(false);
    setCrypto(true);
  }

  function hideAll(e){
    e.preventDefault
    setAgricultura(false);
    setCrypto(false);
  }

  return (
    <div>
      <Row>
        <div onMouseOver={changeAgricultura} onMouseLeave={hideAll} ><Item src={agricultura} alt={"Agricultura"} title={"Agricultura"} /></div>

        <div onMouseOver={channgeCrypto} onMouseLeave={hideAll}><Item src={crypto} alt={"Crypto"} title={"Crypto"} /></div>

        <Item src={stocks} alt={"Stocks"} title={"Stocks"} />

        <Item src={startups} alt={"Startups"} title={"Boosting"} />

      </Row>

      {showAgricultura && <DivAgricultura />}
      {showCrypto && <DivCrypto />}
    </div>
  );
};*/

const downAnimation = keyframes`${fadeInUp}`;
const rightAnimation = keyframes`${fadeInRight}`;
const ZoomAnimation = keyframes`${zoomIn}`;
const FadeOutAnimation = keyframes`${fadeOut}`;
const FadeAnimation = keyframes`${fadeIn}`;
const AgroAnimation = keyframes`${lightSpeedIn}`;

export const divAnimationRow = styled.div`
  animation: 1s ${FadeAnimation};
`;
export const divAnimationAgro = styled.div`
  transition: all 0.5s ease-in-out;
`;


const DinamicDivAgro = styled.div`
  text-align: justify;
  animation: 1s ${rightAnimation};
  width: 80vw;
  @media ${device.laptopL} {
    width: 50vw;
  }
  @media ${device.tablet} {
    width: auto;
  }
`;
const ContainerAgro = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const DinamicDivCrypto = styled.div`
  text-align: center;
  animation: 1s ${downAnimation};
`;
const ContainerCrypto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
const DescriptionCrypto = styled.p`
  animation: 0.5s ${ZoomAnimation};
  font-size: 1.5rem;
`;

const DinamicDivImages = styled.div`
  text-align: center;
  animation: 1s ${downAnimation};
`;

const StyledTitleDinamic = styled.h3`
  font-size: 2rem;
  color: var(--blue);
`;

const DinamicImg = styled.img`
  height: 15rem;
  width: auto;
`;


export const DivAgricultura = () => {
  return (
    <DinamicDivAgro>
      <StyledTitleDinamic>Agricultura</StyledTitleDinamic>
      <h2>Plantaci??n de agave</h2>
      <ContainerAgro>
        <DinamicImg src={agave} alt={"Agave"} />
        <ul>
          <li>
            <Text>
              Crecimiento del +10% en el volumen de producci??n y ventas para el
              2022
            </Text>
          </li>
          <li>
            <Text>
              Cumpliendo normas y lineamientos del CRT (Consejo Regulador de
              Tequila)
            </Text>
          </li>
          <li>
            <Text>Seguro agr??cola para proteger tu inversi??n</Text>
          </li>
        </ul>
      </ContainerAgro>
    </DinamicDivAgro>
  );
};

export const DivCrypto = () => {
  const isDesktop = useDesktop();
  const [showHodl, setHodl] = useState(false);
  const [showArbitrage, setArbitrage] = useState(false);
  const [showStaking, setStaking] = useState(false);

  function changeHodl(e) {
    e.preventDefault();
    setHodl(true);
    setArbitrage(false);
    setStaking(false);
  }

  function changeArbitrage(e) {
    e.preventDefault();
    setHodl(false);
    setArbitrage(true);
    setStaking(false);
  }

  function changeStaking(e) {
    e.preventDefault();
    setHodl(false);
    setArbitrage(false);
    setStaking(true);
  }

  return (
    <DinamicDivCrypto>
      <StyledTitleDinamic>Crypto</StyledTitleDinamic>
      <h3>Estrategia muy diversificada para minimizar riesgos</h3>
      <h2>Portafolio</h2>
      {isDesktop && 
      <ContainerCrypto>
        <h2>Hodl</h2>
        <h2>Arbitrage</h2>
        <h2>Stacking</h2>
      </ContainerCrypto>
      }
      <ContainerCrypto>
        <DinamicImg src={hodl} alt={"Hodl"} onMouseEnter={changeHodl}/>
        {showHodl && !isDesktop ?
          <><DescriptionCrypto>El holding consiste en la compra y venta de activos criptogr??ficos en el 
          mercado a un horizonte de inversi??n m??s largo.</DescriptionCrypto></> : <></>}

        <DinamicImg src={arbitrage} alt={"Arbitrage"} onMouseEnter={changeArbitrage}/>
        {showArbitrage && !isDesktop ?
          <><DescriptionCrypto>El arbitraje es una estrategia financiera que consiste en aprovechar la 
          diferencia de precio entre distintos mercados sobre un mismo activo 
          financiero para obtener un beneficio econ??mico sin riesgo.</DescriptionCrypto></> : <></>}

        <DinamicImg src={staking} alt={"Staking"} onMouseEnter={changeStaking}/>
        {showStaking && !isDesktop ?
          <><DescriptionCrypto>Stacking consiste en guardar una parte del portafolio de inversi??n en 
          un activo en espec??fico, y a cambio de eso los intercambios nos 
          brindan un inter??s que asegura nuestros rendimientos</DescriptionCrypto></> : <></>}

      </ContainerCrypto>
          {showHodl && isDesktop ?
          <><DescriptionCrypto>El holding consiste en la compra y venta de activos criptogr??ficos en el 
          mercado a un horizonte de inversi??n m??s largo.</DescriptionCrypto></> : <></>}

          {showArbitrage && isDesktop ?
          <><DescriptionCrypto>El arbitraje es una estrategia financiera que consiste en aprovechar la 
          diferencia de precio entre distintos mercados sobre un mismo activo 
          financiero para obtener un beneficio econ??mico sin riesgo.</DescriptionCrypto></> : <></>}

          {showStaking && isDesktop ?
          <><DescriptionCrypto>Stacking consiste en guardar una parte del portafolio de inversi??n en 
          un activo en espec??fico, y a cambio de eso los intercambios nos 
          brindan un inter??s que asegura nuestros rendimientos</DescriptionCrypto></> : <></>}
    </DinamicDivCrypto>
  );
};

const InfoImg = styled.img`
  height: auto;
  width: ${(props) => (props.stocks ? "40vw" : "60vw")};
  @media ${device.tablet} {
    width: 80vw;
  }
`;

export const DivStocks = () => {
  return (
    <DinamicDivImages>
      <StyledTitleDinamic>Stocks</StyledTitleDinamic>
      <ContainerCrypto>
        <InfoImg stocks src={stocks2} alt={"Stocks"} />
        <InfoImg stocks src={stocks3} alt={"Stocks"} />
      </ContainerCrypto>
    </DinamicDivImages>
  );
};

export const DivBoosting = () => {
  return (
    <DinamicDivImages>
      <StyledTitleDinamic>Boosting</StyledTitleDinamic>
      <InfoImg src={carretera} alt={"Boosting"} />
    </DinamicDivImages>
  );
};
