import React,{useState, useEffect} from "react";
import { ItemStock } from "./RowItem";
import * as S from "./Styles";
import { useQuery } from "react-query";
import { getStocksRow } from "../../api/stocksCall";

export const StockRow = () => {

  const [stocksRow, setStocksRow] = useState([]);

  const getStocksDataRow = () => {
    getStocksRow()
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
