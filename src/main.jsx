import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
import App from "./App";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);
