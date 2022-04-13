import styled from "styled-components";
import Wrapper from "../UI/Wrapper";
import { Container, MediaItem } from "../UI/Media";
import { Hexagon, Image } from "./Hexagon";
import { FaFacebookF, AiOutlineInstagram, BsWhatsapp, HiOutlineMail } from "react-icons/all";

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
    <Wrapper>
      <Container>
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
      </Container>
      <Hexagon>
        <Image src="src/images/business.jpg" />
      </Hexagon>
      <Title>El crecimiento esta asegurado.</Title>
      <Content>
        Especialistas en financiamiento a la medida para su negocio , contamos
        con experiencia apoyando a las empresas a obtener créditos a través de
        instituciones internacionales.
      </Content>

    </Wrapper>
  );
};

export default Inicio;
