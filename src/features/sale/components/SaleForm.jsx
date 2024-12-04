import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { fetchProduct } from "../../../services/product";
import { useSaleStore } from "../../../stores/useSaleStore";

const SaleForm = () => {
  const { records, addRecord, updateQuantity } = useSaleStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);

    const existingRecord = records.find(
      ({ product: { id } }) => currentProduct.id === id
    );

    const newRecord = {
      product_id: currentProduct.id,
      id: Date.now(),
      product: currentProduct,
      quantity: data.quantity,
      price: currentProduct.price,
      cost: parseInt(currentProduct.price) * parseInt(data.quantity),
      created_at: new Date().toISOString(),
    };

    if (!existingRecord) {
      addRecord(newRecord);
    } else {
      updateQuantity(existingRecord.id, data.quantity);
    }

    reset();
  };

  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/products?limit=100`,
    fetchProduct
  );

  return (
    <div className=" p-6 bg-white shadow-md rounded-lg">
      <form
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Product Dropdown */}
        <div>
          <label
            htmlFor="product_name"
            className="block text-gray-700 font-medium mb-2"
          >
            Select Your Product
          </label>
          <select
            id="product_name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("product", {
              required: true,
            })}
          >
            <option value="">Choose one product</option>
            {data?.data?.map((product) => (
              <option key={product.id} value={JSON.stringify(product)}>
                {product.product_name}
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="text-red-500 text-sm mt-1">
              Please select a product.
            </p>
          )}
        </div>

        {/* Quantity Input */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-medium mb-2"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("quantity", {
              required: true,
              min: 1,
            })}
          />
          {errors.quantity?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              Quantity is required.
            </p>
          )}
          {errors.quantity?.type === "min" && (
            <p className="text-red-500 text-sm mt-1">
              Quantity must be at least 1.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;