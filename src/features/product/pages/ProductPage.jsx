import React, { useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div className="mt-[100px] px-11">
      <Breadcrumb />
      <div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 flex justify-end items-center">
            <Link to="create" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              + Add New Product
            </Link>
          </div>
          <ProductTable/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
