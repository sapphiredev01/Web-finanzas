import styled from "styled-components";
import { device } from "../../utils/Variables";

export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 5rem 0;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const ImageSquare = styled.img`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 40vw;
  height: auto;
  object-fit: cover;
  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }
`;

export const Form = styled.div`
  padding: 2rem;
  box-shadow: 0px 20px 30px #00000011;
  @media ${device.tablet} {
  }
`;

export const Titulo = styled.h1`
  text-align: left;
  font-size: clamp(34px, 4vw, 72px);
  font-weight: bold;
  margin-top: 10px;
  color: var(--blue);
`;

export const Info = styled.div`

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
    margin-bottom: 1rem;  
    font-size: 18px;
  }
`;

export const Subtitle = styled.h2`
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: var(--blue);
`;

export const InputsLabelDiv = styled.div`
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
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonSend = styled.button`
  background: #ffffff;
  border: 1px solid var(--blue);
  box-shadow: 0px 20px 30px #00000011;
  font-size: 20px;
  font-weight: bold;
  width: 30%;
  transition: all 0.3s ease-in-out;

  :hover {
    background: var(--blue);
    color: #ffffff;
    transform: translateY(-3px);
  }

  @media ${device.tablet} {
    width: 70%;
    height: 3rem;
  }
`;
