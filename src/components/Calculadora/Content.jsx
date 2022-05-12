import styled from "styled-components";

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 0;
  padding: 0;
  height: 100%;
  margin-left: 2rem;
  margin-bottom: 5rem;
  width: auto;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 11 / 13;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    margin: 0;
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 3 / 12;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    grid-area: 1 / 1 / 1 / 1;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DivImage = styled.div`
  grid-area: 5 / 1 / 3 / 12;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageStyled = styled.img`
  width: 35%;
  height: auto;
  position: relative;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const Div1 = styled.div`
  font-family: "Montserrat", sans-serif;
  grid-area: 5 / 1 / 11 / 5;
  background-color: var(--blue);
  overflow: hidden;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
export const Div2 = styled.div`
  font-family: "Montserrat", sans-serif;
  grid-area: 5 / 5 / 11 / 13;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: auto;
`;

export const InputStyled = styled.input`
  width: 80%;
  height: 10%;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  margin-top: 1rem;
  padding: 0.5rem;
  margin: 0;
  font-size: 1rem;
  color: #fff;
  background-color: var(--blue);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonStyled = styled.button`
  width: 60%;
  height: 10%;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  margin-top: 3rem;
  font-size: .8rem;
  color: #fff;
  background-color: var(--blue);
  @media (max-width: 768px) {
    font-size: .5rem;
  }
`;

export const LabelStyled = styled.label`
  font-size: .9rem;
  font-weight: bold;
  color: #fff;
  &:not(:first-child) {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
