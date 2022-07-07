import React, { useEffect, useState } from "react";

import * as Content from "./Content";
import { Container } from "../UI/Containers/Containers";

function Table() {
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
    <Container grid id="crypto">
      <Content.Content>
        <Content.TitleContainer>
            <Content.Title>Coin Market</Content.Title>
        </Content.TitleContainer>
        <Content.TableRender coins={coins} />
      </Content.Content>
    </Container>
  );
}

export default Table;
