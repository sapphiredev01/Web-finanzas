import { Wrapper, Stepper, Step } from "./NavElements";

const Nav = () => {
  return (
    <Wrapper>
      <Stepper>
        <Step>
          <h4>INICIO</h4>
        </Step>
        <Step>
          <h4>NOSOTROS</h4>
        </Step>
        <Step>
          <h4>SERVICIOS</h4>
        </Step>
        <Step>
          <h4>PAQUETES</h4>
        </Step>
        <Step>
          <h4>CALCULADORA</h4>
        </Step>
        <Step>
          <h4>CONTACTO</h4>
        </Step>
      </Stepper>
    </Wrapper>
  );
}

export default Nav;
