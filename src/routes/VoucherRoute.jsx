import React from "react";
import VoucherPage from "../features/voucher/pages/VoucherPage";
import VoucherDetail from "../features/voucher/pages/VoucherDetail";

const VoucherRoute = [
  {
    path: "voucher",
    element: <VoucherPage />,
  },
  {
    path: "voucher/detail/:id",
    element: <VoucherDetail />,
  },
];

export default VoucherRoute;
