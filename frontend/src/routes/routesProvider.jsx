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
  /* {
    path: "/professionals",
    element: (
      <WithHeader>
        {userData?.userType === "profesional" ? (
          <Professionals />
        ) : (
          <Navigate to="/" />
        )}
      </WithHeader>
    ),
  }, */
]);
