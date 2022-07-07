import styled from "styled-components";
import device from "../../utils/Variables";

export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
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

  @media ${device.tablet} {
    width: 100%;
    height: auto;
    margin-top: 5rem;
  }
  @media (max-height: 667px) and (max-width: 375px) {
   margin-top: 12rem;
  }
`;

export const Form = styled.div`
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media ${device.tablet} {
  }
`;

export const Titulo = styled.h1`
  text-align: left;
  font-size: 40px;
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
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px;
  font-size: 20px;
  font-weight: bold;
  width: 30%;

  @media ${device.tablet} {
    width: 70%;
    height: 3rem;
  }
`;