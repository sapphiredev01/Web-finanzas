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
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${
    import.meta.env.ALPHA_KEY
  }`;

  const getStocks = async () => {
    const response = await fetch(`${url}`);
    const result = await response.json();
    const data = Object.entries(result["Time Series (Daily)"]);
    const prices = data.map((date) => ({
      x: date[0],
      y: [
        date[1]["1. open"],
        date[1]["2. high"],
        date[1]["3. low"],
        date[1]["4. close"],
      ],
    }));
    console.log(prices);
    setSeries([
      {
        data: prices,
      },
    ]);
  };

  useEffect(() => {
    getStocks();
  }, []);

  const chart = {
    options: {
      title: {
        text: "NDAQ",
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
