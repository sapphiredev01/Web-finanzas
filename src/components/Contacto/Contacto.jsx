import React, { useState } from "react";
import { useAlert } from "react-alert";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Container from "../UI/Containers/Containers";

const Content = styled.div`
  grid-area: 1 / 2 / 11 / 13;
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
  height: 100%;
`;

const Form = styled.div`
  grid-area: 1 / 4 / 9 / 7;
  padding: 1rem;
`;

const Titulo = styled.h1`
  grid-area: 1 / 4 / 2 / 7;
  text-align: left;
  font: bold 40px Helvetica;
  margin-left: 15px;
  margin-top: 10px;
  color: #034e80;
`;

const Info = styled.div`
  grid-area: 2 / 4 / 3 / 7;
  margin: 0px 15px;
  display: flex;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  text-align: left;
  font: 13px Helvetica;
  font-weight: ${(props) => (props.alt ? "bold" : "normal")};
  color: #000000;
`;

const Subtitle = styled.h2`
  grid-area: 3 / 4 / 4 / 7;
  text-align: left;
  font: bold 25px Helvetica;
  margin-left: 15px;
  color: #034e80;
`;

const InputsLabelDiv = styled.div`
  grid-area: ${(props) => (props.down ? "6 / 4 / 7 / 7" : "4 / 4 / 5 / 7")};
  margin: 0px 15px;
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
  margin: 0px 15px;
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

const Contacto = () => {
  const alert = useAlert();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const mandarCorreo = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      console.log("Sin nombre");
      alert.show("Por favor, escriba su nombre", { type: "error" });
      return;
    }
    if (!correo.trim()) {
      console.log("Sin correo");
      alert.show("Por favor, escriba su correo", { type: "error" });
      return;
    }
    if (!mensaje.trim()) {
      console.log("Sin mensaje");
      alert.show("Por favor, escriba un mensaje", { type: "error" });
      return;
    }
    emailjs
      .sendForm(
        "service_2xv3n5g",
        "template_8tzti5d",
        e.target,
        "8xSfqOfcIitvYSLaO"
      )
      .then(
        (result) => {
          alert.show(
            "Su mensaje fue enviado, pronto nos pondremos en contacto con usted",
            { type: "success" }
          );
          setNombre("");
          setCorreo("");
          setMensaje("");
          console.log(result.text);
        },
        (error) => {
          alert.show(
            "Se produjo un error al enviar el correo, por favor intente de nuevo",
            { type: "error" }
          );
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contacto" grid>
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
    </Container>
  );
};

export default Contacto;
