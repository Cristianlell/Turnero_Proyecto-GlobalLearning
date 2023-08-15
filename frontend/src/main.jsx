// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RouterProvider as routerProvider } from "./routes/RoutesProvider";
import { UserProvider } from "./utils/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={routerProvider} />
    </UserProvider>
  </React.StrictMode>
);
