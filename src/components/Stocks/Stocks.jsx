import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import Table from "./Table";
import { CryptoRow } from "./CryptoRow";
import { StockRow } from "./StockRow";
import { ChartSlider } from "./ChartSlider";
import { ChartBTC } from "./ChartBTC";
import { CardsContainer } from "./Styles";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from "react-reveal/Fade";

const Stocks = () => {
  const isDesktop = useDesktop();

  const props = {
    auto: !isDesktop,
  };
  const [coins, setCoins] = useState([]);
  const [coins2, setCoins2] = useState([]);

  const getCrypto = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins(data);
  };
  const getCrypto2 = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins2(data);
  };

  useEffect(() => {
    getCrypto();
    getCrypto2();
  }, []);

  return (
    <Container id="inicio">
      <Fade>
        <Wrapper {...props}>
          <Title>Inicio</Title>
          <CryptoRow coins={coins2} />
          <StockRow />
          <CardsContainer>
            <ChartSlider />
            <ChartBTC />
          </CardsContainer>
        </Wrapper>
      </Fade>
    </Container>
  );
};

export default Stocks;
