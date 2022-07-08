import styled from "styled-components";
import device from "../../utils/Variables";

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
  background-color: var(--blue);
  border-radius: 0.5rem;
  box-shadow: 0px 20px 30px #00000011;
  height: 25rem;

  @media ${device.tablet} {
  }
`;
export const Div2 = styled.div`
  box-shadow: 0px 20px 30px #00000011;
  padding: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 25rem;
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
  @media (max-width: 768px) {
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
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  color: var(--white);
  background-color: var(--blue);
  transition: all 0.3s ease-in-out;
  padding: 0.5rem 1rem;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    background-color: var(#fff);
  }
`;

export const LabelStyled = styled.label`
  font-weight: bold;
  font-size: clamp(1rem, 1vw, 1.2rem);
  color: var(--white);
`;
