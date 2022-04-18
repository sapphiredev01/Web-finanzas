import styled from "styled-components";
import {
  BsFillPeopleFill,
  MdOutlineWatchLater,
  FaLock,
  ImMap,
} from "react-icons/all";

const Container = styled.div`
  transform: skew(20deg);
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  color: #ffffff;  
  position: absolute;
  top: 380px; 
`;

const Item = styled.div`
  margin: 0 2rem;
  font-size: 6rem;
`;

const Description = styled.h3`
text-transform: uppercase;
font-size: 15px;
margin-top:-18px;
`;


const ServiceBar = () => {
  return (
    <Container>
      <Item>
        <BsFillPeopleFill />
        <Description>SOPORTE Y ATENCIÓN 24/7</Description>
      </Item>
      <Item>
        <MdOutlineWatchLater />
        <Description>Experiencia en los mercados financieros</Description>
      </Item>
      <Item>
        <FaLock />
        <Description>Privacidad y respaldo en tus inversiones</Description>
      </Item>
      <Item>
        <ImMap />
        <Description>CLIENTES EN TODO EL PAIS</Description>
      </Item>
    
    </Container>
  );
};

export default ServiceBar;
