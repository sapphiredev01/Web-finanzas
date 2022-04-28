import React from 'react';
import Inicio from "./components/Inicio/Inicio"
import Nosotros from "./components/Nosotros/Nosotros"
import Servicios from "./components/Servicios/Servicios"
import Contacto from "./components/Contacto/Contacto"
import Paquetes from './components/Paquetes/Paquetes';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Servicios />
    </div>
  )
}

export default App
