import styled from "styled-components";
import { device } from "../../utils/Variables";


export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
  }
`;

export const Card = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  padding: 1rem;
  box-shadow: 0px 20px 30px #00000011;
  overflow: hidden;
  height: 35rem;
  width: 100%;
  @media ${device.tablet} {
    padding: 0;
    margin-top: 2rem;
    width: 100%;
    height: auto;

  }
  @media ${device.laptopL} {
    width: 80%;
    height: auto;
  }
`;

export const TitleDescription = styled.h1`
  margin-top: 30rem;
  font-weight: bold;
  font-size: 3rem;
  color: white;
  text-align: center;
  @media ${device.tablet} {
    margin-top: 20rem;
  }
  @media ${device.laptopL} {
    margin-top: 20rem;
  }
`;

export const Description = styled.ul`
  font-weight: bold;
  font-size: 1rem;
  li{
    padding: 0.3rem;
  }

  @media ${device.laptopL} {
  }
`;

export const Icon = styled.img`
  background-image: url(${(props) => props.src});
  height: 4rem;
  width: auto;
  align-self: center;
  @media ${device.tablet} {
    height: 4rem;
    width:  4rem;
  }
`;