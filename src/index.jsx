import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./context/LoginContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
  </BrowserRouter>
);
