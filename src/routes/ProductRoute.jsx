import React from "react";
import ProductPage from "../features/product/pages/ProductPage";
import ProductCreatePage from "../features/product/pages/ProductCreatePage";
import ProductEditPage from "../features/product/pages/ProductEditPage";

const ProductRoute = [
  {
    path: "product",
    element: <ProductPage />,
  },
  {
    path: "product/create",
    element: <ProductCreatePage />,
  },
  {
    path: "product/edit/:id",
    element: <ProductEditPage />,
  },
];

export default ProductRoute;
