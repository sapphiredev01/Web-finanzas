import styled from "styled-components";
import { Media, MediaItem } from "../UI/Media/Media";
import { Nav, List, ListElement } from "../UI/Nav/Nav";
import Container from "../UI/Containers/Containers";
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Text = styled.div`
  grid-area: 2 / 1 / 7 / 6;
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

const Inicio = () => {
  return (
    <Container grid>
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
        <div>
          Hexagono
        </div>
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
