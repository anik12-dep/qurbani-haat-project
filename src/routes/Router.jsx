import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllAnimals from "../pages/AllAnimals";
import AnimalDetails from "../pages/AnimalDetails";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import NotFound from "../pages/NotFound";

import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/animals",
        element: <AllAnimals />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <AnimalDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
