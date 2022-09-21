import React, {useState, useEffect} from "react";
import * as S from "./Styles";
import { Container, Separator, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import agricultura from "../../images/LOGOTIPOS_FINPEI_99.png";
import crypto from "../../images/LOGOTIPOS_FINPEI_100.png";
import stocks from "../../images/LOGOTIPOS_FINPEI_101.png";
import startups from "../../images/LOGOTIPOS_FINPEI_102.png";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';
import { ModalAgricultura, ModalCrypto, ModalStocks, ModalBoosting } from "./Modals";

const Servicios = () => {
  const isDesktop = useDesktop();

  const [modalAgricultura, setModalAgricultura] = useState(false);
  const [modalCrypto, setModalCrypto] = useState(false);
  const [modalStocks, setModalStocks] = useState(false);
  const [modalBoosting, setModalBoosting] = useState(false);

  const props = {
    auto: !isDesktop,
  };

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setModalAgricultura(false);
        setModalCrypto(false);
        setModalStocks(false);
        setModalBoosting(false);
      }
    }
    window.addEventListener('keydown', close)
   return () => window.removeEventListener('keydown', close)
  },[])

  
  return (
    <Container id="servicios">
      <Fade>
      <Wrapper>
        <Title>VEHÍCULOS FINANCIEROS</Title>
          <S.Row>
            <S.Item src={agricultura} alt={"Agricultura"} title={"Agricultura"} estateModal={modalAgricultura} changerModal={setModalAgricultura}/>
            <S.Item src={crypto} alt={"Crypto"} title={"Crypto"} estateModal={modalCrypto} changerModal={setModalCrypto}/>
            <S.Item src={stocks} alt={"Stocks"} title={"Stocks"} estateModal={modalStocks} changerModal={setModalStocks}/>
            <S.Item src={startups} alt={"Boosting"} title={"Boosting"} estateModal={modalBoosting} changerModal={setModalBoosting}/>
          </S.Row>

          <ModalAgricultura estate={modalAgricultura} changeEstate={setModalAgricultura}/>
          <ModalCrypto estate={modalCrypto} changeEstate={setModalCrypto}/>
          <ModalStocks estate={modalStocks} changeEstate={setModalStocks}/>
          <ModalBoosting estate={modalBoosting} changeEstate={setModalBoosting}/>

      </Wrapper>
      </Fade>
      <Separator />
      <br/>
    </Container>
  );
};

export default Servicios;
