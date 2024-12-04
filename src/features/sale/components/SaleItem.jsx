import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSaleStore } from "../../../stores/useSaleStore";

const SaleItem = ({
  record: {
    id,
    price,
    cost,
    quantity,
    product: { product_name },
  },
  index,
}) => {
  const { deleteRecord, updateQuantity } = useSaleStore();

  const plusQuantity = () => {
    updateQuantity(id, 1);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    }
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
      <td className="px-6 py-3 font-medium">{index + 1}</td>
      <td className="px-6 py-3">{product_name}</td>
      <td className="px-6 py-3">${price}</td>
      <td className="px-6 py-3 flex items-center gap-2">
        <button
          onClick={minusQuantity}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={plusQuantity}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          +
        </button>
      </td>
      <td className="px-6 py-3">${cost.toFixed(2)}</td>
      <td className="px-6 py-3">
        <button
          onClick={() => deleteRecord(id)}
          className="p-2 rounded-full text-red-500 hover:bg-red-100 dark:hover:bg-gray-600"
        >
          <RiDeleteBin6Line size={18} />
        </button>
      </td>
    </tr>
  );
};

export default SaleItem;