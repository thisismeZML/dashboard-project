import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createProduct } from "../../../services/product";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";  // Add useNavigate for navigation
import { tailChase } from "ldrs";  // Import tailChase for loading animation

tailChase.register(); // Register the loading spinner

const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();  

  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await createProduct(data.product_name, data.price);
    const json = await res.json();

    if (res.status === 201) {
      toast.success("Product Created Successfully");
      mutate(`${import.meta.env.VITE_API_URL}/products`);
      setIsLoading(false);

      
      if (data.return) {
        
        navigate("/dashboard/product");
      } else {
        reset(); 
      }
    } else {
      toast.error("Fail To Create");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Product Name */}
      <div>
        <label
          htmlFor="productName"
          className="block text-lg font-semibold text-gray-700 mb-2"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          placeholder="Enter product name"
          className="w-full px-5 py-4 text-gray-700 text-base bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none"
          {...register("product_name")}
        />
      </div>

      {/* Price */}
      <div>
        <label
          htmlFor="price"
          className="block text-lg font-semibold text-gray-700 mb-2"
        >
          Price
        </label>
        <div className="relative">
          <input
            type="number"
            id="price"
            placeholder="Enter product price"
            className="w-full px-5 py-4 text-gray-700 text-base bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition outline-none"
            {...register("price")}
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          id="backToProductPage"
          className="h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400 transition"
          {...register("return")}
        />
        <label
          htmlFor="backToProductPage"
          className="text-sm text-gray-600 font-medium select-none"
        >
          Return to product page after creating
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="reset"
          className="px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md text-sm font-semibold transition"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-primary hover:opacity-90 rounded-lg shadow-lg text-sm font-semibold transition"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <l-tail-chase size="20" speed="1.75" color="white"></l-tail-chase>
              <span>Create Product</span>
            </div>
          ) : (
            <span>Create Product</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ProductCreateForm;
