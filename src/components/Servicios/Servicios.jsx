import styled from "styled-components";
import Wrapper from "../UI/Wrapper";
import Pararelogram from "./Pararelogram";
import ServiceBar from "./ServiceBar";



const Title = styled.h1`
  transform: skew(20deg);
  text-align: left;
  font: bold 50px Helvetica;
  color: #ffffff;
  position: absolute;
  top: 140px;
  left: 260px;
`;

const Content = styled.div`
transform: skew(20deg);
  text-align: center;
  font: bold 16px Helvetica;
  color: #ffffff;   
  text-transform: uppercase;
  position: absolute;
  top: 275px;
  left: 120px;
  width: 650px;
  height: 150px;
`;

const Servicios = () => {
  return (
    <Wrapper>
      <Pararelogram>
        <Title>SERVICIOS</Title>
        <Content>
          Somos un equipo experimentado de operadores dedicado a buscar y
          detectar las mejores oportunidades de inversiones en los mercados
          financieros de acciones americanas y mercado de divisas.
        </Content>
        <ServiceBar/>
      </Pararelogram>
    </Wrapper>
  );
};

export default Servicios;
