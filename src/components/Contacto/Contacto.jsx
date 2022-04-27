import React from "react";
import { useState } from "react";
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
import react from "react";

const Content = styled.div`
  grid-area: 2 / 1 / 7 / 6;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ImageSquare = styled.img`
  grid-area: 1 / 1 / 9 / 4;
  background-image: url(${(props) => props.src});
  width: 100%;
`;

const Form = styled.div`
  grid-area: 1 / 4 / 9 / 7;
`;

const Titulo = styled.h1`
  grid-area: 1 / 4 / 2 / 7;
  text-align: left;
  font: bold 40px Helvetica;
  margin-left: 30px;
  margin-top: 10px;
  color: #034e80;
`;

const Info = styled.div`
  grid-area: 2 / 4 / 3 / 7;
  margin: 0px 30px;
  display: flex;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  text-align: left;
  font: 15px Helvetica;
  font-weight: ${(props) => (props.alt ? "bold" : "normal")};
  color: #000000;
`;

const Subtitle = styled.h2`
  grid-area: 3 / 4 / 4 / 7;
  text-align: left;
  font: bold 25px Helvetica;
  margin-left: 30px;
  color: #034e80;
`;

const InputsLabelDiv = styled.div`
  grid-area: ${(props) => (props.down ? "6 / 4 / 7 / 7" : "4 / 4 / 5 / 7")};
  margin: 0px 30px;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  text-align: left;
  font: bold 16px Helvetica;
  color: #000000;
`;

const InputsFormDiv = styled.div`
  grid-area: ${(props) => (props.down ? "7 / 4 / 8 / 7" : "5 / 4 / 6 / 7")};
  margin: 0px 30px;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const Inputs = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font: 15px Helvetica;
`;

const Input2 = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  font: 15px Helvetica;
`;

const ButtonDiv = styled.div`
  grid-area: 8 / 4 / 9 / 7;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonSend = styled.button`
  background: #ffffff;
  border: 1px inset #707070;
  font: bold 16px Helvetica;
  width: 30%;
`;

const Nosotros = () => {
  const [nombre, setNombre] = react.useState("");
  const [correo, setCorreo] = react.useState("");
  const [mensaje, setMensaje] = react.useState("");
  const [error, setError] = react.useState(null);

  const mandarCorreo = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      console.log("Sin nombre");
      setError("Escriba su nombre por favor");
      return;
    }
    if (!correo.trim()) {
      console.log("Sin correo");
      setError("Escriba su correo por favor");
      return;
    }
    if (!mensaje.trim()) {
      console.log("Sin mensaje");
      setError("Escriba su mensaje por favor");
      return;
    }
    console.log(nombre);
    console.log(correo);
    console.log(mensaje);

    setNombre("");
    setCorreo("");
    setMensaje("");
  };
  
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
        <ImageSquare src="../../../public/images/contact.jpg" />
        <Form>
          <Titulo>CONTACTANOS</Titulo>
          <Info>
            <InfoItem alt>Direccion</InfoItem>
            <InfoItem alt>Correo</InfoItem>
            <InfoItem alt>Telefono</InfoItem>
          </Info>
          <Info>
            <InfoItem>Barranca Granate 104</InfoItem>
            <InfoItem>correo@gmail.com</InfoItem>
            <InfoItem>477 378 0283</InfoItem>
          </Info>
          <Subtitle>Mandanos un mensaje</Subtitle>
          <form onSubmit={mandarCorreo}>
            <InputsLabelDiv>
              <Label for="name">Nombre</Label>
              <Label for="email">Correo</Label>
            </InputsLabelDiv>
            <InputsFormDiv>
              <Inputs
                type="text"
                id="name"
                name="name"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
              <Inputs
                type="email"
                id="email"
                name="email"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
              />
            </InputsFormDiv>
            <InputsLabelDiv down>
              <Label for="message">Mensaje</Label>
            </InputsLabelDiv>
            <InputsFormDiv down>
              <Input2
                id="message"
                name="message"
                onChange={(e) => setMensaje(e.target.value)}
                value={mensaje}
              />
            </InputsFormDiv>
            <ButtonDiv>
              <ButtonSend type="submit">ENVIAR</ButtonSend>
            </ButtonDiv>
          </form>
        </Form>
      </Content>
      <Nav />
    </Container>
  );
};

export default Nosotros;
