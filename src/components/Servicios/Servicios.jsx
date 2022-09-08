import React, {useState} from "react";
import * as S from "./Styles";
import { Container, Separator, Wrapper } from "../UI/Containers/Containers";
import { Title, Text } from "../UI/Typography/Typography";
import agricultura from "../../images/LOGOTIPOS_FINPEI_99.png";
import crypto from "../../images/LOGOTIPOS_FINPEI_100.png";
import stocks from "../../images/LOGOTIPOS_FINPEI_101.png";
import startups from "../../images/LOGOTIPOS_FINPEI_102.png";
import bg from "../../images/vhback.png";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';

const Servicios = () => {
  const isDesktop = useDesktop();

  const [isExpanded, setExpanded] = useState(false);
  const [showAgricultura, setAgricultura] = useState(false);
  const [showCrypto, setCrypto] = useState(false);
  const [showStocks, setStocks] = useState(false);
  const [showBoosting, setBoosting] = useState(false);

  function changeAgricultura(e) {
    e.preventDefault();
    setExpanded(true);
    setAgricultura(true);
    setCrypto(false);
    setStocks(false);
    setBoosting(false);
  }

  function changeCrypto(e) {
    e.preventDefault;
    setExpanded(true);
    setAgricultura(false);
    setCrypto(true);
    setStocks(false);
    setBoosting(false);
  }

  function changeStocks(e) {
    e.preventDefault;
    setExpanded(true);
    setAgricultura(false);
    setCrypto(false);
    setStocks(true);
    setBoosting(false);
  }

  function changeBoosting(e) {
    e.preventDefault;
    setExpanded(true);
    setAgricultura(false);
    setCrypto(false);
    setStocks(false);
    setBoosting(true);
  }

  function hideAll(e) {
    e.preventDefault;
    setExpanded(false);
    setAgricultura(false);
    setCrypto(false);
    setStocks(false);
    setBoosting(false);
  }
  return (
    <Container id="servicios" onMouseLeave={hideAll}>
      <Fade>
      <Wrapper auto={isExpanded}>
        <Title>VEHÍCULOS FINANCIEROS</Title>
        <div>
          <S.Row>
            <S.divAnimationAgro onMouseOver={changeAgricultura}>
              <S.Item src={agricultura} alt={"Agricultura"}title={"Agricultura"}/>
            </S.divAnimationAgro>

            {showAgricultura && isDesktop ? 
            <> 
            <S.DivAgricultura/>
            </> 
            : 
            <>
             <S.divAnimationRow onMouseOver={changeCrypto}>
              <S.Item src={crypto} alt={"Crypto"} title={"Crypto"} />
            </S.divAnimationRow>

            <S.divAnimationRow onMouseOver={changeStocks}>
            <S.Item src={stocks} alt={"Stocks"} title={"Stocks"} />
            </S.divAnimationRow>

            <S.divAnimationRow onMouseOver={changeBoosting}>
            <S.Item src={startups} alt={"Startups"} title={"Boosting"} />
            </S.divAnimationRow>
            </>
            }
       
          </S.Row>

          {showAgricultura && isDesktop ? 
            <> 
            <S.divAnimationRow>
            <S.Row>
            <div onMouseOver={changeCrypto}>
              <S.Item src={crypto} alt={"Crypto"} title={"Crypto"} />
            </div>

            <div onMouseOver={changeStocks}>
            <S.Item src={stocks} alt={"Stocks"} title={"Stocks"} />
            </div>

            <div onMouseOver={changeBoosting}>
            <S.Item src={startups} alt={"Startups"} title={"Boosting"} />
            </div>
            </S.Row>
            </S.divAnimationRow>
            </> 
            : 
            <>
            </>
            }
          {showAgricultura && !isDesktop ? <S.DivAgricultura /> : <></>}
          {showCrypto && <S.DivCrypto />}
          {showStocks && <S.DivStocks />}
          {showBoosting && <S.DivBoosting />}
        </div>
      </Wrapper>
      </Fade>
      <Separator />
      <br/>
    </Container>
  );
};

export default Servicios;
