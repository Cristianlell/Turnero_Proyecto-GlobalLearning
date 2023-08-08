import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { turn as Turn } from './turn.jsx';
import { ErrorPage } from "./error-page";
import { Home } from "../pages/Home";

export const routerProvider = createBrowserRouter([
      {
            path: '/',
            element: <Home />
      },
      {
            path: '/turnos',
            element: <Turn />,
            errorElement: <ErrorPage />
      }
])