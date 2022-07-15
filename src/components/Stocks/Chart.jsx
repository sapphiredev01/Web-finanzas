/* eslint-disable react/prop-types */
import { React, useState } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";

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

  const { data } = useQuery(
    "chart",
    async () => {
      const response = await fetch(url);
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
      setSeries([
        {
          data: prices,
        },
      ]);
    },
    {
      cacheTime: 300000,
    }
  );

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
