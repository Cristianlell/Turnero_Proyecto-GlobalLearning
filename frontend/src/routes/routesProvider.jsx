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
import { Turn } from "../pages/Turn";

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
  },
  {
    path: "/turns",
    element: (
      <WithHeader>
          <Turn/>
      </WithHeader>
    ),
  }

]);
