import styled from "styled-components";
import Img from "../../../public/images/business.jpg";

export const Content = styled.div`
  grid-area: 2 / 1 / 12 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 0;
  padding: 0;
  height:100%;
  width: auto;
`;

export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 3 / 13;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  font: Helvetica Neue;
  text-align: start;
  color: #034e80;
  letter-spacing: 0px;
  opacity: 1;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

export const Div1 = styled.div`
  grid-area: 3 / 1 / 7 / 6;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
`;

export const Div2 = styled.div`
  grid-area: 7 / 1 / 11 / 6;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
`;

export const Div3 = styled.div`
  grid-area: 3 / 6 / 11 / 13;
  box-shadow: 0px 3px 6px #00000029;
  background-image: url(${Img});
  background-size: cover;
`;
