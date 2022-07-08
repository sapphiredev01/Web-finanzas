import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import Table from "./Table";
import { CryptoRow, StockRow } from "./Row";
import { Chart } from "./Chart";
import { CardsContainer } from "./Styles";

const Stocks = () => {
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
  
  const getStocks = async () => {
    const NDAQ = await fetch(
      "https://api.polygon.io/v1/open-close/NDAQ/2022-07-07?adjusted=true&apiKey=PTNf8AL4p4GVH8ukZAw9R528cXPJP1US"
    );
    const data1 = await NDAQ.json();
    setStocks(data1);

    const SP = await fetch(
      "https://api.polygon.io/v1/open-close/SP/2022-07-07?adjusted=true&apiKey=PTNf8AL4p4GVH8ukZAw9R528cXPJP1US"
    );
    const data2 = await SP.json();
    stocks.add(data2);
    console.log(stocks);
  }

  useEffect(() => {
    getCrypto();
    getCrypto2();
    //getStocks();
  }, []);

  return (
    <Container id="inicio">
      <Wrapper>
        <Title>Inicio</Title>
        <CryptoRow coins={coins2} />
        <CryptoRow coins={coins2} />
        <CardsContainer>
          <Table coins={coins} />
          <Table coins={coins} />
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Stocks;
