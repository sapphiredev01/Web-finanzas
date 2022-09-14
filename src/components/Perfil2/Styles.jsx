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
  height: auto;
  width: 80%;
  @media ${device.tablet} {
    padding: 0;
    margin-top: 2rem;
    width: 100%;
  }
`;

export const TitleDescription = styled.h1`
  margin-top: 20rem;
  font-weight: bold;
  font-size: 3rem;
  color: var(--blue);
  @media ${device.tablet} {
  }
`;

export const Description = styled.ul`
  color: white;
  background-color: #00000099;
  font-weight: bold;
  font-size: 1rem;
  li{
    padding: 0.3rem;
  }

  @media ${device.laptopL} {
  }
`;
