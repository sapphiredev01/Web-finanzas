import styled from "styled-components";
import { Media, MediaItem } from "../UI/Media/Media";
import Nav from "../UI/Nav/Nav";
import Container from "../UI/Containers/Containers";
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Content = styled.div`
  grid-area: 2 / 1 / 7 / 6;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Left = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  grid-area: 1 / 3 / 6 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
`;

const Text = styled.div`
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Inicio = () => {
  return (
    <Container grid>
      <Media>
        <a href="https://www.Facebook.com" target="_blank">
          <MediaItem>
            <FaFacebookF />
          </MediaItem>
        </a>
        <a href="https://www.Instagram.com" target="_blank">
          <MediaItem>
            <AiOutlineInstagram />
          </MediaItem>
        </a>
        <a href="https://www.Whatsapp.com" target="_blank">
          <MediaItem>
            <BsWhatsapp />
          </MediaItem>
        </a>
        <a href="https://www.Outlook.com" target="_blank">
          <MediaItem>
            <HiOutlineMail />
          </MediaItem>
        </a>
      </Media>
      <Content>
        <Left>
          <Title>El crecimiento esta asegurado.</Title>
          <Text>
            Especialistas en financiamiento a la medida para su negocio,
            contamos con experiencia apoyando a las empresas a obtener créditos
            a través de instituciones internacionales.
          </Text>
        </Left>
        <Right>
          <div>Hexágono</div>
        </Right>
      </Content>
      <Nav />
    </Container>
  );
};

export default Inicio;
