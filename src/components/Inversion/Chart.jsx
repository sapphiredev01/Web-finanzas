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
  const [isDesktop, setDesktop] = useState(window.innerWidth > 820);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 820);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
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
  const paymentFrequency = data[1];
  const time = data[2];

  //Falta mejorar lógica de esta función
  const compoundInterest = (time, paymentFrequency, amount) => {
    const indexes = Array.from({ length: time }, (_, i) => i + 1);
    indexes.map((index) => {
      return index;
    });
    const interest = indexes.map((index) => {
      const values = (amount * (1 + paymentFrequency / 100) ** index).toFixed(
        2
      );
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

          data: compoundInterest(time, paymentFrequency, amount),
        },
      ],
    });
  }, [time, paymentFrequency, amount]);

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
