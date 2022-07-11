import styled from "styled-components";
import Img from "../../images/business.jpg";
import { device } from "../../utils/Variables";

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
`;

export const Card1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  padding: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000011;
  overflow: hidden;
  @media ${device.tablet} {
    padding: unset;
    padding: 1.5rem;
    margin: 5% 0 20% 0;
    grid-area: 2 / 1 / 2 / 2;
  }
`;

export const Card2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000011;
  overflow: hidden;
  @media ${device.tablet} {
    padding: unset;
    padding: 1.5rem;
    margin: 5% 0 20% 0;
    grid-area: 2 / 2 / 2 / 2;
  }
`;

export const ImageContainer = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  @media ${device.tablet} {
    grid-area: 1 / 1 / 2 / 4;
  }
`;

export const Image = styled.img`
  box-shadow: 0px 20px 30px #00000011;
  content: url(${Img});
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.desktop ? "block" : "none")};
  @media ${device.tablet} {
    display: ${(props) => (props.movil ? "block" : "none")};
  }
`;

export const CardTitle = styled.h1`
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: bold;
  color: var(--blue);
  margin: 0;
  padding: 0;
`;

export const Description = styled.ul`
  font-weight: bold;
  font-size: clamp(13px, 2.5vw, 16px);
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  padding: 0;
`;
