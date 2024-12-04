import React from "react";
import SaleItem from "./SaleItem";
import { useSaleStore } from "../../../stores/useSaleStore";

const SaleTable = () => {
  const { records } = useSaleStore();
  const total = records.reduce((pv, cv) => pv + cv.cost, 0);
  const tax = total * 0.07;
  const netTotal = total + tax;

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6 col-span-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">#</th>
            <th scope="col" className="px-6 py-3">Product Name</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Quantity</th>
            <th scope="col" className="px-6 py-3">Cost</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {records.map((record, index) => (
            <SaleItem key={record.id} record={record} index={index} />
          ))}
          {/* Footer Rows */}
          <tr className="bg-gray-50 dark:bg-gray-800">
            <td colSpan={4} className="px-6 py-3 text-right font-bold">
              Total
            </td>
            <td colSpan={2} className="px-6 py-3">${total.toFixed(2)}</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <td colSpan={4} className="px-6 py-3 text-right font-bold">
              Tax (7%)
            </td>
            <td colSpan={2} className="px-6 py-3">${tax.toFixed(2)}</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-900">
            <td colSpan={4} className="px-6 py-3 text-right font-bold text-blue-600">
              Net Total
            </td>
            <td colSpan={2} className="px-6 py-3 text-blue-600 font-bold">
              ${netTotal.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SaleTable;