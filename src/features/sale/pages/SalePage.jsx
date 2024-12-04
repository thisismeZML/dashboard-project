import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import SaleForm from "../components/SaleForm";
import { useForm } from "react-hook-form";
import SaleTable from "../components/SaleTable";
import { useSaleStore } from "../../../stores/useSaleStore";
import { useSWRConfig } from "swr";
import { addProduct, generateInvoiceNumber } from "../../../services/sale";
import toast from "react-hot-toast";

const SalePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { records, resetRecord } = useSaleStore();

  const { mutate } = useSWRConfig();

  const onSubmit = async (data) => {
    const total = records.reduce((pv, cv) => pv + cv.cost, 0);
    const tax = total * 0.07;
    const net_total = total + tax;

    try {
      const res = await addProduct(data, total, tax, net_total, records);
      const json = await res.json();
    
      if (res.status === 201) {
        toast.success("Voucher was successfully confirmed");
        mutate(`${import.meta.env.VITE_API_URL}/vouchers`);
        resetRecord();
        reset();
      } else {
        throw new Error(json.message || "Failed to confirm voucher");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="mt-16 px-6 md:px-11 flex flex-col min-h-screen">
      <Breadcrumb />
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Sales Form
        </h2>
      </div>
      <SaleForm />
      <div className="grid xl:grid-cols-4 gap-6 mt-6">
        {/* Sale Table */}
        <SaleTable />
        {/* Form Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
            id="userForm"
          >
            <div>
              <label
                htmlFor="voucher_id"
                className="text-gray-600 dark:text-gray-300 font-medium block mb-2"
              >
                Voucher ID
              </label>
              <input
                id="voucher_id"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                {...register("voucher_id")}
                defaultValue={generateInvoiceNumber()}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="customer_name"
                className="text-gray-600 dark:text-gray-300 font-medium block mb-2"
              >
                Customer Name
              </label>
              <input
                id="customer_name"
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.customer_name
                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                    : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                }`}
                {...register("customer_name", { required: "Name is required" })}
              />
              {errors.customer_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customer_name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="customer_email"
                className="text-gray-600 dark:text-gray-300 font-medium block mb-2"
              >
                Customer Email
              </label>
              <input
                id="customer_email"
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.customer_email
                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                    : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                }`}
                {...register("customer_email", {
                  required: "Email is required",
                })}
              />
              {errors.customer_email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customer_email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="sale_date"
                className="text-gray-600 dark:text-gray-300 font-medium block mb-2"
              >
                Sale Date
              </label>
              <input
                id="sale_date"
                type="date"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                {...register("sale_date", { required: "Date is required" })}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-end w-full my-6">
        <button
          form="userForm"
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Confirm Voucher
        </button>
      </div>
    </div>
  );
};

export default SalePage;
