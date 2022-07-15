import React, {useEffect, useState} from "react";
import * as S from "./Styles";
import {ItemCrypto, ItemStock } from "./RowItem";

export const CryptoRow = ({ coins }) => {
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
      {coins.map((coin, index) => {
        return <ItemCrypto key={index} coin={coin} />;
      })}
    </S.StyledSlider>
  );
};

export const StockRow = ({stocks}) => {
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
      {stocks.map((stock, index) => {
        return <ItemStock key={index} stock={stock} />;
      })}
    </S.StyledSlider>
  );
};
