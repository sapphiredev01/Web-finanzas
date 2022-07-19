/* eslint-disable react/prop-types */
import { React, useState } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";

export const ChartNQ = () => {

  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);

  const url = `https://api.twelvedata.com/time_series?symbol=NDAQ&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;

  const { data } = useQuery(
    "chart",
    async () => {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.values;
      const prices = data.map((index) => ({
        x: index.datetime,
        y: [index.open, index.high, index.low, index.close],
      }));
      setSeries(
        [
          {
            data: prices,
          },
        ]
      );
    },
    {
      staleTime: 600000,
    }
  );

  const chart = {
    options: {
      title: {
        text: "NASDAQ",
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
