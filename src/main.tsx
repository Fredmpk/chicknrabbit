import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker"; // Import the service worker

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorker.register(); // This will enable PWA features
