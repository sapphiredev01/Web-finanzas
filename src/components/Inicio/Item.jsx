import React from "react";
import * as S from "./Styles";

const Item = ({ coin }) => {
  return (
    <S.RowItem>
      <S.Img src={coin.image} alt={coin.name} />
      <span>{coin.symbol.toUpperCase()}</span>
      <S.TdChange change={coin.price_change_percentage_24h}>
        {coin.price_change_percentage_24h.toFixed(2)} %
      </S.TdChange>
    </S.RowItem>
  );
};

export default Item;
