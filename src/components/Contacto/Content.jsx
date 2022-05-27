import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: auto;
    margin: 0;
  }
`;

export const ImageSquare = styled.img`
  grid-area: 1 / 1 / 9 / 4;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    grid-area: 1 / 1 / 5 / 4;
    width: 100%;
    height: auto;
    margin-top: 18rem;
  }
`;

export const Form = styled.div`
  grid-area: 1 / 4 / 9 / 7;
  padding: 1rem;

  @media ${device.tablet} {
    grid-area: 5 / 1 / 13 / 4;
  }
`;

export const Titulo = styled.h1`
  grid-area: 1 / 4 / 2 / 7;
  text-align: left;
  font: bold 40px Helvetica;
  margin-left: 15px;
  margin-top: 10px;
  color: #034e80;
`;

export const Info = styled.div`
  grid-area: 2 / 4 / 3 / 7;
  margin: 0px 15px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const InfoItem = styled.div`
  text-align: left;
  font: 16px Helvetica;
  font-weight: ${(props) => (props.alt ? "bold" : "normal")};
  color: #000000;
  @media ${device.tablet} {
    display:${(props) => (props.alt ? "none" : "")};
    margin-bottom: 1rem;  
    font-size: 18px;
  }
`;

export const Subtitle = styled.h2`
  grid-area: 3 / 4 / 4 / 7;
  text-align: left;
  font: bold 25px Helvetica;
  margin-left: 15px;
  color: #034e80;
`;

export const InputsLabelDiv = styled.div`
  grid-area: ${(props) => (props.down ? "6 / 4 / 7 / 7" : "4 / 4 / 5 / 7")};
  margin: 0px 15px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Label = styled.p`
  text-align: left;
  font: bold 16px Helvetica;
  color: #000000;
`;

export const LabelMovil = styled.p`
  text-align: left;
  font: bold 16px Helvetica;
  color: #000000;
  display: none;
  margin-left: ${(props) => (props.middle ? "0" : "15px")};
  @media ${device.tablet} {
    display: flex;
  }
`;

export const InputsFormDiv = styled.div`
  grid-area: ${(props) => (props.down ? "7 / 4 / 8 / 7" : "5 / 4 / 6 / 7")};
  margin: 0px 15px;
  display: flex;
  justify-content: space-between;
  text-align: left;

  @media ${device.tablet} {
    flex-direction: column;
  }

`;

export const Inputs = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font: 15px Helvetica;
`;

export const Input2 = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  font: 15px Helvetica;
`;

export const ButtonDiv = styled.div`
  grid-area: 8 / 4 / 9 / 7;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonSend = styled.button`
  background: #ffffff;
  border: 1px inset #707070;
  font: bold 20px Helvetica;
  width: 30%;

  @media ${device.tablet} {
    width: 70%;
  }
`;
