import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import AddVisa from "../pages/visa/AddVisa";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
        path: "/add-visa",
        element: <AddVisa />,
      },
    ],
  },
]);

export default router;
