import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { turn as Turn } from './turn.jsx';
import { ErrorPage } from "./error-page";

export const routerProvider = createBrowserRouter([
      {
            path: '/',
            element: <Login />
      },
      {
            path: '/turnos',
            element: <Turn />,
            errorElement: <ErrorPage />
      }
])