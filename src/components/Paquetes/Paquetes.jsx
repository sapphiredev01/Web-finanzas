import React from "react";
import Container from "../UI/Containers/Containers";
import { Media, MediaItem } from "../UI/Media/Media";
import Nav from "../UI/Nav/Nav";
import { Content, TitleContainer, Title, Div1, Div2, Div3 } from "./Content";
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Paquetes = () => {
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
        <TitleContainer>
          <Title>
            <h1>Paquetes</h1>
          </Title>
        </TitleContainer>
        <Div1>
          <h2>Anual Tasa Fija</h2>
          <p>Diseñado para inversores que quieren cubrir sus responsabilidades mensuales de manera inteligente, como pagar su casa, comprar un terreno, pagar colegiaturas o incrementar sus ingresos mensuales</p>
        </Div1>
        <Div2>
          <h2>Anual Tasa Compuesta</h2>
          <p>Aquellas personas que consideran el ahorro como parte vital de sus vidas financieras, querrán tomar un paso más grande, al no solamente ahorrar, sino también hacer que sus ahorros produzcan más capital, asegurar su futuro, e incluso vivir un retiro inmejorable.</p>
        </Div2>
        <Div3 />
      </Content>
      <Nav />
    </Container>
  );
};

export default Paquetes;
