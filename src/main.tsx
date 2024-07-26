import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker"; // Import the service worker
import { StartPage } from "./components/StartPage";
import { PhotoPage } from "./components/PhotoPage";

// Define the router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />, // Define the StartPage component for the root path
  },
  {
    path: "photo/:category",
    element: <PhotoPage />, // Define the PhotoPage component with a dynamic segment
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Register the service worker
serviceWorker.register(); // This will enable PWA features
