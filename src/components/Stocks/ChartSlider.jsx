import React, { useState } from "react";
import { ChartSP } from "./ChartSP";
import { ChartNQ } from "./ChartNQ";
import * as S from "./Styles";
import ReactCardFlip from "react-card-flip";
import Slider from "react-slick";

export const ChartSlider = () => {
  const [isFlipped, setFlipped] = useState(false);
  
  setTimeout(() => {
      setFlipped(!isFlipped);
  }, 10000);

 

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
      <div>
        <ChartSP />
      </div>
      <div>
        <ChartNQ />
      </div>
    </ReactCardFlip>
  );
};
