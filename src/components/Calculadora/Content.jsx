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
  width: auto;
  margin-top: 4rem;
  @media (max-width: 1050px) {
    margin-left: 4rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    grid-area: 1 / 2 / 13 / 13;
    align-content: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 1rem;
    margin-left: 0;
    margin-bottom: 6rem;
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
    grid-area: 1 / 1 / 1 / 13;
    justify-content: center;
    align-items: center;
  }
`;
export const Title = styled.h1`
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
  grid-area: 4 / 1 / 3 / 12;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 768px) {
    grid-area: 4 / 1 / 1 / 13;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageStyled = styled.img`
  width: 35%;
  height: auto;
  position: relative;
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export const Div1 = styled.div`

  grid-area: 4 / 1 / 11 / 5;
  background-color: var(--blue);
  overflow: hidden;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-area: 2 / 1 / 7 / 13;
    padding-left: 0;
    margin-right: 2rem;
  }
`;
export const Div2 = styled.div`
  grid-area: 4 / 5 / 11 / 13;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    grid-area: 7 / 1 / 18 / 13;
    padding-left: 0;
    margin-right: 2rem;
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

export const Select = styled.select`
  width: 85%;
  height: 20%;
  background: var(--blue);
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  margin-left: 0;

  option {
    color: #fff;
    background: var(--blue);
    display: flex;
    white-space: pre;
    min-height: 20px;
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
  font-size: 0.8rem;
  color: #fff;
  background-color: var(--blue);
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:active {
    background-color: var(#fff);
    color: var(--blue);
  }
  @media (max-width: 1050px) {
    font-size: 0.6rem;
    height: 10%;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
    height: 20%;
    width: 45%;
    margin-top: 1rem;  
  }
`;

export const LabelStyled = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  &:not(:first-child) {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
