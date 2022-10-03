import styled from "styled-components";
import { device } from "../../utils/Variables";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1.5rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled.img`
  width: 30%;
  height: auto;
  @media ${device.tablet} {
    visibility: hidden;
  }
`;

export const Div1 = styled.div`
  background-color: none;
  border-radius: 0.5rem;
  height: 25rem;
  padding: 1rem;
  @media ${device.laptopL} {
    height: 20rem;
  }
`;
export const Div2 = styled.div`
  box-shadow: 0px 20px 30px #00000011;
  padding: 1rem;
  overflow: hidden;
  height: 25rem;
  border-radius: 0.5rem;
  @media ${device.laptopL} {
    height: 20rem;
  }
`;

export const FormStyled = styled.form`
  display: grid;
  place-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

export const InputStyled = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid var(--white);
  font-size: 1rem;
  width: 100%;
  color: var(--white);
  background-color: var(--blue);
`;

export const InputRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1.1rem;
  border-radius: 0.5rem;
  background: var(--blue);
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  overflow: hidden;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #547b99 ;
    cursor: pointer;
    border: 2px solid var(--white);
    box-shadow: -407px 0 0 400px #547b99;
  }

`;

export const Select = styled.select`
  background: var(--blue);
  color: var(--white);
  outline: none;
  border: none;
  width: 100%;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: .8rem;
  }

  option {
    color: var(--white);
    background: var(--blue);
  }
`;

export const ButtonStyled = styled.button`
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  background-color: var(--blue);
  transition: all 0.3s ease-in-out;
  padding: 0.5rem 1rem;
  cursor: pointer;
  box-shadow: 0px 20px 30px #00000011;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    background-color: var(#fff);
  }
`;

export const LabelStyled = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  margin-bottom: -1rem;
`;

export const LabelInput = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--blue);
  margin-top: -2rem;
`;