import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import ProductCreateForm from "../components/ProductCreateForm";

const ProductCreatePage = () => {
  return (
    <div className="mt-[100px] px-6">
      <Breadcrumb />
      <div className="max-w-4xl mt-[100px] mx-auto bg-white p-10 rounded-lg shadow-2xl border border-gray-200">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Create Product
          </h1>
          {/* <button className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-lg shadow-md">
            Back to Dashboard
          </button> */}
        </div>
          <ProductCreateForm/>
        {/* Form */}
        
      </div>
    </div>
  );
};

export default ProductCreatePage;
