import React from "react";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProductRoute from "./ProductRoute";
import VoucherRoute from "./VoucherRoute";
import SaleRoute from "./SaleRoute";
import UserSettingRoute from "./UserSettingRoute";

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
      ...VoucherRoute,
      ...SaleRoute,
      ...UserSettingRoute,
    ],
  },
];

export default DashboardRoute;
