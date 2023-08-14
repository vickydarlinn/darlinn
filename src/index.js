import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
