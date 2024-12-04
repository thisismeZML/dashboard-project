import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchProduct } from "../../../services/product";
import ProductEditForm from "../components/ProductEditForm";
import ProductFormLoading from "../components/ProductFormLoading";

const ProductEditPage = () => {
  const { id } = useParams();
  const { data: editProduct, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/products/${id}`,
    fetchProduct
  );

  return (
    <div className="mt-[100px] px-11">
      <Breadcrumb />
      <div className=" border rounded-lg shadow-lg p-8 max-w-3xl mx-auto mt-[100px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Product</h2>
        {isLoading ? (
          <ProductFormLoading />
        ) : (
          <ProductEditForm editProduct={editProduct} id={id}/>
        )}
      </div>
    </div>
  );
};

export default ProductEditPage;
