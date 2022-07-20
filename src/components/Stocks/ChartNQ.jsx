/* eslint-disable react/prop-types */
import { React } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useRound } from "../../hooks/useRound";

export const ChartNQ = () => {
  const url = `https://api.twelvedata.com/time_series?symbol=NDAQ&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;

  const {
    data: series = [
      {
        data: [],
      },
    ],
  } = useQuery(
    "chart2",
    async () => {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.values;
      const prices = data.map((index) => ({
        x: index.datetime,
        y: [index.open, index.high, index.low, index.close].map(useRound),
      }));
      return [
        {
          data: prices,
        },
      ];
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 864000000,
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
