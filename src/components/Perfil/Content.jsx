import styled from "styled-components";
import Img from "../../images/business.jpg";
import device from "../../utils/Variables";

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  height: 100%;
  margin-top: 3rem;
  margin-left: 2rem;
  width: auto;
  @media (device.tablet) {
    grid-area: 1 / 1 / 11 / 13;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 7rem 0 0 0;
    width: 100%;
    place-items: center;
  }
  @media (max-height: 667px) and (max-width: 375px) {
   margin-top: 170%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (device.tablet) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: start;
  color: var(--blue);
  letter-spacing: 0px;
  opacity: 1;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const Div1 = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  font-size: .9rem;

  @media ${device.laptop} {
    padding-left: 0;
    padding: 0.8rem;
    padding-top: 0;
    margin: 2rem;
  }
  & h2, p { 
    padding: 0 1rem;
  }
  @media (max-height: 667px) and (max-width: 375px) {
    font-size: .8rem;
  }
`;

export const Div2 = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  font-size: .9rem;
  & h2, p { 
    padding: 0 1rem;
  }

  @media ${device.laptop} {
    padding-left: 0;
    padding: 0.8rem;
    padding-top: 0;
    margin: 2rem;
  }
  @media (max-height: 667px) and (max-width: 375px) {
    font-size: .8rem;
  }
`;

export const Div3 = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  background-image: url(${Img});
  background-size: cover;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Desc = styled.ul`
font-weight: bold;
font-size: 1rem;
@media (max-height: 667px) and (max-width: 375px) {
    font-size: .8rem;
  }
`;