import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; 
import "./styles/Home.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-slate-900 min-h-screen w-full">
      <App />
    </div>
  </React.StrictMode>
);