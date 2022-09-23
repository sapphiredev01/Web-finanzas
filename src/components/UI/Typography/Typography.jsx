import styled from "styled-components";
import { device } from "../../../utils/Variables";

export const Title = styled.h1`
  color: var(--blue);
  font-size: clamp(40px, 4vw, 72px);
  text-transform: uppercase;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: clamp(14px, 4vw, 20px);
`;

export const PreTitle = styled.h3`
  color: var(--blue);
  font-size: 2rem;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const NiceTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  @media ${device.tablet} {
    text-align: center;
  }
  @media ${device.LaptopL} {
    font-size: 1.2rem;
  }
`;