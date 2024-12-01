import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./publicRoute";
import PublicLayout from "../features/public/components/publicLayout";
import AuthRoute from "./AuthRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...PublicRoute],
  },
  ...AuthRoute,
]);
