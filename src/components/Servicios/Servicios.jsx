import styled from "styled-components";
import ServiceBar from "./ServiceBar";
import Container from "../UI/Containers/Containers";

const Pararelogram = styled.div`
  width: 70%;
  height: 617px;
  transform: skew(-20deg);
  background: #034e80;
  margin-top: 5px;
  margin-left: 200px;
  grid-area: 1 / 1 / 6 / 6;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Title = styled.h1`
  grid-area: 2 / 3 / 3 / 5;
  transform: skew(20deg);
  text-align: left;
  font: bold 50px Helvetica;
  color: #ffffff;
`;

const Content = styled.div`
  grid-area: 3 / 2 / 4 / 6;
  transform: skew(20deg);
  text-align: center;
  font: bold 16px Helvetica;
  color: #ffffff;
  text-transform: uppercase;
  width: 650px;
  height: 150px;
`;


const Servicios = () => {
  return (
    <Container grid>
      <Pararelogram>
        <Title>SERVICIOS</Title>
        <Content>
          Somos un equipo experimentado de operadores dedicado a buscar y
          detectar las mejores oportunidades de inversiones en los mercados
          financieros de acciones americanas y mercado de divisas.
        </Content>
        <ServiceBar />
      </Pararelogram>
    </Container>
  );
};

export default Servicios;
