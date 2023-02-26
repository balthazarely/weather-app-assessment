import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import "@fontsource/open-sansvariable.css"; // Weight 400.

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
