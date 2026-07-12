import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Requests from "../pages/Requests";
import Registerations from "../pages/Registerations";
import Favourites from "../pages/Favourites";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export const Router = createBrowserRouter([
  // Protected Routes
  {
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/registerations",
        element: <Registerations />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },

  // Authentication Routes
  {
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);