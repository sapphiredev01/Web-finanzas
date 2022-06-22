import styled from "styled-components";
import { keyframes } from "styled-components";

const size = {
  tablet: "768px",
};
const device = {
  tablet: `(max-width: ${size.tablet})`,
};

export const Container = styled.div`
  grid-area: 1 / 1 / 13 / 13;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  z-index: -1;
  place-items: center;
  height: 100vh;
`;

const idle = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, -30px); }
    100%   { transform: translate(0, -0px); }  
`;

export const Logo = styled.img`
  grid-area: 2 / 2 / 4 / 4;

  //animation: ${idle} 3s ease-in-out infinite;
  width: 100%;
  height: auto;
  z-index: 1;
  
  @media ${device.tablet} {
    width: 150%;
    left: -20%;
    margin-top: 50%;
  }
`;
