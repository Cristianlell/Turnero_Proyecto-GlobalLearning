import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { turno as Turno } from './turno.jsx'
export const routerProvider = createBrowserRouter([
      {
            path: '/',
            element: <Login />
      },
      {
            path: '/turnos',
            element: <Turno />
      }
])