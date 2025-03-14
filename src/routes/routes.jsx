import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import AddVisa from "../pages/visa/AddVisa";
import PrivateRoutes from "./PrivateRoutes";
import AllVisa from "../pages/visa/AllVisa";
import MyAddedVisa from "../pages/visa/MyAddedVisa";
import EditVisa from "../pages/visa/EditVisa";
import { apiUrl } from "../hooks/useApiUrl";
import VisaDetails from "../pages/visa/VisaDetails";
import MyAppliedVisa from "../pages/visa/MyAppliedVisa";
import ForgotPass from "../pages/auth/ForgotPass";
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
        path: "/forgot-pass",
        element: <ForgotPass />,
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoutes>
            <AddVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-visa",
        element: <AllVisa />,
      },
      {
        path: "visa-list",
        element: (
          <PrivateRoutes>
            <MyAddedVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-visa/:id",
        element: (
          <PrivateRoutes>
            <EditVisa />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${apiUrl}/visas/${params.id}`),
      },
      {
        path: "/visas/:id",
        element: (
          <PrivateRoutes>
            <VisaDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${apiUrl}/visas/${params.id}`),
      },
      {
        path: "applied-visa",
        element: (
          <PrivateRoutes>
            <MyAppliedVisa />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
