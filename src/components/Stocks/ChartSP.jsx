/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useRound } from "../../hooks/useRound";
import { getStocksSPX } from "../../api/stocksCall";

export const ChartSP = () => {

  const [stocksSP, setStocksSP] = useState([]);

  const getStocksDataSP = () => {
    getStocksSPX()
      .then((data) => {
        setStocksSP(data.SPX);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getStocksDataSP();
  }, []);

  const chart = {
    series: [
      {
        name: "S&P 500",
        data:  stocksSP,
      },
    ],
    options: {
      title: {
        text: "S&P 500",
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
