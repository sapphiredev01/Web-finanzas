import styled from "styled-components";
import { Media, MediaItem } from "../UI/Media/Media";
import Container from "../UI/Containers/Containers";
import Nav from "../UI/Nav/Nav";
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Content = styled.div`
  grid-area: 2 / 1 / 7 / 6;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 0fr);
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

const Middle = styled.div`
  grid-area: 2 / 3 / 4 / 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Right = styled.div`
  grid-area: 1 / 5 / 6 / 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Title = styled.h1`
  text-align: left;
  font: bold 50px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  width: 400px;
  height: 150px;
  margin-left: 60px;
`;

const Text = styled.div`
  text-align: left;
  font: bold 16px Helvetica;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  width: 525px;
  height: 150px;
`;

const ImageHor = styled.img`
  background-image: url(${(props) => props.src});
  height: 200px;
  margin-right: 50px;
`;

const ImageVer = styled.img`
  background-image: url(${(props) => props.src});
  height: 250px;
  position: relative;
  margin-bottom: -20px;
`;

const Nosotros = () => {
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
        <Middle>
          <Title>Los expertos que necesitas.</Title>
          <Text>
            Somos un equipo de operadores experimentados, comprometidos con
            buscar y detectar las mejores Oportunidades de inversión de mercado,
            condiciones financieras de las acciones y los mercados
            estadounidenses de divisas.
          </Text>
        </Middle>
        <Right>
          <ImageVer src="src/images/business4.jpg" />
          <ImageHor src="src/images/business.jpg" />
        </Right>
      </Content>
      <Nav />
    </Container>
  );
};

export default Nosotros;
