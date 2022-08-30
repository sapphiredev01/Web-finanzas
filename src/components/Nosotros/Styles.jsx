import styled from "styled-components";
import { device } from "../../utils/Variables";

export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const ContentInfo = styled.div`
  flex-basis: 50%;
  text-align: justify;
  @media ${device.tablet} {
    margin-left: 0;
    text-align: center;
  }
`;

export const ContentImages = styled.div`
  flex-basis: 40%;
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 20rem;
  margin-top: -8rem;
  margin-left: 5rem;
  @media ${device.laptopL} {
    height: 12rem;
    margin-top: -4rem;
    margin-left: 6rem;
  }
`;

export const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 30rem;
  margin-bottom: -10%;
  margin-right: 40%;
  @media ${device.laptopL} {
    height: 20rem;
    margin-right: 1rem;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;  
  flex-direction: row;
  border-bottom: 2px solid #428ae9;
  width: 50%;
  margin: 2rem ;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.p`
  text-align: justify;
  font-weight: bold;
  font-size: 1rem;
  @media ${device.laptopL} { 
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

export const Icon = styled.img`
  background-image: url(${(props) => props.src});
  height: 3rem;
  width: auto;
  margin-right: 1rem;
  margin-top: 1rem;
  @media ${device.tablet} {
    height: 3rem;
    width:  3rem;
    align-self: center;
  }
`;

export const Icon2 = styled.img`
  background-image: url(${(props) => props.src});
  height: 4rem;
  width: auto;
  margin-right: 1rem;
  margin-top: 1rem;
  @media ${device.tablet} {
    height: 4rem;
    width:  4rem;
    align-self: center;
  }
`;

export const boton = styled.button`
  width: 30%;
  height: auto;
  color: white;
  background: var(--blue) 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000011;
  border: 1px solid #00000033;
  font-size: 1.5rem;
  padding: 1rem;
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
    width: 70%;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 2rem;
    padding: 0.5rem;
  }
`;

export const ContainerIdeo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 20px 50px #00000011;
  text-align: justify;
  padding: 2rem;
  width: 30%;
  height: 15rem;
  margin: 1rem;
  @media ${device.laptopL} {
    height: 15rem;
  }
  @media ${device.tablet} {
    width: 80%;
  }
`;

export const IdeoText = styled.p`
  font-size: 1.2rem;
  font-weight: ${(props) => (props.title ? "bold" : "normal")};
  @media ${device.laptopL} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`;