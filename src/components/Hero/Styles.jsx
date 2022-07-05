import styled from "styled-components";
import device from "../../utils/Variables";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Logo = styled.img`
  width: 50%;
  height: auto;
  z-index: 1;
  @media ${device.tablet} {
    width: 90%;
  }
`;
