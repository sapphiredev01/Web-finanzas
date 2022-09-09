import styled from "styled-components";
import { keyframes } from "styled-components";
import { device } from "../../utils/Variables";
import { Link } from "react-scroll";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Logo = styled.img`
  margin-top: 25vh;
  position: relative;
  width: 50%;
  height: auto;
  z-index: 1;
  @media ${device.tablet} {
    width: 90%;
  }
`;

const idle = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, -30px); }
    100%   { transform: translate(0, -0px); }  
`;

export const StyledLink = styled(Link).attrs(() => ({
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  offset: -70,
}))`
  transition: all 0.3s ease-in-out;
`;

export const RowAnimated = styled.img`
  margin-left: 94vw;
  margin-bottom: -10vh;
  animation: ${idle} 3s ease-in-out infinite;
  width: 5%;
  height: auto;
  z-index: 1;
  cursor: pointer;
  @media ${device.tablet} {
    width: 20%;
    margin-left: 80vw;
    margin-bottom: -15vh;
  }
`;