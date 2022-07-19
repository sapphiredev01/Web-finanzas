import React from "react";
import { ChartSP } from "./ChartSP";
import { ChartNQ } from "./ChartNQ";
import * as S from "./Styles";

import Slider from "react-slick";

export const ChartSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <S.StyledSliderChart {...settings}>
        <ChartSP />
      <ChartNQ/>
    </S.StyledSliderChart>
  );
};
