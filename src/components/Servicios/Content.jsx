/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import agricultura from "../../images/LOGOTIPOS_FINPEI_99.png";
import crypto from "../../images/LOGOTIPOS_FINPEI_100.png";
import stocks from "../../images/LOGOTIPOS_FINPEI_101.png";
import startups from "../../images/LOGOTIPOS_FINPEI_102.png";
import comerc from "../../images/LOGOTIPOS_FINPEI_103.png";

const size = {
  tablet: "768px",
};

const device = {
  tablet: `(max-width: ${size.tablet})`,
};

export const Wrapper = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: var(--blue);
  padding-left: 1.5rem;
  @media (max-width: 880px) {
    text-align: center;
    padding-top: 15rem;
  }
`;

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  height: 15rem;
  width: 15rem;
`;

const StyledTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--blue);
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
  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Content = () => {
  return (
    <Row>
      <Item src={agricultura} alt={"Agricultura"} title={"agricultura"} />
      <Item src={crypto} alt={"Crypto"} title={"crypto"} />
      <Item src={stocks} alt={"Stocks"} title={"stocks"} />
      <Item src={startups} alt={"Startups"} title={"startups"} />
      <Item
        src={comerc}
        alt={"Comercio exterior"}
        title={"comercio exterior"}
      />
    </Row>
  );
};
