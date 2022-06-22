import React from "react";
import {
  MenuBtn,
  MenuBtnImg,
  Menu,
  Lista,
  ListaItem,
  StyledLinkR,
  TitleR,
} from "./NavResponsiveContent";
import { FiMenu } from "react-icons/fi";

const NavResponsive = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header>
      <MenuBtn
        type="checkbox"
        id="btn-menu"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <MenuBtnImg for="btn-menu">
        <FiMenu />
      </MenuBtnImg>

      <Menu inactive={isChecked}>
        <Lista>
          <ListaItem>
            <StyledLinkR to="inicio" onClick={handleOnChange}>
              <TitleR>Inicio</TitleR>
            </StyledLinkR>
          </ListaItem>
          <ListaItem>
            <StyledLinkR to="nosotros" onClick={handleOnChange}>
              <TitleR>Nosotros</TitleR>
            </StyledLinkR>
          </ListaItem>
          <ListaItem>
            <StyledLinkR to="servicios" onClick={handleOnChange}>
              <TitleR>Servicios</TitleR>
            </StyledLinkR>
          </ListaItem>
          <ListaItem>
            <StyledLinkR to="paquetes" onClick={handleOnChange}>
              <TitleR>Paquetes</TitleR>
            </StyledLinkR>
          </ListaItem>
          <ListaItem>
            <StyledLinkR to="calculadora" onClick={handleOnChange}>
              <TitleR>Calculadora</TitleR>
            </StyledLinkR>
          </ListaItem>
          <ListaItem>
            <StyledLinkR to="contacto" onClick={handleOnChange}>
              <TitleR>Contacto</TitleR>
            </StyledLinkR>
          </ListaItem>
        </Lista>
      </Menu>
    </header>
  );
};

export default NavResponsive;
