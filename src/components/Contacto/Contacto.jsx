import React, { useState } from "react";
import { useAlert } from "react-alert";
import emailjs from "emailjs-com";
import Container from "../UI/Containers/Containers";
import * as Content from "./Content";
import Img from "../../images/contact.jpg";

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
    <Container style={{ marginTop: "8rem", padding: "2rem, 0" }} id="contacto">
      <Content.Content>
        <Content.ImageSquare src={Img} alt="Img" />
        <Content.Form>
          <Content.Titulo>CONTACTANOS</Content.Titulo>
          <Content.Info>
            <Content.InfoItem alt>Direccion</Content.InfoItem>
            <Content.InfoItem alt>Correo</Content.InfoItem>
            <Content.InfoItem alt>Telefono</Content.InfoItem>
          </Content.Info>
          <Content.Info>
            <Content.InfoItem>Barranca Granate 104</Content.InfoItem>
            <Content.InfoItem>correo@gmail.com</Content.InfoItem>
            <Content.InfoItem>477 378 0283</Content.InfoItem>
          </Content.Info>
          <Content.Subtitle>Mandanos un mensaje</Content.Subtitle>
          <form onSubmit={mandarCorreo}>
            <Content.InputsLabelDiv>
              <Content.Label for="name">Nombre</Content.Label>
              <Content.Label for="email">Correo</Content.Label>
            </Content.InputsLabelDiv>
            <Content.LabelMovil for="name">Nombre</Content.LabelMovil>
            <Content.InputsFormDiv>
              <Content.Inputs
                type="text"
                id="name"
                name="name"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
              <Content.LabelMovil middle for="email">
                Email
              </Content.LabelMovil>
              <Content.Inputs
                type="email"
                id="email"
                name="email"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
              />
            </Content.InputsFormDiv>
            <Content.InputsLabelDiv down>
              <Content.Label for="message">Mensaje</Content.Label>
            </Content.InputsLabelDiv>
            <Content.LabelMovil for="message">Mensaje</Content.LabelMovil>
            <Content.InputsFormDiv down>
              <Content.Input2
                id="message"
                name="message"
                onChange={(e) => setMensaje(e.target.value)}
                value={mensaje}
              />
            </Content.InputsFormDiv>
            <Content.ButtonDiv>
              <Content.ButtonSend type="submit">ENVIAR</Content.ButtonSend>
            </Content.ButtonDiv>
          </form>
        </Content.Form>
      </Content.Content>
    </Container>
  );
};

export default Contacto;
