/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import * as S from "./Styles";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useRound } from "../../hooks/useRound";
import { getStocks } from "../../api/stocksCall";

export const ChartSP = () => {
  // const url = `https://api.twelvedata.com/time_series?symbol=SPX&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;

  // const {
  //   data: series = [
  //     {
  //       data: [],
  //     },
  //   ],
  // } = useQuery(
  //   "chart",
  //   async () => {
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     const data = result.values;
  //     const prices = data.map((index) => ({
  //       x: index.datetime,
  //       y: [index.open, index.high, index.low, index.close].map(useRound),
  //     }));
  //     return [
  //       {
  //         data: prices,
  //       },
  //     ];
  //   },
  //   {
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false,
  //     staleTime: 864000000,
  //   }
  // );

  const [stocksSP, setStocksSP] = useState([]);

  const getStocksDataSP = () => {
    getStocks()
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
