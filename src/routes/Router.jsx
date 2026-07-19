import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";

import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Requests from "../pages/Requests";
import Registrations from "../pages/Registrations";
import Favourites from "../pages/Favourites";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import MyRequests from "../pages/MyRequests";

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
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/registrations",
        element: <Registrations />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/myrequests",
        element: <MyRequests />,
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
