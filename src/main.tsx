import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Tome from "../public/Tabela";
import Home from "./pages/Home";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
);
