import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: left;
  font: bold 50px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  position: relative;
  top: 90px;
  left: 130px;
  width: 400px;
  height: 150px;
`;

const Content = styled.div`
  text-align: left;
  font: bold 16px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  text-transform: lowercase;
  opacity: 1;
  position relative;
  top: 100px;
  left: 130px;
  width: 525px;
  height: 150px;
`;

const imgHor = styled.img`
width="300px";
height="200px";
border: 1px solid blue;
position: absolute;
`;

const Nosotros = () => {
  return (
    <Container>
      <Title>Los expertos que necesitas.</Title>
      <Content>
        Somos un equipo de operadores experimentados, comprometidos con buscar y
        detectar las mejores Oportunidades de inversión de mercado, condiciones
        financieras de las acciones y los mercados estadounidenses de divisas.
      </Content>
      <imgHor />
    </Container>
  );
};

export default Nosotros;
