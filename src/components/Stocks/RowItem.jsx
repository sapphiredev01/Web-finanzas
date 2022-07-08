/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./Styles";

export const ItemCrypto = ({ coin }) => {
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

export const ItemStock = ({ stock }) => {
  return (
    <S.RowItem>
      <span>{stock.Symbol.toUpperCase()}</span>
      <span>{stock.volume}</span>
    </S.RowItem>
  );
};