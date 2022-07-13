/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import agricultura from "../../images/LOGOTIPOS_FINPEI_99.png";
import crypto from "../../images/LOGOTIPOS_FINPEI_100.png";
import stocks from "../../images/LOGOTIPOS_FINPEI_101.png";
import startups from "../../images/LOGOTIPOS_FINPEI_102.png";
import agave from "../../images/agave.png";
import { Text } from "../UI/Typography/Typography";
import { Button } from "react-scroll";

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

const Item = ({ src, alt, title }) => {
  return (
    <StyledDiv>
      <StyledImg src={src} alt={alt} />
      <StyledTitle>{title}</StyledTitle>
    </StyledDiv>
  );
};

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Content = () => {
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

  function allFalse(e){
    e.preventDefault
    setAgricultura(false);
    setCrypto(false);
  }

  return (
    <div>
      <Row>
        <div onMouseOver={changeAgricultura} onMouseLeave={allFalse} ><Item src={agricultura} alt={"Agricultura"} title={"Agricultura"} /></div>

        <div onMouseOver={channgeCrypto} onMouseLeave={allFalse}><Item src={crypto} alt={"Crypto"} title={"Crypto"} /></div>

        <Item src={stocks} alt={"Stocks"} title={"Stocks"} />

        <Item src={startups} alt={"Startups"} title={"Boosting"} />

      </Row>

      {showAgricultura && <DivAgricultura />}
      {showCrypto && <DivCrypto />}
    </div>
  );
};

const StyledDinamicDiv = styled.div`
  text-align: justify;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const DinamicImg = styled.img`
  height: 15rem;
  width: auto;
`;

const StyledTitleDinamic = styled.h3`
  font-size: 2rem;
  color: var(--blue);
`;

export const DivAgricultura = () => {
  return (
    <StyledDinamicDiv>
      <StyledTitleDinamic>Agricultura</StyledTitleDinamic>
      <h2>Plantación de agave</h2>
      <ContainerContent>
        <DinamicImg src={agave} alt={"Agave"} />
        <ul>
          <li>
            <Text>
              Crecimiento del +10% en el volumen de producción y ventas para el
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
            <Text>Seguro agrícola para proteger tu inversión</Text>
          </li>
        </ul>
      </ContainerContent>
    </StyledDinamicDiv>
  );
};

export const DivCrypto = () => {
  return (
    <StyledDinamicDiv>
      <StyledTitleDinamic>Crypto</StyledTitleDinamic>
      <h2>Arbitraje, Holding y Stacking</h2>
      <ContainerContent>
        <DinamicImg src={crypto} alt={"crypto"} />
        <ul>
          <li>
            <Text>
              El arbitraje es una estrategia financiera que consiste en
              aprovechar la diferencia de precio entre distintos mercados sobre
              un mismo activo financiero para obtener un beneficio económico sin
              riesgo.
            </Text>
          </li>
          <li>
            <Text>
              El holding consiste en la compra y venta de activos criptográficos
              en el mercado a un horizonte de inversión más largo.
            </Text>
          </li>
          <li>
            <Text>
              Stacking consiste en guardar una parte del portafolio de inversión
              en un activo en específico, y a cambio de eso los intercambios nos
              brindan un interés que asegura nuestros rendimientos
            </Text>
          </li>
        </ul>
      </ContainerContent>
    </StyledDinamicDiv>
  );
};
