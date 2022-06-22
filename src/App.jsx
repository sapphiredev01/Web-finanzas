import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import { CryptoRow } from "./components/Inicio/CryptoContent";
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
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="app">
      <Nav />
      <Banner/>
      {isDesktop ? (
                <> <Media /> </>
              ) : (
                <></>
              )}
  
      <Inicio />
      <Nosotros />
      <Servicios />
      <Paquetes />
      <Calculadora />
      <Contacto />
      {isDesktop ? (
                <>  </>
              ) : (
                <> <Media /></>
              )}
    </div>
  );
}
export default App;