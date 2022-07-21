/* eslint-disable react/prop-types */
import { React } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useRound } from "../../hooks/useRound";

export const ChartNQ = () => {
  const url = `https://api.twelvedata.com/time_series?symbol=NDAQ&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;

  const { data: series = [] } = useQuery(
    "chartNQ",
    async () => {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.values;
      const series = data.map((index) => [
        index.datetime,
        [index.open, index.high, index.low, index.close].map(useRound),
      ]);
      return series;
    },
    {
      staleTime: Infinity,
      refetchInterval: 300000,
      refetchIntervalInBackground: 300000,
    }
  );

  const chart = {
    series: [
      {
        name: "Nasdaq",
        data: series,
      },
    ],
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
        series={chart.series}
        type="candlestick"
        width="100%"
        height={300}
      />
    </S.Card>
  );
};
