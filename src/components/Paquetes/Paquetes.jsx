import React from "react";
import Container from "../UI/Containers/Containers";
import { Media, MediaItem } from "../UI/Media/Media";
import Nav from "../UI/Nav/Nav";
import { Content, Title, Div1, Div2, Div3 } from "./Content";
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
        <Title>
          <h1>Paquetes</h1>
        </Title>
        <Div1>
          <h2>Hola, soy una etiqueta</h2>
          <p>Este es el contenido de la etiqueta</p>
        </Div1>
      </Content>
      <Nav />
    </Container>
  );
};

export default Paquetes;
