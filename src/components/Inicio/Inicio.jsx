import styled from "styled-components";
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
`;

const Media = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  text-align: right;
  font-size: 1.5rem;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const MediaItem = styled.div`
  margin: 0 2rem;
  font-size: 2rem;
`;

const Text = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: left;
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
`;

const Content = styled.div`
  text-align: left;
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Nav = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  text-align: center;
`;

const ListElement = styled.li`
  display: inline-block;
`;

const Inicio = () => {
  return (
    <Container>
      <Media>
        <MediaItem>
          <FaFacebookF />
        </MediaItem>
        <MediaItem>
          <AiOutlineInstagram />
        </MediaItem>
        <MediaItem>
          <BsWhatsapp />
        </MediaItem>
        <MediaItem>
          <HiOutlineMail />
        </MediaItem>
      </Media>
      <Text>
        <Title>El crecimiento esta asegurado.</Title>
        <Content>
          Especialistas en financiamiento a la medida para su negocio, contamos
          con experiencia apoyando a las empresas a obtener créditos a través de
          instituciones internacionales.
        </Content>
      </Text>
      <Nav>
        <List>
          <ListElement>INICIO</ListElement>
          <ListElement>NOSOTROS</ListElement>
          <ListElement>SERVICIOS</ListElement>
          <ListElement>PAQUETES</ListElement>
          <ListElement>CALCULADORA</ListElement>
          <ListElement>CONTACTO</ListElement>
        </List>
      </Nav>
    </Container>
  );
};

export default Inicio;
