/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../../utils/Variables";
import { fadeInUp, fadeInRight, zoomIn, fadeOut, fadeIn, lightSpeedIn, fadeInDown } from "react-animations";
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

const InfoButton = styled.button`
  background-color: var(--blue);
  border: 1px solid var(--blue);
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  &:hover {
    background-color: var(--white);
    color: var(--blue);
  }
  @media ${device.laptopL} {
    font-size: 1rem;
  }

`;


export const Item = ({ src, alt, title, changerModal, estateModal }) => {
  return (
    <StyledDiv>
      <StyledImg src={src} alt={alt} />
      <StyledTitle>{title}</StyledTitle>
      <InfoButton onClick={() => changerModal(!estateModal)}>Ver mas</InfoButton>
    </StyledDiv>
  );
};

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  z-index: 1;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

//Estilos para los modales
const FadeAnimation = keyframes`${fadeIn}`;
const downAnimation = keyframes`${fadeInDown}`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  animation: 1s ${downAnimation};
  width: 60vw;
  min-height: 50vh;
  background-color: var(--white);
  position: relative;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  @media ${device.tablet}{
    width: 80vw;
    min-height: 30vh;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-size: 3rem;
    color: var(--blue);
    font-weight: lighter;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: var(--blue);
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
   background: #f2f2f2;
  }
`;

//Estilos para el contenido de los modales}

export const DinamicImg = styled.img`
  height: 15rem;
  width: auto;
`;

export const InfoImg = styled.img`
  height: auto;
  width: ${(props) => (props.crypto ? "50vw" : "60vw")};
  @media ${device.tablet} {
    width: 80vw;
    margin-bottom: 0.5rem;
  }
`;

export const ContainerInfoModal = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: space-around;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
