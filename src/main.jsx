import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root"), Aos.init()).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
