import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Bootstrap CSS removed - using Tailwind instead
import "swiper/css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
