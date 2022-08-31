import React from "react";
import Hero from "./components/Hero/Hero";
import Stocks from "./components/Stocks/Stocks";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import ContactoGod from "./components/Contacto/Contacto";
import Contacto from "./components/Contacto2/Contacto";
import Inversion from "./components/Inversion/Inversion";
import Perfil from "./components/Perfil/Perfil";
import Nav from "./components/UI/Nav/Nav";
import Media from "./components/UI/Media/Media";
import Banner from "./components/Banner/Banner";
import Inicio from "./components/Inicio/inicio";
import "./App.css";
import { useDesktop } from "./hooks/useDesktop";

function App() {
  const isDesktop = useDesktop();

  return (
    <div className="app">
      <Nav />
      <Hero />
      <Banner />
      {isDesktop ? (
        <>
          <Media />
        </>
      ) : (
        <></>
      )}
      <Inicio />
      <Nosotros />
      <Servicios />
      <Perfil />
      <Inversion />
      <Contacto />
      {isDesktop ? (
        <> </>
      ) : (
        <>
          <Media />
        </>
      )}
    </div>
  );
}
export default App;
