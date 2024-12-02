import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./publicRoute";
import PublicLayout from "../features/public/components/publicLayout";
import AuthRoute from "./AuthRoute";
import AuthLayout from "../features/auth/components/AuthLayout";
import DashboardRoute from "./DashboardRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...PublicRoute],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [...AuthRoute],
  },
  ...DashboardRoute,
]);
