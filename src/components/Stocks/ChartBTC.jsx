/* eslint-disable react/prop-types */
import { React } from "react";
import { useRound } from "../../hooks/useRound";
import { useQuery } from "react-query";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";

export const ChartBTC = () => {
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=360`;

  const formatYmd = (date) => date.toISOString().slice(0, 10);

  const { data: series = [] } = useQuery(
    "chartBTC",
    async () => {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.prices;
      const series = data.map((index) => [
        formatYmd(new Date(index[0])),
        useRound(index[1]),
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
        name: "Bitcoin",
        data: series,
      },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      title: {
        text: "Bitcoin",
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
      },
      stroke: {
        curve: 'smooth',
        colors: ['#F39C12'],
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        colors: ['#F39C12'],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
  };

  return (
    <S.Card>
      <ApexChart
        options={chart.options}
        series={chart.series}
        type="area"
        width="100%"
        height={300}
      />
    </S.Card>
  );
};
