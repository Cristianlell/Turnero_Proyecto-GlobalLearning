<<<<<<< HEAD
import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import WithHeader from "../components/WithHeader";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Professionals from "../pages/Professionals";
/* import { useUserContext } from './utils/UserContext'; */
import { useUserContext } from "../utils/UserContext";
import { Auth } from "../components/Auth";

export const RouterProvider = createBrowserRouter([
  {
    path: "/",
    element: (
      <WithHeader>
        <Home />
      </WithHeader>
    ),
  },
  {
    path: "/login",
    element: (
      <WithHeader>
        <Login />
      </WithHeader>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <WithHeader>
        <Auth>
          <Dashboard />
        </Auth>
      </WithHeader>
    ),
  },
  {
    path: "/register",
    element: (
      <WithHeader>
        <Register />
      </WithHeader>
    ),
  },
  {
    path: "/professionals",
    element: (
      <WithHeader>
        <Auth>
          <Professionals />
        </Auth>
      </WithHeader>
    ),
  }

]);
=======
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
>>>>>>> 6a82e8ef63aea6ccdf028f7c5c2c2c17dc45a0e6
