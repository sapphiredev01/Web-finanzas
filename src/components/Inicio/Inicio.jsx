import React, { useEffect, useState } from "react";
import Container from "../UI/Containers/Containers";
import { Content, Left, Right, Title, Text, Card } from "./Content";
import { TableRender, CryptoRow } from "./CryptoContent";


const Inicio = () => {
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
    <Container id="inicio" grid>
      <CryptoRow coins={coins2}/>
      <Content>
        <Left>
          <Title>El crecimiento esta asegurado.</Title>
          <Text>
            Especialistas en financiamiento a la medida para su negocio,
            contamos con experiencia apoyando a las empresas a obtener créditos
            a través de instituciones internacionales.
          </Text>
        </Left>
        <Right>
          <Card>
            <TableRender coins={coins}/>
          </Card>
        </Right>
      </Content>
    </Container>
  );
};

export default Inicio;
