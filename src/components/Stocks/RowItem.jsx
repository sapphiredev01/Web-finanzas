/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./Styles";
import styled from "styled-components";

export const ItemCrypto = ({ coin }) => {
  return (
    <S.RowItem>
      <S.Img src={coin.image} alt={coin.name} />
      <span>{coin.symbol.toUpperCase()}</span>
      <S.DivChange change={coin.price_change_percentage_24h}>
        {coin.price_change_percentage_24h.toFixed(2)} %
      </S.DivChange>
    </S.RowItem>
  );
};

export const DivSymbol = styled.div`
  padding-right: 0.5rem;
  font-weight: bold;
`;

export const ItemStock = ({ stock }) => {
  return (
    <S.RowItem>
      <DivSymbol>{stock.name}</DivSymbol>
      <span >${Number(stock.close).toFixed(2)}</span>
      <S.DivChange change={stock.percent_change}>{Number(stock.percent_change).toFixed(2)}%</S.DivChange>
    </S.RowItem>
  );
};