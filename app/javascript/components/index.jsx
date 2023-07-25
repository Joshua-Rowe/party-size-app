import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = document.getElementById("react-root");
  createRoot(root).render(<App />);
});