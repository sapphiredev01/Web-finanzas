import styled from "styled-components";
import { device } from "../../utils/Variables";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Title = styled.div`
  width: 50%;
  height: auto;
  text-align: left;
  z-index: 1;
  margin-left: 10%;
  margin-top: 10%;
  font-size: 2rem;
  h1 {
    font-weight:lighter;
  }
  h2 {
    font-weight:bolder;
    font-size: 4rem;
  }
  @media ${device.tablet} {
    width: 100%;
    text-align: center;
    margin: 0;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
`;

export const ButtonDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: left;
  margin-left: 12%;
  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`;

export const boton = styled.button`
  width: 30%;
  height: auto;
  color: white;
  background: var(--blue) 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000011;
  border: 1px solid #00000033;
  border-radius: 15px;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  @media ${device.laptopL} {
   width: 50%;
  }
  @media ${device.tablet} {
    width: 80%;
    font-size: 2rem;
  }
`;
