import styled, {keyframes} from "styled-components";
import { device } from "../../../utils/Variables";

export const Container = styled.div`
  width: 85vw;
  margin-left: 15vw;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 100vw;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: ${(props) => (props.auto ? "auto" : "100vh")};
  align-content: center;
  justify-content: center;
  
`;

export const Separator = styled.hr`
  width: 90%;
  height: 0.5rem;
  background-color: black;
  border-radius: 1rem;
  margin: auto;  
`;
