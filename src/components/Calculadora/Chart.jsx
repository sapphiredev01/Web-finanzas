import React from "react";
import * as Content from "./Content";
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
  Legend
);

const Chart = ({ data }) => {
  const labels = ["Monto", "Tiempo"];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Rendimiento de inversión",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: data,
      },
    ],
  };

  return (
    <Content.Div2>
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
              text: "Rendimiento de inversión",
            },
          },
        }}
      />
    </Content.Div2>
  );
};

export default Chart;
