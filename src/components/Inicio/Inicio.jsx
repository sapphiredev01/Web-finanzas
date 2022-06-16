import React, { useEffect, useState } from "react";
import Container from "../UI/Containers/Containers";
import { Content, Left, Right, Title, Text, Card } from "./Content2";
import Hex from "../../images/hexagono.svg";
import { TableRender } from "./CryptoContent";

const Inicio = () => {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container id="inicio" grid>
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
