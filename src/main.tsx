import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Tome from "../public/Tabela";
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
