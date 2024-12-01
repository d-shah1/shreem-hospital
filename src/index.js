/* REACT IMPORTS */
import React from "react";
import ReactDOM from "react-dom/client";

/* APPLICATION ROUTES */
import App from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
