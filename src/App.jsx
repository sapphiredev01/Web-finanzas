import React from "react";
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Paquetes from "./components/Paquetes/Paquetes";
import Nav from "./components/UI/Nav/Nav";
import Media from "./components/UI/Media/index";
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
      <Contacto />
    </div>
  );
}

export default App;
