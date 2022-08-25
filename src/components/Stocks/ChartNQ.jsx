/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useRound } from "../../hooks/useRound";
import { getStocksNDAQ } from "../../api/stocksCall";

export const ChartNQ = () => {
  const [stocksNQ, setStocksNQ] = useState([]);

  const getStocksDataNQ= () => {
    getStocksNDAQ()
      .then((data) => {
        setStocksNQ(data.NDAQ);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getStocksDataNQ();
  }, []);

  const chart = {
    series: [
      {
        name: "Nasdaq",
        data: stocksNQ,
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
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      fill: {
        type: "gradient",
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
