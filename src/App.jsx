import React from "react";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Calculadora from "./components/Calculadora/Calculadora";
import Paquetes from "./components/Paquetes/Paquetes";
import Nav from "./components/UI/Nav/Nav";
import Media from "./components/UI/Media/index";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Media />
      <Inicio />
      <Nosotros />
      <Servicios />
      <Paquetes />
      <Calculadora />
      <Contacto />
    </div>
  );
}
export default App;