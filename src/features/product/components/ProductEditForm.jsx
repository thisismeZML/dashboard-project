import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";
import { tailChase } from "ldrs"; // Import tailChase for loading animation
import { editProducts } from "../../../services/product";
import toast from "react-hot-toast";

tailChase.register(); // Register the loading spinner

const ProductEditForm = ({ editProduct, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Update the form values when `editProduct` changes
  useEffect(() => {
    if (editProduct?.data) {
      reset({
        product_name: editProduct.data.product_name,
        price: editProduct.data.price,
      });
    }
  }, [editProduct, reset]);


  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await editProducts(id, data.product_name, data.price);
    const json = await res.json();

    if (res.status === 200) {
      toast.success("Product Edited Successfully");
      mutate(`${import.meta.env.VITE_API_URL}/products`);
      if (data.return) {
        navigate("/dashboard/product");
      }
      setIsLoading(false);
    } else {
      toast.error("Fail To Edit");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white">
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
          {...register("product_name", {
            required: "Product name is required",
          })}
          defaultValue={editProduct?.data?.product_name}
        />
        {errors.product_name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.product_name.message}
          </p>
        )}
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
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be greater than 0" },
            })}
            defaultValue={editProduct?.data?.price}
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
          )}
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
          Return to product page after saving
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          type="reset"
          className="px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md text-sm font-semibold transition"
          onClick={() => reset(product)}
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
              <span>Save Changes</span>
            </div>
          ) : (
            <span>Save Changes</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ProductEditForm;
