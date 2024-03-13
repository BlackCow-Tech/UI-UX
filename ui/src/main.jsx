import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClickedItemProvider } from "./components/ClickedItemContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClickedItemProvider>
      <App />
    </ClickedItemProvider>
  </React.StrictMode>
  
);
