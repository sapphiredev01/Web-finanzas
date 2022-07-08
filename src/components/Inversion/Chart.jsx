import { React, useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
    console.log(interest);
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
        return months;
    }
  };

  useEffect(() => {
    setChartData({
      labels: renderSwitch(time),
      datasets: [
        {
          label: "Rendimiento de inversión",
          backgroundColor: "#00345b",
          data: compoundInterest(time, paymentFrequency, amount),
        },
      ],
    });
  }, [time, paymentFrequency, amount]);

  return (
    <Bar
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
            display: isDesktop ? true : false,
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default Chart;
