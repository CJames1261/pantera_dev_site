import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { preload } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import heroImg from "./assets/Pantera_Claw_hero.webp";

// Preload LCP hero image as early as possible to reduce resource load delay
preload(heroImg, { as: "image", fetchPriority: "high" });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
