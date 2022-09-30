import styled from "styled-components";
import { device } from "../../utils/Variables";


export const WrapperFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    @media ${device.tablet} {
        flex-direction: column;
    }   
`;

export const infoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13%;
    height: auto;
    border: 3px dashed #cecece ;
    padding: 1rem;
    margin: 0 1rem;
    @media ${device.tablet} {
        width: 60%;
        flex-direction: column;
        margin: 1rem 0;
    }
    @media ${device.laptopL} {
      width: 20%;
    }
    &:hover {
    border-color: #209cdc;
    transition: 0.2s ease-in-out;

    img{
        transition: 0.2s ease-in-out;
        border-color: #209cdc;
    }

  }
`;

export const contactoIcon = styled.img`
    width: auto;
    height: 3rem;
    object-fit: cover;
    border: 2px dashed #cecece ;
    padding: 2rem;
    border-radius: 4rem;
    @media ${device.tablet} {
        height: 3rem;          
    } 
`;

export const contactoTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

export const Info = styled.p`
    text-align: center;
    font-size: 1rem;
    color: #5e5e5e;
    font-weight: 600;
    @media ${device.tablet} {

    }
`;

export const Input = styled.input`
  border: 2px solid #cecece;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 1rem;
  width: 25%;

  &:focus {
    outline: none;
    transition: 0.2s ease-in-out;
    border-color: var(--blue);
    }
    
  @media ${device.tablet} {
    width: 80%;
    margin: 1rem 0;
  }
`;

export const InputArea = styled.textarea`
  border: 2px solid #cecece;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  width: 85%;
  height: 6rem;
  &:focus {
    outline: none;
    transition: 0.2s ease-in-out;
    border-color: var(--blue);
    }
`;

export const Boton = styled.button`
  width: 30%;
  height: auto;
  color: white;
  background: var(--blue) 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000011;
  border: 1px solid #00000033;
  font-size: 1.5rem;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
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