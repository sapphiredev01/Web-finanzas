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
      alert.show("Por favor, escriba su nombre", { type: "error" });
      return;
    }
    if (!correo.trim()) {
      alert.show("Por favor, escriba su correo", { type: "error" });
      return;
    }
    if (!mensaje.trim()) {
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
        },
        (error) => {
          alert.show(
            "Se produjo un error al enviar el correo, por favor intente de nuevo",
            { type: "error" }
          );
        }
      );
  };

  return (
    <Container style={{ marginTop: "8rem", padding: "2rem, 0" }} id="contacto">
      <Content.ImageSquare src={Img} />
      <Content.Form>
        <Content.Titulo>CONTÁCTANOS</Content.Titulo>
        <Content.Info>
          <Content.InfoItemAlt>Correo</Content.InfoItemAlt>
        </Content.Info>
        <Content.Info>
          <Content.InfoItem>info@finpei.com</Content.InfoItem>
        </Content.Info>
        <Content.Subtitle>Mándanos un mensaje</Content.Subtitle>
        <form onSubmit={mandarCorreo}>
          <Content.InputsLabelDiv>
            <Content.Label>Nombre</Content.Label>
            <Content.Label>Correo</Content.Label>
          </Content.InputsLabelDiv>
          <Content.LabelMovil>Nombre</Content.LabelMovil>
          <Content.InputsFormDiv>
            <Content.Inputs
              type="text"
              id="name"
              name="name"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <Content.LabelMovil middle>Email</Content.LabelMovil>
            <Content.Inputs
              email
              type="email"
              id="email"
              name="email"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
            />
          </Content.InputsFormDiv>
          <Content.InputsLabelDiv down>
            <Content.Label>Mensaje</Content.Label>
          </Content.InputsLabelDiv>
          <Content.LabelMovil>Mensaje</Content.LabelMovil>
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
    </Container>
  );
};

export default Contacto;
