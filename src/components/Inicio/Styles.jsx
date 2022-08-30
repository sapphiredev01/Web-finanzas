import styled from "styled-components";
import { device } from "../../utils/Variables";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  @media ${device.tablet} {
    width: 80%;
    gap: unset;
    grid-template-columns: 1fr;
  }
`;

export const divContainer = styled.div`
  margin: auto;
  width: 35vw;
  @media ${device.tablet} {
    width: 80vw;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

export const ImageBus = styled.img`
  box-shadow: 0px 20px 30px #00000011;
  content: url(${props => props.src});
  margin-left: 20%;
  width: 80%;
  height: auto;
  @media ${device.tablet} {
    margin: auto;
    width: 100%;
  }
`;

export const Experience = styled.div`
  width: 25%;
  background-color: var(--blue);
  color: white;
  font-size: 2rem;
  padding: 3rem;
  margin-bottom: -15rem;
  position: relative;
  text-align: center;

  @media ${device.tablet} {
    width: 50%;
    margin: auto;
    margin-left: 40%;
    margin-bottom: -10%;
  }

  @media ${device.laptopL} {
    font-size: 1.5rem;
    padding: 2rem;
  }
`;
