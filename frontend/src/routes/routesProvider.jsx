import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";

export const routerProvider = createBrowserRouter([
      {
            path:'/',
            element:<Login/>
      }
])