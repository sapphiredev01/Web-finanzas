import React, { useState } from "react";
import { ItemStock } from "./RowItem";
import * as S from "./Styles";
import { useQuery } from "react-query";

export const StockRow = () => {
  const { data: stocks, isLoading } = useQuery(
    "stocks",
    async () => {
      const symbols = ["SPX", "NDAQ", "SIX", "SPY", "USD"];
      const stocks = [];
      for (const symbol of symbols) {
        const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=4f26cd4907b046838d42aa1d051e929f`;
        const response = await fetch(url);
        const result = await response.json();
        stocks.push({
          symbol: result.symbol,
          name: result.name,
          close: result.close,
          changePercent: result.percent_change,
        });
      }
      return stocks;
    },
    {
      staleTime: 600000,
    }
  );
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    variableWidth: true,
    arrows: false,
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <S.StyledSlider {...settings}>
          {stocks.map((stock, index) => {
            return <ItemStock key={index} stock={stock} />;
          })}
        </S.StyledSlider>
      )}
    </>
  );
};
