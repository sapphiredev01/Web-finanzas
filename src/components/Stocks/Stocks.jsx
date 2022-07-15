import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import Table from "./Table";
import { CryptoRow, StockRow } from "./Row";
import { Chart } from "./Chart";
import { CardsContainer } from "./Styles";
import { useDesktop } from "../../hooks/useDesktop";
import Fade from 'react-reveal/Fade';

const Stocks = () => {
  const isDesktop = useDesktop();

  const props = {
    "auto": !isDesktop,
  };

  const [coins, setCoins] = useState([]);
  const [coins2, setCoins2] = useState([]);
  const [stocks, setStocks] = useState([]);

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

  const symbols = ["SPX", "NDAQ"];
  const getStocks = async () => {
    symbols.forEach(async (symbol) => {
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=4f26cd4907b046838d42aa1d051e929f`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    stocks.push(result);
    });
  }

  useEffect(() => {
    getCrypto();
    getCrypto2();
    getStocks();
    console.log(stocks);
  }, []);

  return (
    <Container id="inicio">
    <Fade>
      <Wrapper {...props}>
        <Title>Inicio</Title>
        <CryptoRow coins={coins2} />
        <StockRow stocks={stocks}/>
        <CardsContainer>
          <Chart />
          <Table coins={coins} />
        </CardsContainer>
      </Wrapper>
      </Fade>
    </Container>
  );
};

export default Stocks;
