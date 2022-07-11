import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../UI/Containers/Containers";
import { Title } from "../UI/Typography/Typography";
import Table from "./Table";
import { CryptoRow } from "./Row";
import { Chart } from "./Chart";
import { CardsContainer } from "./Styles";

const Stocks = () => {
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
    <Container height="auto" id="inicio">
      <Wrapper>
        <Title>Inicio</Title>
        <CryptoRow coins={coins2} />
        <CryptoRow coins={coins2} />
        <CardsContainer>
          <Chart />
          <Table coins={coins} />
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Stocks;
