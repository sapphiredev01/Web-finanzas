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
  const getData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins(data);
  };
  const getData2 = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins2(data);
  };
  useEffect(() => {
    getData();
    getData2();
  }, []);

  return (
    <Container id="inicio">
      <Wrapper>
        <Title>Inicio</Title>
        <CryptoRow coins={coins2} />
        <CardsContainer>

          <Table coins={coins} />
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Stocks;
