import styled from "styled-components";
import { Media, MediaItem } from "../UI/Media/Media";
import Container from "../UI/Containers/Containers";
import { Nav, Link, Effect } from "../UI/Nav/Nav";
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Title = styled.h1`
  text-align: left;
  font: bold 50px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  position: relative;
  top: 45px;
  left: 100px;
  width: 400px;
  height: 150px;
`;

const Content = styled.div`
grid-area: 2 / 1 / 7 / 6; 
  text-align: left;
  font: bold 16px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  position relative;
  top: 50px;
  left: 80px;
  width: 525px;
  height: 150px;
`;

const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 200px;
`;

const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 300px;
  position: absolute;
  right: 75px;
  bottom: 200px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-right: 200px;
`;

const Nosotros = () => {
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
      <Title>Los expertos que necesitas.</Title>
      <Content>
        Somos un equipo de operadores experimentados, comprometidos con buscar y
        detectar las mejores Oportunidades de inversión de mercado, condiciones
        financieras de las acciones y los mercados estadounidenses de divisas.
      </Content>
      <ImgBox>
        <ImageHor src="src/images/business.jpg" />
        <ImageVer src="src/images/business4.jpg" />
      </ImgBox>
      <Nav>
        <Link>Inicio</Link>
        <Link>Nosotros</Link>
        <Link>Servicios</Link>
        <Link>Paquetes</Link>
        <Link>Calculadora</Link>
        <Link>Contacto</Link>
        <Effect />
      </Nav>
    </Container>
  );
};

export default Nosotros;  
