import React,{useState, useEffect} from "react";
import { ItemStock } from "./RowItem";
import * as S from "./Styles";
import { useQuery } from "react-query";
import { getStocks } from "../../api/stocksCall";

export const StockRow = () => {
  // const { data: stocks, isLoading } = useQuery(
  //   "stocks",
  //   async () => {
  //     const symbols = ["SPX", "NDAQ", "SIX", "SPY", "USD"];
  //     const stocks = [];
  //     for (const symbol of symbols) {
  //       const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=4f26cd4907b046838d42aa1d051e929f`;
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       stocks.push({
  //         symbol: result.symbol,
  //         name: result.name,
  //         close: result.close,
  //         changePercent: result.percent_change,
  //       });
  //     }
  //     return stocks;
  //   },
  //   {
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false,
  //     staleTime: 864000000,
  //   }
  // );

  const [stocksRow, setStocksRow] = useState([]);

  const getStocksDataRow = () => {
    getStocks()
      .then((data) => {
        setStocksRow(data.ROW);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getStocksDataRow();
  }, []);

  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    variableWidth: true,
    arrows: false,
  };

  return (

        <S.StyledSlider {...settings}>
          {stocksRow.map((stock, index) => {
            return <ItemStock key={index} stock={stock} />;
          })}
        </S.StyledSlider>
      
  );
};
