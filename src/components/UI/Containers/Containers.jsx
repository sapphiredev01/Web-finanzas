import styled from "styled-components";
import { device } from "../../../utils/Variables";

export const Container = styled.div`
  width: 85vw;
  margin-left: 15vw;
  @media ${device.tablet} {
    width: 100vw;
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: ${(props) => (props.auto ? "auto" : "100vh")};
`;
