import React from "react";
import Banner from "./components/Banner/Banner";
import TableCrypto from './components/Tabla/Table'
import Inicio from "./components/Inicio/Inicio";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Calculadora from "./components/Calculadora/Calculadora";
import Paquetes from "./components/Paquetes/Paquetes";
import Nav from "./components/UI/Nav/Nav";
import NavResponsive from "./components/UI/Nav/NavResponsive.jsx";
import Media from "./components/UI/Media/index";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner/>
      <NavResponsive/>
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