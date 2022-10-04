import { React, useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartDataLabels
);

const Chart = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: "",
        data: [],
      },
    ],
  });

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const years = ["1er año", "2do año", "3er año", "4to año", "5to año"];

  const amount = data[0];
  const time = data[1];

  const compoundInterest = (time, amount) => {
    const indexes = Array.from({ length: time }, (_, i) => i + 1);
    indexes.map((index) => {
      return index;
    });
    const interest = indexes.map((index) => {

      let values;
      switch(time){
        case "6":
          //capital x (3.33 /100) para sacar el interes mensual
          values = (amount * (3.33 / 100) * index).toFixed(2);
          break;
        case "12":
          //capital x (3.33 /100) para sacar el interes mensual
          values = (amount * (3.33 / 100) * index).toFixed(2);
          break;
        case "3" :
          //capital x (39.96/100) para sacar el interes anual
          values = (amount * (39.96 / 100) * index).toFixed(2);
          break;
        case "5":
          //capital x (39.96/100) para sacar el interes anual
          values = (amount * (39.96 / 100) * index).toFixed(2);
          break;  
      }
      return values;
    });
    return interest;
  };

  const renderSwitch = (time) => {
    switch (time) {
      case "6":
        return months.slice(0, 6);
      case "12":
        return months;
      case "3":
        return years.slice(0, 3);
      case "5":
        return years;
      default:
        return months.slice(0, 6);
    }
  };

  useEffect(() => {
    setChartData({
      labels: renderSwitch(time),
      datasets: [
        {
          fill:true,
          label: "Rendimiento de inversión",
          borderColor: "#00345b",
          backgroundColor: "rgba(84, 123, 153, 0.7)",

          data: compoundInterest(time, amount),
        },
      ],
    });
  }, [time, amount]);

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Inversión",
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          datalabels: {
            display: false,
          },
        }
      }}
    />
  );
};

export default Chart;
