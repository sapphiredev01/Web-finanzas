import React, { useState } from "react";
import { useAlert } from "react-alert";
import emailjs from "emailjs-com";
import { Container, Wrapper } from "../UI/Containers/Containers";
import * as S from "./Styles";
import cel from "../../images/telefono.png";
import mail from "../../images/correo.png";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';
import { PreTitle, NiceTitle, Title } from "../UI/Typography/Typography";
const Contacto = () => {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

  const alert = useAlert();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
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
    if (!telefono.trim()) {
      alert.show("Por favor, escriba su numero de telefono", { type: "error" });
      return;
    }
    if (!mensaje.trim()) {
      alert.show("Por favor, escriba un mensaje", { type: "error" });
      return;
    }
    emailjs
      .sendForm(
        "service_2xv3n5g",
        "template_6uk2wz8",
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
          setTelefono("");
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
      <Fade>
      <Wrapper {...props}>
        <Title style={{textAlign:"center"}}>Información de contacto</Title>
        <NiceTitle style={{textAlign:"center", fontSize:"3rem"}}>Contáctanos para conocer <br/> mas información</NiceTitle>
        <S.WrapperFlex>
          <S.infoContent>
            <S.contactoIcon src={cel} alt="telefono" />
            <S.contactoTitle>WhatsApp</S.contactoTitle>
            <S.Info>+8 (123) 985 789</S.Info>
          </S.infoContent>
          <S.infoContent>
            <S.contactoIcon src={mail} alt="email" />
            <S.contactoTitle>Mail</S.contactoTitle>
            <S.Info>Contacto@Finpei.com.mx</S.Info>
          </S.infoContent>
        </S.WrapperFlex>
      </Wrapper>
      </Fade>
    </Container>
  );
};

export default Contacto;
