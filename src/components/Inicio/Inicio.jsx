import React, { useEffect, useState } from 'react'
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import { useDesktop } from "../../hooks/useDesktop";
import * as S from "./Styles";
import Fade from "react-reveal/Fade";
import { CryptoRow } from "../Stocks/CryptoRow";
import { StockRow } from "../Stocks/StockRow";
import { ChartSlider } from "../Stocks/ChartSlider";
import { ChartBTC } from "../Stocks/ChartBTC";
import woman from "../../images/businessWoman.jpg"


const Inicio = () => {
  const isDesktop = useDesktop();

  const props = {
    auto: !isDesktop,
  };
  const [coins, setCoins] = useState([]);

  const getCrypto = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins(data);
  };

  useEffect(() => {
    getCrypto();
  }, []);

  return (
    <Container id="inicio">
      <Fade>
        <Wrapper auto>
            <S.GridContainer>
                <S.divContainer>
                    <S.PreTitle>Acerca de nosotros</S.PreTitle>
                    <S.niceTitle>Hacemos crecer <br/> tu capital</S.niceTitle>
                    <S.Description>En FINPEI facilitamos el acercamiento a proyectos comerciales,
                    mercados financieros y criptográficos. Participando en el
                    desarrollo de proyectos de éxito.</S.Description>
                    <CryptoRow coins={coins} />
                    <StockRow />
                    <ChartSlider />
                    <ChartBTC />
                </S.divContainer>
                <S.divContainer>
                    <S.Experience>-- años de experiencia</S.Experience>
                    <S.ImageBus src={woman}/>
                </S.divContainer>
            </S.GridContainer>
        </Wrapper>
      </Fade>
    </Container>
  )
};

export default Inicio;
