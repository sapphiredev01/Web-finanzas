import React, { useState } from "react";
import { ChartSP } from "./ChartSP";
import { ChartNQ } from "./ChartNQ";
import ReactCardFlip from "react-card-flip";

export const ChartSlider = () => {
  const [isFlipped, setFlipped] = useState(false);
  
  setTimeout(() => {
      setFlipped(!isFlipped);
  }, 15000);

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
