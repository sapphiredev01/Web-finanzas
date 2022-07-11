import React from "react";
import ReactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
import App from "./App";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const queryClient = new QueryClient();

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AlertProvider>,
  document.getElementById("root")
);
