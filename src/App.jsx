import React from "react";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Paquetes from "./components/Paquetes/Paquetes";
import Nav from "./components/UI/Nav/Nav";
import Media from "./components/UI/Media/index";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Flip from 'react-reveal/Flip';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Media />
      <Rotate top right>
        <Inicio id="inicio"/>
      </Rotate>
      <Fade right>
        <Nosotros id="nosotros"/>
      </Fade>
      <Zoom top>
        <Servicios id="servicios"/>
      </Zoom>
      <Flip top>
        <Paquetes id="paquetes"/>
      </Flip>
      <Zoom bottom>
        <Contacto id="contacto" />
      </Zoom>
    </div>
  );
}

export default App;
