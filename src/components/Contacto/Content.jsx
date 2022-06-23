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

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: auto;
    margin: 0;
    width: 90%;
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
    grid-area: 2 / 1 / 8 / 8;
    width: 100%;
    height: auto;
    margin-top: 5rem;
  }
`;

export const Form = styled.div`
  grid-area: 1 / 4 / 9 / 7;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media ${device.tablet} {
    grid-area: 5 / 1 / 13 / 4;
  }
`;

export const Titulo = styled.h1`
  grid-area: 1 / 4 / 2 / 7;
  text-align: left;
  font-size: 40px;
  font-weight: bold;
  margin-top: 10px;
  color: var(--blue);
`;

export const Info = styled.div`
  grid-area: 2 / 4 / 3 / 7;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const InfoItem = styled.div`
  text-align: left;
  font-size: 16px;
  color: #000000;
  @media ${device.tablet} {
    margin-bottom: 1rem;  
    font-size: 18px;
  }
`;

export const InfoItemAlt = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight:bold;
  color: #000000;
  @media ${device.tablet} {
    display:none;
    margin-bottom: 1rem;  
    font-size: 18px;
  }
`;

export const Subtitle = styled.h2`
  grid-area: 3 / 4 / 4 / 7;
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: var(--blue);
`;

export const InputsLabelDiv = styled.div`
  grid-area: ${(props) => (props.down ? "6 / 4 / 7 / 7" : "4 / 4 / 5 / 7")};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Label = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

export const LabelMovil = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const InputsFormDiv = styled.div`
  grid-area: ${(props) => (props.down ? "7 / 4 / 8 / 7" : "5 / 4 / 6 / 7")};
  display: grid;
  grid-template-columns: ${(props) => (props.down ? "100%" : "1fr 1fr")};
  gap: 2rem;
  @media ${device.tablet} {
    display: flex;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;
  gap: 0;
  }

`;

export const Inputs = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 15px;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const Input2 = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  font-size: 15px ;
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
  font-size: 20px;
  font-weight: bold;
  width: 30%;

  @media ${device.tablet} {
    width: 70%;
    height: 3rem;
  }
`;
