/* eslint-disable react/prop-types */
import { React } from "react";
import { useRound } from "../../hooks/useRound";
import { useQuery } from "react-query";
import * as S from "./Styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "Bitcoin",
      fontSize: 20,
      
    },
    datalabels: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

export const ChartBTC = () => {
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=360`;

  const { data: series, isLoading } = useQuery(
    "chartBTC",
    async () => {
      const series = [];
      const response = await fetch(url);
      const result = await response.json();
      const data = result.prices;
      data.forEach((index) => {
        series.push(index[1].toFixed(2));
      });
      return series;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 864000000,
    }
  );

  const data = {
    labels: series,
    datasets: [
      {
        label: "Bitcoin",
        backgroundColor: "#00345b",
        borderColor: "#00345b",
        data: series,
      },
    ],
  };

  return (
    <S.Card>
      <Line data={data} options={options} />
    </S.Card>
  );
};
