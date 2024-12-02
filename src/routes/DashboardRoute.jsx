import React from "react";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProductRoute from "./ProductRoute";

const DashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...ProductRoute,
    ],
  },
];

export default DashboardRoute;
