import React from "react";
import * as S from "./Styles";
import Item from "./RowItem";

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
        return <Item key={index} coin={coin} />;
      })}
    </S.StyledSlider>
  );
};

