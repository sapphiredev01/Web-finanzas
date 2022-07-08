import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Stocks from "./components/Stocks/Stocks";
import Vision from "./components/Visión/Vision";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import Inversion from "./components/Inversion/Inversion";
import Perfil from "./components/Perfil/Perfil";
import Nav from "./components/UI/Nav/Nav";
import Media from "./components/UI/Media/Media";
import "./App.css";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 820);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 820);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="app">
      <Nav />
      <Hero />
      {isDesktop ? (
        <>
          <Media />
        </>
      ) : (
        <></>
      )}
      <Stocks />
      <Vision />
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
