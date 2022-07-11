import React, { useState } from "react";
import { useAlert } from "react-alert";
import emailjs from "emailjs-com";
import { Container, Wrapper } from "../UI/Containers/Containers";
import * as S from "./Styles";
import Img from "../../images/contact.jpg";
import { useDesktop } from "../../hooks/useDesktop";


const Contacto = () => {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

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
    <Container id="contacto">
      <Wrapper {...props}>
        <S.WrapperFlex>
          <S.ImageSquare src={Img} />
          <S.Form>
            <S.Titulo>CONTÁCTANOS</S.Titulo>
            <S.Info>
              <S.InfoItemAlt>Correo</S.InfoItemAlt>
            </S.Info>
            <S.Info>
              <S.InfoItem>info@finpei.com</S.InfoItem>
            </S.Info>
            <S.Subtitle>Mándanos un mensaje</S.Subtitle>
            <form onSubmit={mandarCorreo}>
              <S.InputsLabelDiv>
                <S.Label>Nombre</S.Label>
                <S.Label>Correo</S.Label>
              </S.InputsLabelDiv>
              <S.LabelMovil>Nombre</S.LabelMovil>
              <S.InputsFormDiv>
                <S.Inputs
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                />
                <S.LabelMovil middle>Email</S.LabelMovil>
                <S.Inputs
                  email
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                />
              </S.InputsFormDiv>
              <S.InputsLabelDiv down>
                <S.Label>Mensaje</S.Label>
              </S.InputsLabelDiv>
              <S.LabelMovil>Mensaje</S.LabelMovil>
              <S.InputsFormDiv down>
                <S.Input2
                  id="message"
                  name="message"
                  onChange={(e) => setMensaje(e.target.value)}
                  value={mensaje}
                />
              </S.InputsFormDiv>
              <S.ButtonDiv>
                <S.ButtonSend type="submit">ENVIAR</S.ButtonSend>
              </S.ButtonDiv>
            </form>
          </S.Form>
        </S.WrapperFlex>
      </Wrapper>
    </Container>
  );
};

export default Contacto;
