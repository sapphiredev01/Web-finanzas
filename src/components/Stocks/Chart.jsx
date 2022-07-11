/* eslint-disable react/prop-types */
import { React, useState, useEffect } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";

export const Chart = () => {
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);

  const symbol = "NDAQ";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;

  const getStocks = async () => {
    const response = await fetch(`${proxyUrl}${url}`);
    const result = await response.json();
    const data = result.chart.result[0];
    console.log(data);
    const quote = data.indicators.quote[0];
    const prices = data.timestamp.map((timestamp, index) => ({
      x: new Date(timestamp * 1000),
      y: [
        quote.open[index],
        quote.high[index],
        quote.low[index],
        quote.close[index],
      ].map((price) => round(price)),
    }));
    setSeries([
      {
        data: prices,
      },
    ]);

    console.log(prices);
  };

  useEffect(() => {
    getStocks();
  }, []);

  const chart = {
    options: {
      title: {
        text: "NDAQ Stock Price",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  const round = (value) => {
    return value ? +value.toFixed(2) : null;
  };

  return (
    <S.Card>
      <ApexChart
        options={chart.options}
        series={series}
        type="candlestick"
        width="100%"
        height={300}
      />
    </S.Card>
  );
};
