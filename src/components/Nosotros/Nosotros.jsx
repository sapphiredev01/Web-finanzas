import styled from "styled-components";
import Wrapper from "../UI/Wrapper";

const Title = styled.h1`
  text-align: left;
  font: 82px/100px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Content = styled.div`
  text-align: left;
  font: Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Nosotros = () => {
  return (
    <Wrapper>
      <Title>Los expertos que necesitas.</Title>
      <Content>
        Especialistas en financiamiento a la medida para su negocio , contamos
        con experiencia apoyando a las empresas a obtener créditos a través de
        instituciones internacionales.
      </Content>
    </Wrapper>
  );
};

export default Nosotros;
